"use client";

import API from "@/app/lib/api";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Copy, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

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

    const copyScript = (script: Script) => {
        const text = `${script.hook}\n\n${script.content}\n\nPattern Interrupt: ${script.pattern_interrupt}\nCTA: ${script.cta}`;
        navigator.clipboard.writeText(text);
        toast.success("Script copied to clipboard!");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[70vh]">
                <div className="text-center">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-[#6750A4] border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-[#49454F]">Loading your creation history...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 max-w-md mx-auto">
                <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center">
                    <p className="font-medium">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#FFFBFE] py-10 px-6">
            <div className="max-w-5xl mx-auto">
                
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#6750A4] rounded-2xl flex items-center justify-center">
                            <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-medium text-[#1C1B1F] tracking-tight">History</h1>
                            <p className="text-[#49454F]">Your previous generations</p>
                        </div>
                    </div>
                    <div className="text-sm text-[#79747E] bg-white px-5 py-2 rounded-full border border-[#E7E0EC]">
                        {generations.length} generations
                    </div>
                </div>

                {generations.length === 0 ? (
                    <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-[#E7E0EC]">
                        <div className="mx-auto w-20 h-20 bg-[#E8DEF8] rounded-2xl flex items-center justify-center mb-6">
                            <Sparkles className="w-12 h-12 text-[#6750A4]" />
                        </div>
                        <h3 className="text-2xl font-medium text-[#1C1B1F] mb-3">No generations yet</h3>
                        <p className="text-[#49454F] max-w-md mx-auto">
                            Go to the Generate page and create your first batch of viral scripts!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {generations.map((gen, genIndex) => {
                            const isExpanded = !!expandedGens[gen._id];
                            return (
                                <motion.div
                                    key={gen._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: genIndex * 0.05 }}
                                    className="bg-white rounded-3xl overflow-hidden border border-[#E7E0EC] shadow-sm"
                                >
                                    
                                    <div
                                        onClick={() => toggleExpand(gen._id)}
                                        className="bg-[#F3EDF7] px-8 py-6 flex items-center justify-between cursor-pointer hover:bg-[#E8DEF8] transition-all group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                                <Calendar className="w-6 h-6 text-[#6750A4]" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#1C1B1F] text-lg">
                                                    Batch of {gen.count || gen.scripts?.length || 0} Scripts
                                                </div>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="bg-white px-4 py-1 text-xs font-medium rounded-full text-[#6750A4] border border-[#E7E0EC]">
                                                        {gen.niche}
                                                    </span>
                                                    <span className="bg-white px-4 py-1 text-xs font-medium rounded-full text-[#7D5260] border border-[#E7E0EC]">
                                                        {gen.tone}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-[#79747E]">
                                            <span>
                                                {new Date(gen.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-8 space-y-6 bg-white">
                                                    {gen.scripts && gen.scripts.length > 0 ? (
                                                        gen.scripts.map((script, idx) => (
                                                            <div 
                                                                key={script._id || idx}
                                                                className="bg-[#FFFBFE] border border-[#E7E0EC] rounded-2xl p-7 hover:shadow-md transition-shadow"
                                                            >
                                                                <div className="flex justify-between items-start mb-5">
                                                                    <div>
                                                                        <div className="uppercase text-xs tracking-widest text-[#79747E]">SCRIPT {idx + 1}</div>
                                                                        <h3 className="text-xl font-semibold text-[#1C1B1F] mt-1 leading-tight">
                                                                            {script.hook}
                                                                        </h3>
                                                                    </div>
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        onClick={() => copyScript(script)}
                                                                        className="text-[#6750A4] hover:text-[#6750A4]/80 p-2 rounded-xl hover:bg-[#E8DEF8] transition-colors"
                                                                    >
                                                                        <Copy className="w-5 h-5" />
                                                                    </motion.button>
                                                                </div>

                                                                <p className="text-[#49454F] leading-relaxed text-[17px] mb-6">
                                                                    {script.content}
                                                                </p>

                                                                {script.pattern_interrupt && (
                                                                    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-5">
                                                                        <p className="font-medium text-amber-800 text-sm mb-1">⚡ Pattern Interrupt</p>
                                                                        <p className="text-amber-700">{script.pattern_interrupt}</p>
                                                                    </div>
                                                                )}

                                                                <div className="bg-[#E8DEF8]/30 border-l-4 border-[#6750A4] p-5 rounded-r-2xl">
                                                                    <p className="font-medium text-[#6750A4] text-sm mb-1">📢 Call to Action</p>
                                                                    <p className="text-[#49454F]">{script.cta}</p>
                                                                </div>

                                                                <div className="mt-6 flex items-center gap-2">
                                                                    <span className="text-xs text-[#79747E]">Performance Score</span>
                                                                    <span className="font-bold text-green-600 text-lg">★ {script.performance_score}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-center text-[#79747E] py-8">No scripts found in this generation.</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}