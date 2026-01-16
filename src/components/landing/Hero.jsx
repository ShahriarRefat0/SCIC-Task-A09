"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-pink-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1604413191066-4dd20bedf486)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-sm mb-4">
            Fresh • Handmade • Delicious
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Celebrate Every Moment <br />
            with <span className="text-pink-400">Sweet Cakes</span>
            
          </h1>

          <p className="mt-6 text-gray-200 max-w-lg">
            From birthdays to weddings, our handcrafted cakes bring joy, flavor,
            and elegance to every celebration.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/cakes"
             // className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition"
              className="btn-custom btn-base"
            >
              Explore Cakes
            </Link>

            <Link
              href="/contact"
              className="btn-base btn-lineOut"
            >
              Custom Order
            </Link>
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-end"
        >
          <div className="backdrop-blur-xl bg-white/30 border border-white/40 p-4 rounded-3xl shadow-2xl max-w-sm">
            <Image
              src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bestseller Cake"
              width={400}
              height={450}
              unoptimized
              className="rounded-2xl object-cover"
            />

            <p className="text-center mt-3 font-semibold text-pink-600">
              Bestseller Cake
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
