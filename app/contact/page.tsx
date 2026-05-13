"use client";
import TestimonialsSection from "@/app/components/ui/TestimonialsSection";

import {
  MdLocationOn,
  MdEmail,
  MdPhone
} from "react-icons/md";
import ContactSection from "../components/ui/ContactSection";
import FaqSection from "../components/ui/FaqSection";

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="mt-10 text-4xl md:text-4xl font-bold text-black mb-4">
            Netherlands Visa Services for Pakistani & UAE Citizens
          </h1>

          <p className="text-gray-700 text-sm md:text-base">
            Expert Visa Services for Pakistani and UAE Travelers.
          </p>
        </div>

      </section>


<ContactSection />

<FaqSection />
<TestimonialsSection />



    </>




  );
}