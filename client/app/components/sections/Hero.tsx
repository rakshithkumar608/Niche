"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herobg.jpg')",
        }}
      />

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

      {/* Decorative Blur Shapes - More Vibrant */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-20 -left-40 w-[800px] h-[800px] bg-[#6750A4]/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ duration: 32, repeat: Infinity, delay: 8 }}
          className="absolute -bottom-40 right-10 w-[700px] h-[700px] bg-[#7D5260]/35 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 12, 0]
          }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8DEF8]/25 rounded-[200px] blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl px-6 text-center pt-16 md:pt-8">
        
        {/* Vibrant Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full"
        >
          <div className="w-3 h-3 bg-[#E8DEF8] rounded-full animate-ping" />
          <span className="uppercase tracking-[3px] text-sm font-semibold text-white">Next-Gen AI Content Studio</span>
        </motion.div>

        {/* Hero Headline - Bigger, Bolder, Gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0, 0, 1] }}
          className="text-6xl md:text-7xl lg:text-[92px] font-bold leading-[1.05] tracking-[-0.06em] text-white"
        >
          Create{' '}
          <span className="bg-gradient-to-r from-[#E8DEF8] via-[#FFFBFE] to-[#D0BCFF] bg-clip-text text-transparent">
            Viral Content
          </span>
          <br className="hidden md:block" /> 
          in Seconds
        </motion.h1>

        {/* Subtitle - Cleaner & Modern */}
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Turn ideas into scroll-stopping TikTok, YouTube Shorts &amp; Instagram Reels instantly.<br className="hidden md:block" />
          No writer&apos;s block. Just pure viral magic powered by AI.
        </motion.p>

        {/* CTA Buttons - Dual Buttons for Modern Feel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group px-12 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center gap-3 min-w-[240px] justify-center"
            >
              Start Creating Free
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
          </Link>

          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 border-2 border-white/80 hover:border-white text-white font-medium text-lg rounded-full transition-all min-w-[180px]"
            >
              Watch Demo
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/75 text-sm"
        >
          
          
        </motion.div>
      </div>
      {/* Scroll Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest"
      >
        SCROLL TO DISCOVER
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-3 w-5 h-8 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [4, 12, 4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-2 bg-white/70 rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}