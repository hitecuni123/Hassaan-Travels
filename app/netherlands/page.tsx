import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "../components/ui/HeroSection";

export default function NetherlandsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title={
          <>
            Netherlands Visa Services for Pakistani & UAE <br />
            Citizens
          </>
        }
        subtitle="Expert Visa Services for Pakistani and UAE Travelers."
      />

      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >

        {/* SAME OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-7">

            {/* ================= SECTION 1 ================= */}
            <div className="max-w-[1020px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">

              {/* LEFT TEXT */}
              <div className="flex-[1.15] text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                  Simplifying Your <span className="font-bold text-blue-600">Netherlands Visa Process</span>
                </h2>

                <p className="text-gray-800 text-[14px] font-normal leading-[1.62] tracking-wide">
                  Citizens of the UAE can travel to the Netherlands without a visa
                  for short stays, typically up to 90 days within a 180-day period,
                  for tourism or business purposes.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 w-full">
                <img
                  src="/assets/netherlands/net1.webp"
                  alt="Visa Process"
                  className="w-full h-[210px] md:h-[254px] object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* ================= NOTE ================= */}
            <div className="max-w-[840px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm py-3.5 px-6 text-center">
              
              {/* Line 1: Main Rule */}
              <p className="font-bold text-blue-600 text-[10.5px] tracking-tight whitespace-nowrap overflow-x-auto max-w-full">
                If your visa application is canceled, the visa costs and service costs are not returned
              </p>
              
              {/* Line 2: Details */}
              <p className="text-gray-800 text-[9.5px] font-medium mt-0.5 whitespace-nowrap overflow-x-auto max-w-full">
                For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.
              </p>
            </div>

          </div>


          {/* ================= SECTION 2 ================= */}
          <div className="max-w-[1020px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9 mx-auto mt-10">

            {/* LEFT TEXT */}
            <div className="flex-[1.15] text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                Visa-Free Travel for <span className="font-bold text-blue-600">UAE Citizens</span>
              </h2>

              <p className="text-gray-800 text-[14px] font-normal leading-[1.62] tracking-wide">
                UAE citizens can travel to the Netherlands for tourism and business
                purposes without having a visa if they have an Emirati passport.
                The Netherlands allows them to stay for up to 90 days.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 w-full">
              <img
                src="/assets/netherlands/net2.webp"
                alt="Visa Free Travel"
                className="w-full h-[210px] md:h-[254px] object-cover rounded-2xl"
              />
            </div>

          </div>

          {/* ================= VISA TYPES ================= */}
          <div className="max-w-6xl mx-auto mt-14 px-4">
            
            <h3 className="text-2xl md:text-3.5xl font-extrabold text-[#0f172a] text-center mb-12 tracking-tight">
              Which Visa Do You Need?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              {/* CARD 1 */}
              <div className="bg-white/35 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-sm flex flex-col items-start text-left transition-all duration-300 hover:shadow-md">
                <img
                  src="/assets/netherlands/icon1.webp"
                  alt="Tourist Visa"
                  className="w-14 h-14 object-contain mb-5"
                />
                <h4 className="text-lg font-bold text-gray-900 tracking-wide">Tourist Visa</h4>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-2">
                  Ideal for leisure travel and exploring the Netherlands.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/35 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-sm flex flex-col items-start text-left transition-all duration-300 hover:shadow-md">
                <img
                  src="/assets/netherlands/icon2.webp"
                  alt="Business Visa"
                  className="w-14 h-14 object-contain mb-5"
                />
                <h4 className="text-lg font-bold text-gray-900 tracking-wide">Business Visa</h4>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-2">
                  For meetings, events, and professional engagements.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/35 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-sm flex flex-col items-start text-left transition-all duration-300 hover:shadow-md">
                <img
                  src="/assets/netherlands/icon3.webp"
                  alt="Family Visa"
                  className="w-14 h-14 object-contain mb-5"
                />
                <h4 className="text-lg font-bold text-gray-900 tracking-wide">Family Visit Visa</h4>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-2">
                  Reunite with loved ones living in the Netherlands.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white/35 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-sm flex flex-col items-start text-left transition-all duration-300 hover:shadow-md">
                <img
                  src="/assets/netherlands/icon4.webp"
                  alt="Student Visa"
                  className="w-14 h-14 object-contain mb-5"
                />
                <h4 className="text-lg font-bold text-gray-900 tracking-wide">Student Visa</h4>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-2">
                  For academic or training opportunities (if applicable).
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <FaqSection />
      <TestimonialsSection />

    </main>
  );
}