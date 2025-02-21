import { redirect, type LoaderFunction, type MetaFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
    return redirect("/login");
};

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-16">
                <header className="flex flex-col items-center gap-9">
                    <div className="h-[144px] w-[434px]">
                        <img
                            src="/logo-light.png"
                            alt="Remix"
                            className="block w-full dark:hidden"
                        />
                        <img
                            src="/logo-dark.png"
                            alt="Remix"
                            className="hidden w-full dark:block"
                        />
                    </div>
                </header>
            </div>
        </div>
    );
}