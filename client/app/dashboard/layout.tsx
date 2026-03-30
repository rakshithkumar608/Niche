"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Generate", href: "/dashboard/generate" },
    { label: "History", href: "/dashboard/history" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBFE] flex overflow-hidden">
      {/* Enhanced Sidebar with Background Animation */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-[#E7E0EC] bg-[#F3EDF7] relative overflow-hidden shadow-sm">
        
        {/* Animated Background Shapes - Material You Signature */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.6, 0.85, 0.6]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-[#6750A4]/8 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.12, 1],
              opacity: [0.5, 0.75, 0.5]
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 8 }}
            className="absolute -bottom-16 right-8 w-72 h-72 bg-[#7D5260]/8 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: [0, 15, 0],
              opacity: [0.4, 0.65, 0.4]
            }}
            transition={{ duration: 40, repeat: Infinity }}
            className="absolute top-1/3 -right-12 w-64 h-64 bg-[#E8DEF8]/20 rounded-[120px] blur-3xl"
          />
        </div>

        <div className="p-8 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-[#6750A4] rounded-2xl flex items-center justify-center text-white text-2xl font-semibold shadow-md">
              N
            </div>
            <div>
              <h1 className="text-2xl font-medium text-[#1C1B1F] tracking-[-0.02em]">Niche</h1>
              <p className="text-xs text-[#79747E] -mt-1">Content Studio</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 6, backgroundColor: "#E8DEF8" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push(item.href)}
                className="w-full text-left px-6 py-4 text-[#49454F] hover:text-[#1C1B1F] rounded-2xl transition-all duration-300 flex items-center gap-3 group font-medium"
              >
                {item.label}
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6750A4] scale-0 group-hover:scale-100 transition-transform" />
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-auto p-8 relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogout}
            className="w-full py-3.5 text-[#B3261E] hover:bg-[#F2B8B5]/10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 font-medium active:scale-95"
          >
            <span>Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#F3EDF7] border-b border-[#E7E0EC] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#6750A4] rounded-2xl flex items-center justify-center text-white text-xl font-semibold shadow-sm">
            N
          </div>
          <div>
            <h1 className="text-xl font-medium text-[#1C1B1F]">Niche</h1>
            <p className="text-[10px] text-[#79747E] -mt-1 tracking-widest">CONTENT STUDIO</p>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-11 h-11 flex items-center justify-center text-[#49454F] hover:bg-[#E8DEF8] rounded-full transition-all active:bg-[#E8DEF8]"
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
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

         
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed inset-y-0 left-0 w-80 bg-[#F3EDF7] shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              <div className="p-8 pt-20">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-10 h-10 bg-[#6750A4] rounded-2xl flex items-center justify-center text-white text-2xl font-semibold">
                    N
                  </div>
                  <div>
                    <h1 className="text-3xl font-medium text-[#1C1B1F]">Niche</h1>
                    <p className="text-sm text-[#79747E]">Content Studio</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * index }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        router.push(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-6 py-5 text-[#49454F] hover:bg-[#E8DEF8] hover:text-[#1C1B1F] rounded-2xl transition-all text-[17px] font-medium flex items-center justify-between group"
                    >
                      {item.label}
                      <div className="w-2 h-2 bg-[#6750A4]/40 rounded-full group-hover:bg-[#6750A4] transition-colors" />
                    </motion.button>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-8">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 text-[#B3261E] hover:bg-[#F2B8B5]/10 rounded-2xl transition-all font-medium flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                  Logout
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      
      <main className="flex-1 pt-20 lg:pt-0 min-h-screen bg-[#FFFBFE] overflow-auto">
        <div className="p-6 lg:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}