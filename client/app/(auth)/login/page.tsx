"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import API from "@/app/lib/api";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      toast.success("Login successful! Welcome back 🎉", {
        duration: 2500,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);

    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";

      toast.error(errorMessage, {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBFE] p-6 overflow-hidden relative">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6750A4]/10 rounded-[200px] blur-3xl" />
        <div className="absolute -bottom-32 right-10 w-80 h-80 bg-[#7D5260]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#E8DEF8]/30 rounded-[150px] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className="w-full max-w-md bg-[#F3EDF7] rounded-4xl p-10 shadow-lg border border-[#E7E0EC] relative z-10"
      >
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-[#6750A4] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md">
            👋
          </div>
          <h2 className="text-3xl font-medium text-[#1C1B1F] tracking-tight">
            Welcome back
          </h2>
          <p className="text-[#49454F] mt-3 text-[17px] leading-relaxed">
            Login to continue generating viral content
          </p>
        </div>

        <div className="space-y-6">
         
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full h-14 px-4 bg-[#E7E0EC] border-b-2 border-[#79747E] rounded-t-2xl text-[#1C1B1F] placeholder:text-[#79747E]/70 focus:outline-none focus:border-[#6750A4] transition-all duration-200 text-base"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full h-14 px-4 bg-[#E7E0EC] border-b-2 border-[#79747E] rounded-t-2xl text-[#1C1B1F] placeholder:text-[#79747E]/70 focus:outline-none focus:border-[#6750A4] transition-all duration-200 text-base"
            />
          </div>

       
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            disabled={loading}
            className="w-full h-12 mt-4 bg-[#6750A4] hover:bg-[#6750A4]/90 active:bg-[#6750A4]/80 text-white font-medium text-[15px] tracking-[0.01em] rounded-full shadow-md transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </div>

        <p className="text-center text-[#49454F] text-sm mt-8">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-[#6750A4] hover:text-[#6750A4]/80 font-medium cursor-pointer transition-colors"
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
}