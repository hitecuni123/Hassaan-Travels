"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm">

      {/* LOGO (SMALL ON MOBILE) */}
      <a href="/">
        <Image
          src="/images/logo.png"
          alt="Hassaan Travel"
          width={160}
          height={40}
          className="h-8 md:h-10 w-auto object-contain"
        />
      </a>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
        <a href="/services" className="hover:text-blue-600 font-medium">Services</a>
        <a href="/umrah" className="hover:text-blue-600 font-medium">Umrah</a>
        <a href="/visa" className="hover:text-blue-600 font-medium">Visa</a>
        <a href="/packages" className="hover:text-blue-600 font-medium">Packages</a>
        <a href="/ticketing" className="hover:text-blue-600 font-medium">Ticketing</a>
        <a href="/about" className="hover:text-blue-600 font-medium">About</a>
        <a href="/contact" className="hover:text-blue-600 font-medium">Contact</a>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* PHONE (NOW CLICKABLE) */}
        <a 
          href="tel:+31104857673" 
          className="text-sm text-gray-500 hidden md:inline hover:text-blue-600 transition-colors"
        >
          +31 104857673
        </a>

        {/* BUTTON */}
        <button className="hidden md:block bg-lime-400 hover:bg-lime-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
          Book Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <span className="sr-only">Open Menu</span>
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-5 md:hidden z-50">

          <a className="text-gray-700 font-medium" href="/services">Services</a>
          <a className="text-gray-700 font-medium" href="/umrah">Umrah</a>
          <a className="text-gray-700 font-medium" href="/visa">Visa</a>
          <a className="text-gray-700 font-medium" href="/packages">Packages</a>
          <a className="text-gray-700 font-medium" href="/about">About</a>
          <a className="text-gray-700 font-medium" href="/contact">Contact</a>

          {/* EXTRA */}
          <div className="pt-4 border-t w-full text-center">
            {/* CLICKABLE PHONE FOR MOBILE */}
            <a 
              href="tel:+31104857673" 
              className="block text-sm text-gray-500 mb-2 hover:text-blue-600 font-medium"
            >
              +31 104857673
            </a>
            <button className="bg-lime-400 px-6 py-2 rounded-full text-sm font-semibold text-white">
              Book Now
            </button>
          </div>

        </div>
      )}

    </header>
  );
}