"use client";

import swap from "daisyui/components/swap";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("Sign In clicked");
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      setIsAuthenticated(true);
      toast.success("✅ Login successful! Redirecting to cakes...", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        router.push("/cakes");
        router.refresh();
      }, 1000);
    } else {
      const data = await res.json();
      toast.error(`❌ ${data.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }

  }


  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200 rounded-full blur-[120px] opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[450px] z-10"
      >
        {/* Card Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/50 p-8 md:p-12">

          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block p-4 bg-pink-100 rounded-2xl mb-4 text-pink-600"
            >
              <Lock size={32} />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Ready for some sweetness?</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSignin}
            className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-pink-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Link href="#" className="text-xs text-pink-600 hover:underline">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}

                  placeholder="••••••••"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-pink-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <motion.button

              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold cursor-pointer py-4 rounded-2xl shadow-lg shadow-pink-200 flex items-center justify-center gap-2 mt-4 hover:opacity-90 transition-opacity"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <hr className="border-gray-100" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  px-4 text-xs text-gray-400 uppercase tracking-widest">Or continue with</span>
          </div>

          {/* Social Login */}

          <button className="flex items-center text-center justify-center gap-2 border border-gray-300 cursor-pointer py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 w-full font-medium text-sm">
            <FcGoogle size={18} className="text-rose-500" />Google
          </button>



          <p className="text-center mt-8 text-gray-500 text-sm">
            Don&apos;t have an account? <Link href="/signup" className="text-pink-600 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}