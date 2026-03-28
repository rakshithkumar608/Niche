"use client";

import { useRouter } from "next/navigation";





export default function DashboardLayout() {
    const router = useRouter();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>
        </div>
    )
}