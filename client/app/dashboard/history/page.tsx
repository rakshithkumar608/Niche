"use client";

import API from "@/app/lib/api";
import { useState, useEffect } from "react";

interface Script {
    _id: string;
    hook: string;
    content: string;
    pattern_interrupt: string;
    cta: string;
    niche: string;
    tone: string;
    performance_score: number;
    createdAt: string;
}

interface Generation {
    _id: string;
    niche: string;
    tone: string;
    count: number;
    scripts: Script[];
    createdAt: string;
}

export default function HistoryPage() {
    const [generations, setGenerations] = useState<Generation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [expandedGens, setExpandedGens] = useState<Record<string, boolean>>({});

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            setLoading(true);
            const res = await API.get("/scripts/history");
            setGenerations(res.data.generations || []);
        } catch (err) {
            setError("Failed to load history");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleExpand = (id: string) => {
        setExpandedGens((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-100">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-gray-500">Loading history...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">History 📜</h1>
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">History 📜</h1>
                <span className="text-sm text-gray-500">{generations.length} generation{generations.length !== 1 ? "s" : ""}</span>
            </div>

            {generations.length === 0 ? (
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    <p className="text-gray-500 text-lg">No scripts generated yet.</p>
                    <p className="text-gray-400 text-sm mt-1">Go to Generate to create your first series of scripts!</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {generations.map((gen) => {
                        const isExpanded = !!expandedGens[gen._id];
                        return (
                            <div
                                key={gen._id}
                                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                            >
                                {/* Generation Header bar (Clickable) */}
                                <div 
                                    className="bg-linear-to-r from-blue-500 to-indigo-600 px-5 py-4 cursor-pointer flex items-center justify-between transition-colors hover:from-blue-600 hover:to-indigo-700"
                                    onClick={() => toggleExpand(gen._id)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-white font-semibold">
                                                    Batch of {gen.count || gen.scripts?.length || 0} Scripts
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                                    {gen.niche}
                                                </span>
                                                <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                                    {gen.tone}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/80 text-sm">
                                            {new Date(gen.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg className={`w-4 h-4 text-white transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Scripts Body */}
                                {isExpanded && (
                                    <div className="p-5 bg-gray-50 border-t border-gray-100">
                                        <div className="space-y-4">
                                            {(!gen.scripts || gen.scripts.length === 0) ? (
                                                <p className="text-gray-500 text-sm text-center py-4">No scripts found for this generation.</p>
                                            ) : (
                                                gen.scripts.map((script, index) => (
                                                    <div key={script._id} className="bg-white border text-left border-gray-200 rounded-lg p-5 shadow-sm">
                                                        <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
                                                            <span className="text-gray-500 font-semibold text-sm">Virtual Script #{index + 1}</span>
                                                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full border border-green-200">
                                                                Score: {script.performance_score}
                                                            </span>
                                                        </div>

                                                        <h2 className="text-md font-bold text-gray-800 mb-2">
                                                            🎣 {script.hook}
                                                        </h2>
                                                        <p className="text-gray-600 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                                                            {script.content}
                                                        </p>

                                                        {script.pattern_interrupt && (
                                                            <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-2 mb-3 rounded-r">
                                                                <p className="text-amber-800 text-sm font-medium">
                                                                    ⚡ Pattern Interrupt
                                                                </p>
                                                                <p className="text-amber-700 text-sm">{script.pattern_interrupt}</p>
                                                            </div>
                                                        )}

                                                        <div className="bg-blue-50 border-l-4 border-blue-400 px-4 py-2 rounded-r">
                                                            <p className="text-blue-800 text-sm font-medium">
                                                                📢 Call to Action
                                                            </p>
                                                            <p className="text-blue-700 text-sm">{script.cta}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}