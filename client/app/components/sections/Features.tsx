"use client";

import { Rocket, Sparkles, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Enter Your Idea",
      desc: "Simply input your content idea or topic. Choose niche, tone, platform, and audience — our AI instantly crafts a perfectly tailored script.",
      color: "#6750A4",
      bgColor: "#E8DEF8",
    },
    {
      icon: Wand2,
      title: "AI Generates Script",
      desc: "Our advanced AI analyzes your input and creates scroll-stopping, platform-optimized scripts for TikTok, YouTube Shorts & Instagram Reels.",
      color: "#7D5260",
      bgColor: "#F2E8E8",
    },
    {
      icon: Rocket,
      title: "Post & Grow",
      desc: "Copy your ready-to-use script, post it, and watch your content take off. Creating viral content has never been this fast and effortless.",
      color: "#006C4C",
      bgColor: "#E0F2E9",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FFFBFE] relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#6750A4]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 28, repeat: Infinity, delay: 12 }}
          className="absolute bottom-32 right-20 w-125 h-125 bg-[#7D5260]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8DEF8] text-[#6750A4] rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            SIMPLE • FAST • POWERFUL
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-medium text-[#1C1B1F] tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-[#49454F] text-xl max-w-2xl mx-auto">
            From idea to viral script in three effortless steps
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative bg-[#F3EDF7] rounded-3xl p-10 shadow-sm hover:shadow-xl border border-[#E7E0EC] transition-all duration-500 overflow-hidden"
              >
                
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon 
                    className="w-11 h-11" 
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#1C1B1F] mb-4 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-[#49454F] leading-relaxed text-[17px]">
                  {feature.desc}
                </p>

                {/* Subtle Step Number */}
                <div className="absolute top-8 right-8 text-7xl font-bold text-[#E7E0EC] group-hover:text-[#E8DEF8] transition-colors">
                  0{index + 1}
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-transparent via-[#6750A4] to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#49454F] mb-6">Ready to create your first viral script?</p>
          <Link 
            href="/signup"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#6750A4] hover:bg-[#6750A4]/90 text-white font-medium text-lg rounded-full shadow-lg transition-all active:scale-95"
          >
            Start Creating Now
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;