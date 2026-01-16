"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 1. Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              Sweet<span className="text-gray-800">Oshi</span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Baking happiness since 2010. We specialize in custom cakes for your most special celebrations with fresh ingredients and love.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, color: "#EC4899" }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["All Cakes", "Custom Orders", "Delivery Info", "Our Bakery", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="text-pink-600 flex-shrink-0" size={20} />
                <span>123 Baker Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="text-pink-600 flex-shrink-0" size={20} />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="text-pink-600 flex-shrink-0" size={20} />
                <span>hello@SweetOshi.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Join Our Newsletter</h4>
            <p className="text-gray-600 mb-4 text-sm">Get 10% off your first order and stay updated with new designs.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-600 transition-colors pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} SweetOshi. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-pink-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-pink-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}