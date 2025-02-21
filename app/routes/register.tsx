import { Form, useActionData  } from "@remix-run/react";
import { json, redirect, createCookieSessionStorage, LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import bcrypt from "bcryptjs";
import { connectDB } from "../utils/db.server";
import User from "../models/user";
import crypto from "crypto";

// ** Session Storage Setup **
const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        secrets: [process.env.SESSION_SECRET as string],
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
    },
});

export const loader: LoaderFunction = async ({ request }) => {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
    if (session.has("userId")) {
        await connectDB();

        const user = await User.findById(session.get("userId"));

        if (!user) {
            return null;
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();
        
        return redirect("/dashboard");
    }
    return null;
};

// ** Register Action **
export const action = async ({ request }: { request: Request }) => {
    await connectDB(); // Connect to MongoDB

    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!username || !password || !confirmPassword) {
        return json({ error: "All fields are required." }, { status: 400 });
    }

    if (password !== confirmPassword) {
        return json({ error: "Passwords do not match." }, { status: 400 });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return json({ error: "Username is already taken." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sessionToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
        username,
        password: hashedPassword,
        session: sessionToken,
        lastLogin: new Date(),
    });

    await newUser.save();

    // Create session and redirect
    const session = await sessionStorage.getSession();
    session.set("userId", newUser._id.toString());
    session.set("token", sessionToken);

    return redirect("/dashboard", {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session),
        },
    });
};

// ** Register UI Component **
export default function Register() {
    const actionData = useActionData<{ error?: string }>();

    useEffect(() => {
        if (actionData?.error) {
            alert(actionData.error);
        }
    }, [actionData]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <Form method="post" className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </Form>
            </div>
        </div>
    );
}
