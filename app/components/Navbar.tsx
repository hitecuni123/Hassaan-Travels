"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-sm">

      {/* NAVBAR ROW */}
      <div className="flex justify-between items-center px-4 md:px-10 py-2 md:py-3">

        {/* LOGO (SMALL ON MOBILE) */}
        <Link href="/" className="z-[10001]">
          <Image
            src="/images/logo.png"
            alt="Hassaan Travel"
            width={140}
            height={40}
            className="h-6 sm:h-7 md:h-10 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 text-sm">
          <Link href="/services" className="hover:text-blue-600 font-medium">Services</Link>
          <Link href="/umrah" className="hover:text-blue-600 font-medium">Umrah</Link>
          <Link href="/visa" className="hover:text-blue-600 font-medium">Visa</Link>
          <Link href="/packages" className="hover:text-blue-600 font-medium">Packages</Link>
          <Link href="/ticketing" className="hover:text-blue-600 font-medium">Ticketing</Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* PHONE */}
          <a href="tel:+31104857673" className="hidden sm:block text-sm text-gray-700 font-medium">
            +31 104857673
          </a>

          {/* BUTTON */}
          <button className="hidden sm:block bg-lime-400 px-5 py-2 rounded-full text-sm text-white font-semibold">
            Book Now
          </button>

          {/* HAMBURGER BUTTON (FIXED PERFECT) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2 border-gray-800 bg-white shadow-md z-[10001]"
          >
            {open ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white shadow-2xl transition-all duration-300 ease-in-out z-[10000] overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 p-6">

          {[
            "Services",
            "Umrah",
            "Visa",
            "Packages",
            "Ticketing",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="w-full bg-gray-50 p-4 rounded-xl text-gray-800 font-bold text-center border border-gray-100 active:bg-blue-50 active:text-blue-600 transition-colors shadow-sm"
            >
              {item}
            </Link>
          ))}

          {/* EXTRA */}
          <div className="mt-4 pt-4 border-t flex flex-col gap-3">
            <a href="tel:+31104857673" className="flex items-center justify-center gap-2 text-gray-700 font-bold p-3">
              <Phone size={18} /> +31 104857673
            </a>

            <button className="bg-lime-400 w-full py-3 rounded-xl text-white font-bold shadow-lg">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* OVERLAY (CLICK OUTSIDE CLOSE) */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

    </header>
  );
}