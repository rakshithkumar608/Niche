"use client";

import API from "@/app/lib/api";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Sparkles, Wand2, Copy, RefreshCw } from "lucide-react";

export default function GeneratePage() {
  const [form, setForm] = useState({
    niche: "",
    tone: "",
    count: 5,
  });

  const [script, setScript] = useState<Record<string, string | number>[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!form.niche || !form.tone) {
      toast.error("Please fill in both niche and tone");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/scripts/generate", form);
      setScript(res.data.scripts || []);
      
      if (res.data.scripts?.length > 0) {
        toast.success(`Successfully generated ${res.data.scripts.length} scripts! 🎉`);
      }
    } catch (err) {
      toast.error("😭 An error occurred while generating scripts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#FFFBFE] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#6750A4] rounded-2xl flex items-center justify-center">
              <Wand2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-medium text-[#1C1B1F] tracking-tight">Generate Scripts</h1>
              <p className="text-[#49454F] mt-1">Create viral-ready content in seconds</p>
            </div>
          </div>
        </div>

        {/* Input Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F3EDF7] rounded-3xl p-10 shadow-sm border border-[#E7E0EC] mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Niche */}
            <div>
              <label className="block text-sm font-medium text-[#49454F] mb-2">Niche / Topic</label>
              <input 
                placeholder="Fitness, Business, Tech, Cooking..."
                className="w-full h-14 px-5 bg-white border border-[#E7E0EC] rounded-2xl text-[#1C1B1F] placeholder:text-[#79747E] focus:border-[#6750A4] focus:ring-1 focus:ring-[#6750A4] transition-all"
                value={form.niche}
                onChange={(e) => setForm({ ...form, niche: e.target.value })}
              />
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm font-medium text-[#49454F] mb-2">Tone / Style</label>
              <input 
                placeholder="Humorous, Motivational, Professional..."
                className="w-full h-14 px-5 bg-white border border-[#E7E0EC] rounded-2xl text-[#1C1B1F] placeholder:text-[#79747E] focus:border-[#6750A4] focus:ring-1 focus:ring-[#6750A4] transition-all"
                value={form.tone}
                onChange={(e) => setForm({ ...form, tone: e.target.value })}
              />
            </div>

            {/* Count */}
            <div>
              <label className="block text-sm font-medium text-[#49454F] mb-2">Number of Scripts</label>
              <input 
                type="number"
                min="1"
                max="10"
                className="w-full h-14 px-5 bg-white border border-[#E7E0EC] rounded-2xl text-[#1C1B1F] focus:border-[#6750A4] focus:ring-1 focus:ring-[#6750A4] transition-all"
                value={form.count}
                onChange={(e) => setForm({ ...form, count: parseInt(e.target.value) || 5 })}
              />
            </div>
          </div>

          {/* Generate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={generate}
            disabled={loading || !form.niche || !form.tone}
            className="mt-10 w-full h-14 bg-[#6750A4] hover:bg-[#6750A4]/90 active:bg-[#6750A4]/80 disabled:bg-[#79747E] text-white font-medium text-lg rounded-full shadow-lg flex items-center justify-center gap-3 transition-all"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating Magic...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Viral Scripts
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Generated Scripts */}
        {script.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-medium text-[#1C1B1F]">Your Viral Scripts</h2>
              <p className="text-[#49454F]">{script.length} scripts generated</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {script.map((s, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-[#E7E0EC] hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#6750A4] font-medium">SCRIPT {index + 1}</div>
                      <h3 className="text-xl font-semibold text-[#1C1B1F] mt-1 leading-tight">
                        {s.hook}
                      </h3>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(`${s.hook}\n\n${s.content}\n\nCTA: ${s.cta}`)}
                      className="text-[#6750A4] hover:text-[#6750A4]/80 p-2 -mr-2 -mt-2 opacity-70 group-hover:opacity-100 transition-all"
                    >
                      <Copy className="w-5 h-5" />
                    </motion.button>
                  </div>

                  <p className="text-[#49454F] leading-relaxed text-[17px] mb-6">
                    {s.content}
                  </p>

                  <div className="border-t border-[#E7E0EC] pt-6 space-y-4 text-sm">
                    <div>
                      <span className="text-[#79747E]">Pattern Interrupt:</span>{" "}
                      <span className="font-medium">⚡ {s.pattern_interrupt}</span>
                    </div>
                    <div>
                      <span className="text-[#79747E]">Call to Action:</span>{" "}
                      <span className="font-medium text-[#6750A4]">{s.cta}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#79747E]">Performance Score:</span>
                      <span className="font-semibold text-green-600">★ {s.performance_score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {script.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-[#E8DEF8] rounded-3xl flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-[#6750A4]" />
            </div>
            <h3 className="text-2xl font-medium text-[#1C1B1F]">Ready to create magic?</h3>
            <p className="text-[#49454F] mt-3 max-w-md mx-auto">
              Fill in your niche and tone above, then hit "Generate Viral Scripts"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}