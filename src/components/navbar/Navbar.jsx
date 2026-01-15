"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white py-2 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          SweetOshi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/cakes" className="hover:text-pink-600">
              Cakes
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href='/login'
              //className="btn btn-ghost bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
              className="btn-login"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
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
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/cakes" onClick={() => setOpen(false)}>
                Cakes
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn-login-mobile"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
