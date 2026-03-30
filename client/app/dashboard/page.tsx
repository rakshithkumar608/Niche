"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#FFFBFE] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Welcome Header */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8DEF8] text-[#6750A4] rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Welcome back
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-medium text-[#1C1B1F] tracking-tight">
            Good morning, Creator 👋
          </h1>
          <p className="mt-3 text-[#49454F] text-xl">
            What viral content shall we create today?
          </p>
        </div>

        {/* Main Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#F3EDF7] rounded-3xl p-12 shadow-sm border border-[#E7E0EC] max-w-2xl"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-sm mb-6">
                <div className="w-2 h-2 bg-[#6750A4] rounded-full animate-pulse" />
                Ready to create
              </div>

              <h2 className="text-4xl font-medium leading-tight text-[#1C1B1F] tracking-tight mb-6">
                Generate your first<br />
                <span className="bg-linear-to-r from-[#6750A4] to-[#7D5260] bg-clip-text text-transparent">
                  viral script
                </span>
              </h2>

              <p className="text-[#49454F] text-[17px] leading-relaxed mb-10 max-w-md">
                Turn your ideas into scroll-stopping content for TikTok, YouTube Shorts, 
                and Instagram Reels in seconds.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push("/dashboard/generate")}
                className="group flex items-center gap-3 bg-[#6750A4] hover:bg-[#6750A4]/90 active:bg-[#6750A4]/80 text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Start Generating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            
            <div className="flex-1 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-64 bg-white rounded-3xl shadow-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-[#E8DEF8] rounded-2xl flex items-center justify-center mb-4">
                    <Sparkles className="w-12 h-12 text-[#6750A4]" />
                  </div>
                  <p className="font-medium text-[#1C1B1F]">Your next viral hit</p>
                  <p className="text-sm text-[#79747E]">is just one click away</p>
                </div>

                
                <div className="absolute inset-0 border border-[#6750A4]/20 rounded-3xl" />
                <div className="absolute inset-4 border border-[#6750A4]/10 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}