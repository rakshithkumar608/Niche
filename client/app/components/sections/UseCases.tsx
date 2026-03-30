"use client";

import { Dumbbell, Store, Target, Video } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function UseCases() {
  const items = [
    {
      icon: Video,
      title: "Content Creators",
      description: "Generate viral scripts for TikTok, YouTube Shorts, and Instagram Reels in seconds. No more writer's block — just pure viral content.",
      color: "#6750A4",     // Primary Purple
      bgColor: "#E8DEF8",
      accent: "#D0BCFF",
    },
    {
      icon: Dumbbell,
      title: "Fitness Coaches",
      description: "Create engaging workout videos and fitness tips that resonate deeply. Craft compelling scripts that drive engagement and grow your community.",
      color: "#006C4C",     // Fresh Green
      bgColor: "#E0F2E9",
      accent: "#9ED8C6",
    },
    {
      icon: Target,
      title: "Marketing Agencies",
      description: "Produce high-quality, platform-optimized viral content for clients across multiple platforms. Save time while delivering exceptional results.",
      color: "#7D5260",     // Elegant Mauve
      bgColor: "#F2E8E8",
      accent: "#E8D4D4",
    },
    {
      icon: Store,
      title: "Small Businesses",
      description: "Boost your online presence with authentic, brand-aligned viral content. Connect with your audience and drive real growth effortlessly.",
      color: "#B36B00",     // Warm Orange
      bgColor: "#FFF4E5",
      accent: "#FFDBB0",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FFFBFE] relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 32, repeat: Infinity }}
          className="absolute top-40 -left-40 w-150 h-150 bg-[#6750A4]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 40, repeat: Infinity, delay: 15 }}
          className="absolute bottom-20 right-20 w-125 h-125 bg-[#7D5260]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium text-[#1C1B1F] tracking-tight leading-tight"
          >
            Built for Everyone,<br />Everywhere
          </motion.h2>
          <p className="mt-5 text-[#49454F] text-xl max-w-3xl mx-auto">
            From solo creators to growing businesses — Niche helps you create content that actually performs.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl border border-[#E7E0EC] transition-all duration-500 relative overflow-hidden"
              >
                
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Icon 
                    className="w-11 h-11" 
                    style={{ color: item.color }}
                  />
                </div>

                
                <h3 className="text-2xl font-semibold text-[#1C1B1F] mb-4 tracking-tight">
                  {item.title}
                </h3>

                
                <p className="text-[#49454F] text-[17px] leading-relaxed">
                  {item.description}
                </p>

               
                <div 
                  className="absolute bottom-8 right-8 w-16 h-1 rounded-full opacity-30 group-hover:opacity-70 transition-all"
                  style={{ backgroundColor: item.accent }}
                />

                
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#79747E]"
        >
          <p className="text-lg">No matter your niche or audience size — your next viral hit starts here.</p>
        </motion.div>
      </div>
    </section>
  );
}