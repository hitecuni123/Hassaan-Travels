"use client";
import TestimonialsSection from "@/app/components/ui/TestimonialsSection";

import {
  MdLocationOn,
  MdEmail,
  MdPhone
} from "react-icons/md";
import ContactSection from "../components/ui/ContactSection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "../components/ui/HeroSection";

export default function ContactPage() {
  return (
    <>
    
<HeroSection
  title="Netherlands Visa Services for Pakistani & UAE Citizens"
  subtitle="Expert Visa Services for Pakistani and UAE Travelers."
/>


<ContactSection />

<FaqSection />
<TestimonialsSection />



    </>




  );
}