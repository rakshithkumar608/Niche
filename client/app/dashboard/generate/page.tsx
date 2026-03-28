"use client";

import API from "@/app/lib/api";
import { useState } from "react";
import toast from "react-hot-toast";



export default function GeneratePage() {
    const [form, setForm] = useState({
        niche:"",
        tone: "",
        count: 5,
    });

    const [script, setScript] = useState<Record<string, string | number>[]>([]);
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        try {
            setLoading(true);

            const res = await API.post("/scripts/generate", form);

            setScript(res.data.scripts || []);
        } catch {
            toast.error("😭 An error occurred while generating scripts. Please try again.")
        } finally {
            setLoading(false);
        }
    }
    return ( 
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Generate Scripts
            </h1>

            <div className="space-y-3 max-w-md">
                <input 
                placeholder="Niche (Eg:Fiteness, Business)"
                className="w-full p-2 border rounded"
                onChange={(e) => setForm({ ...form, niche: e.target.value })}
                />

                <input 
                placeholder="Tone (Eg: Humorous, Professional)"
                className="w-full p-2 border rounded"
                onChange={(e) => setForm({ ...form, tone: e.target.value })}
                />
                <input 
                type="number"
                placeholder="Number of Scripts"
                className="w-full p-2 border rounded"
                onChange={(e) => setForm({ ...form, count: parseInt(e.target.value) || 5 })}
                />

                <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={generate}
                disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Scripts"}
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
                {script.map((scripts, index) => (
                    <div
                    key={index}
                    className="p-4 bg-white rounded shadow" 
                    >
                        <h2 className="font-bold">
                            {scripts.hook}
                        </h2>
                        <p className="text-sm mt-2">
                            {scripts.content}
                        </p>
                        <p className="text-xs mt-2 text-gray-500">
                            ⚡{scripts.pattern_interrupt}
                        </p>
                        <p className="mt-2 font-semibold">
                            CTA: {scripts.cta}
                        </p>
                        <p className="text-green-600">
                            Score: {scripts.performance_score}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}