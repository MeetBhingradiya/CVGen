import { Form, useActionData } from "@remix-run/react";
import { json, redirect, createCookieSessionStorage, LoaderFunction } from "@remix-run/node";
import { connectDB } from "../utils/db.server";
import User from "../models/user";
import CVs from "../models/cv";

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
            return redirect("/login");
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();


        return null;
    }

    return redirect("/login");
};


export default function Dashbord() {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            This is Dashbord
        </div>
    );
}