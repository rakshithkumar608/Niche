"use client";

import API from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);

      const res = await API.post("/auth/signup", form);

      
      toast.success("Account created successfully! Redirecting to login...", {
        duration: 3000,
      });

      
      setTimeout(() => {
        router.push("/login");
        return (res.data)
      }, 1500);

    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Signup failed. Please try again.";
      
      toast.error(errorMessage, {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-300 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            🔒 Create Account to Get Started
          </h2>
          <p className="text-zinc-400 mt-2 text-lg">
            Start generating viral content in seconds
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl 
                        text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 
                        focus:ring-1 focus:ring-white/30 transition-all"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl 
                        text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 
                        focus:ring-1 focus:ring-white/30 transition-all"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl 
                        text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 
                        focus:ring-1 focus:ring-white/30 transition-all"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSignup}
            disabled={loading}
            className="w-full py-3.5 bg-white text-black font-semibold rounded-xl 
                      hover:bg-blue-500 hover:text-white transition-all duration-200 
                      disabled:opacity-70 disabled:cursor-not-allowed text-lg"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </div>

        <p className="text-center text-zinc-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}