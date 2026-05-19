import React from "react";

type HeroSectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode; // ✅ optional
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/contact-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <h1 className="mt-10 text-xl sm:text-4xl font-bold text-black leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xs sm:text-sm text-black mt-3">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;