"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFFBFE]/95 backdrop-blur-xl border-b border-[#E7E0EC] px-5 py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-11 h-11 bg-linear-to-br from-[#6750A4] via-[#7D5260] to-[#6750A4] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6750A4]/30 cursor-pointer"
          >
            <span className="text-white text-3xl font-bold tracking-tighter">N</span>
          </motion.div>
          
          <div className="hidden sm:block">
            <h1 className="text-3xl font-medium text-[#1C1B1F] tracking-[-0.025em]">Niche</h1>
            <p className="text-[10px] uppercase tracking-[2px] text-[#79747E] font-medium -mt-1">CONTENT STUDIO</p>
          </div>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
            <Link 
              href="/login" 
              className="px-8 py-2.5 text-[#6750A4] font-medium border border-[#6750A4]/60 hover:border-[#6750A4] hover:bg-[#6750A4]/5 rounded-full transition-all duration-300 active:bg-[#6750A4]/10"
            >
              Login
            </Link>
          </motion.div>

          
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/signup" 
              className="px-8 py-2.5 bg-[#6750A4] hover:bg-[#6750A4]/90 active:bg-[#6750A4]/80 text-white font-medium rounded-full shadow-md shadow-[#6750A4]/30 transition-all duration-300 flex items-center gap-2 group"
            >
              Start Free
              <motion.span 
                className="text-lg"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-[#49454F] hover:bg-[#E8DEF8] rounded-full transition-all"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6h12v12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.75}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="md:hidden border-t border-[#E7E0EC] bg-[#FFFBFE] mt-2 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link 
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-4 text-[#6750A4] font-medium border border-[#6750A4]/60 hover:bg-[#6750A4]/5 rounded-2xl transition-all"
                >
                  Login
                </Link>
              </motion.div>

              <motion.div whileTap={{ scale: 0.97 }}>
                <Link 
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-4 bg-[#6750A4] hover:bg-[#6750A4]/90 text-white font-medium rounded-2xl shadow-md transition-all"
                >
                  Start Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;