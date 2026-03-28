"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login")
        }
    }, [router]);

    return (
        <div className="flex min-h-screen bg-gray-100">

            <aside className="w-64 bg-black text-white p-6">
                <h2 className="text-xl font-bold mb-8">Niche</h2>

                <nav className="space-y-4">
                    <button
                    onClick={() => router.push("/dashboard")} 
                    className="block w-full text-left hover:text-gray-300">
                        Dashboard
                        </button>

                        <button
                    onClick={() => router.push("/dashboard/generate")} 
                    className="block w-full text-left hover:text-gray-300">
                        Generate
                        </button>

                        <button
                    onClick={() => router.push("/dashboard/history")} 
                    className="block w-full text-left hover:text-gray-300">
                        History
                        </button>
                </nav>

                <button className="mt-10 text-red-400" onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/login");
                }}>
                    Logout
                </button>
            </aside>

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    )

}