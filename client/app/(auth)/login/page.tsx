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
    <div className="min-h-screen flex items-center justify-center bg-zinc-300 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">Welcome Back</h2>
          <p className="text-zinc-400 mt-2 text-lg">
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
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl 
                         text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 
                         focus:ring-1 focus:ring-white/30 transition-all"
            />
          </div>

      
          <div>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl 
                         text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 
                         focus:ring-1 focus:ring-white/30 transition-all"
            />
          </div>

   
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3.5 bg-white text-black font-semibold rounded-xl 
                       hover:bg-blue-500 hover:text-white transition-all duration-200 
                       disabled:opacity-70 disabled:cursor-not-allowed text-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </div>

      
        <p className="text-center text-zinc-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-blue-500 hover:underline cursor-pointer font-medium"
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
}