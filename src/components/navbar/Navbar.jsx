"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
      });
      setIsAuthenticated(false);
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        router.push("/");
        router.refresh();
        setOpen(false);
      }, 800);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <nav className="bg-white py-2 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          SweetOshi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link href="/cakes" className="hover:text-pink-600">Cakes</Link></li>
          <li><Link href="/pages/about" className="hover:text-pink-600">About</Link></li>
          <li><Link href="/pages/contact" className="hover:text-pink-600">Contact</Link></li>

          {/* Auth Button */}
          <li>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                       border border-[#EC4899] bg-white text-[#EC4899]
                       hover:bg-gray-100 transition "
              >
                <LogOut size={15} />
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-full font-medium
                       bg-pink-600 text-white border border-transparent
                       hover:bg-white hover:text-pink-600 hover:border-pink-600
                       transition"
              >
                Login
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/cakes" onClick={() => setOpen(false)}>Cakes</Link></li>
            <li><Link href="/pages/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/pages/contact" onClick={() => setOpen(false)}>Contact</Link></li>

            {/* Mobile Auth Button */}
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="flex items-center justify-center gap-2
                         w-full px-4 py-2 rounded-full
                         border border-[#EC4899] bg-[#EC4899] text-[EC4899]
                         hover:bg-gray-100 transition"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block text-center px-4 py-2 rounded-full font-medium
                         bg-pink-600 text-white border border-transparent
                         hover:bg-white hover:text-pink-600 hover:border-pink-600
                         transition"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>

  );
}
