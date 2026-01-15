"use client";

import { motion } from "framer-motion";
import { Gift, Percent, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Offer Content */}
            <div className="p-10 lg:p-14">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles size={18} />
                Limited Time Offer
              </motion.div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Get <span className="text-pink-600">10% OFF</span>
                <br />
                Your First Order!
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Subscribe to our newsletter and receive exclusive deals, new
                flavor updates, and special birthday surprises!
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Gift className="text-pink-600" size={20} />
                  </div>
                  <span className="text-gray-700">
                    Exclusive birthday discounts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Percent className="text-pink-600" size={20} />
                  </div>
                  <span className="text-gray-700">
                    Early access to seasonal offers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Sparkles className="text-pink-600" size={20} />
                  </div>
                  <span className="text-gray-700">New flavor announcements</span>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitted ? (
                      "Subscribed! ✓"
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                </div>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-semibold mt-3 text-sm"
                  >
                    Success! Check your email for your discount code.
                  </motion.p>
                )}
              </form>

              <p className="text-gray-400 text-xs mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>

            {/* Right Side - Visual */}
            <div className="relative lg:h-full min-h-[400px] bg-gradient-to-br from-pink-100 to-purple-100 p-8 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="text-9xl">🎂</div>

                {/* Floating Discount Badge */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 font-bold text-xl px-6 py-3 rounded-full shadow-xl"
                >
                  10% OFF
                </motion.div>

                {/* Sparkles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-8 left-0 text-4xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-4 right-0 text-4xl"
                >
                  ✨
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Secondary CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-4 rounded-xl">
                <Gift className="text-pink-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Refer a Friend
                </h3>
                <p className="text-gray-600 text-sm">
                  Get ৳500 off when your friend places their first order
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-xl">
                <Percent className="text-purple-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Bulk Orders
                </h3>
                <p className="text-gray-600 text-sm">
                  Special discounts for corporate events & large orders
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}