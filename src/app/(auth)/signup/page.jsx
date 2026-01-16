"use client";

import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, CheckCircle2, Camera } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-rose-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-pink-200 rounded-full blur-[100px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[500px] z-10"
      >
        <div className="bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white p-8 md:p-10">

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2 italic">Join our sweet community today!</p>
          </div>

          {/* Form */}
          <form className="space-y-4">

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-pink-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-pink-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-pink-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 ml-1 py-2">
              <input type="checkbox" id="terms" className="w-4 h-4 accent-pink-500 rounded cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer">
                I agree to the <Link href="#" className="text-pink-600 underline">Terms</Link> and <Link href="#" className="text-pink-600 underline">Privacy Policy</Link>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-100 flex items-center justify-center gap-2 transition-all"
            >
              Start Your Journey <ArrowRight size={20} />
            </motion.button>
          </form>

          {/* Social Sign Up Section */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Or sign up with</p>
            <div className="flex justify-center gap-4">
              {/* Google & as Small Circles */}
              <button className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
              </button>
             
            </div>
          </div>

          <p className="text-center mt-8 text-gray-500 text-sm">
            Already have an account? <Link href="/login" className="text-pink-600 font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}