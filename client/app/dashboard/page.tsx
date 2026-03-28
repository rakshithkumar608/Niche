"use client";

import { useRouter } from "next/navigation";





export default function DashboardLayout() {
    const router = useRouter();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow max-w-md">
                <h2 className="text-xl font-semibold mb-2">
                    Generate your first business plan with Niche!
                </h2>

                <p className="text-gray-600 mb-4">
                    Click the button below to start generating your business plan.
                </p>

                <button
                onClick={() => router.push("/dashboard/generate")} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Generate 
                </button>
            </div>
        </div>
    )
}