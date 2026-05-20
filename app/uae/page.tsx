import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "../components/ui/HeroSection";

export default function UAEPage() {
  return (
    <main className="w-full text-gray-800">

      <HeroSection
        title="UAE Visa Services for Pakistani & Dutch Citizens"
        subtitle="Fast, reliable, and personalized support for your UAE visa application."
      />

      {/* UAE VISA OPTIONS SECTION */}
      <section className="py-16 px-6 bg-[#eaf4fb] text-center">

        {/* HEADING */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
            UAE Visa Options{" "}
            <span className="font-bold text-blue-600">
              Tailored to Your Needs
            </span>
          </h2>

          <p className="text-gray-600 text-sm mt-3 text-center md:whitespace-nowrap">
            For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-left">
            <h3 className="font-bold text-blue-600 mb-2 text-sm">
              Long-term visas for business or family stays.
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              The UAE’s Golden Visa is a long-term residence visa which offers the possibility
              to live, work or study in the UAE. It allows foreign nationals to stay up to 10 years.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-left">
            <h3 className="font-bold text-blue-600 mb-2 text-sm">
              Transit visas for travelers passing through the UAE
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              The UAE Government offers a transit visa to those transiting through UAE airports.
              A transit visa is valid for 48 or 96 hours.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-left">
            <h3 className="font-bold text-blue-600 mb-2 text-sm">
              Visit visas for family reunions or business meetings
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              The applicant wishing to visit the UAE for either a family reunion or business
              meeting is granted a single-entry visa without a sponsor in the UAE.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md text-sm transition-colors">
            Find the Right UAE Visa for You
          </button>
        </div>

      </section>

      {/* DETAILED CONTENT SECTION */}
      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >

        {/* SAME OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-7">
        
            {/* ================= MAIN HERO CONTAINER ================= */}
            <div className="max-w-[1020px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">
              
              {/* Left Side Content */}
              <div className="flex-[1.15] text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                  <span className="font-bold text-blue-600">Explore the UAE</span> with Hassaan Travel
                </h2>

                <p className="text-gray-800 text-[14px] font-normal leading-[1.62] tracking-wide">
                  Explore the vibrant land of UAE with Hassaan Travels, a hub for 
                  multicultural businesses, a premium luxurious experience, and an 
                  attraction for families. Whether you have to attend business 
                  conferences, or visit world-class shopping malls and tourist 
                  attractions, Hassaan Travels is here to accommodate you through 
                  the journey fully.
                </p>
              </div>

              {/* Right Side Image */}
              <div className="flex-1 w-full">
                <img
                  src="/assets/uae/uae1.webp" 
                  alt="Museum of the Future UAE"
                  className="w-full h-[210px] md:h-[254px] object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* ================= BOTTOM NOTICE ACCORDION ================= */}
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

          <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-10">

            {/* ================= SECTION 1: UAE Visa Services ================= */}
            <div className="max-w-[1020px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">
              
              {/* Left Content Column */}
              <div className="flex-[1.25] text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                  UAE Visa Services <span className="font-bold text-blue-600">for Dutch Citizens:</span>
                </h2>

                <p className="text-gray-800 text-[14px] font-normal leading-[1.62] tracking-wide">
                  The Dutch citizens avail the benefit of no-visa travel status. 
                  When they enter the UAE, their passport is just stamped with a 
                  visit visa once they enter the UAE, which will be valid for a 
                  maximum time of 90 days.
                </p>
              </div>

              {/* Right Image Column */}
              <div className="flex-1 w-full">
                <img
                  src="/assets/uae/uae2.webp"
                  alt="UAE Skyline"
                  className="w-full h-[210px] md:h-[240px] object-cover rounded-2xl"
                />
              </div>
            </div>


            {/* ================= SECTION 2: Documents Required ================= */}
            <div className="max-w-[1020px] w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">
              
              {/* Left Image Column */}
              <div className="flex-1 w-full order-2 md:order-1">
                <img
                  src="/assets/uae/uae3.webp"
                  alt="Documents Required Desk"
                  className="w-full h-[210px] md:h-[240px] object-cover rounded-2xl"
                />
              </div>

              {/* Right Content Column */}
              <div className="flex-[1.25] text-left order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight mb-4">
                  <span className="font-bold text-blue-600">Documents Required</span> for UAE Visa Application
                </h2>

                <ul className="list-disc pl-5 space-y-1.5 text-gray-800 text-[14px] font-normal tracking-wide">
                  <li>Valid passport with at least 6 months validity.</li>
                  <li>Passport-size photos meeting UAE visa specifications.</li>
                  <li>Flight details and proof of travel itinerary.</li>
                  <li>Proof of accommodation or hotel booking in the UAE.</li>
                  <li>Additional documents for business or family visas (if applicable).</li>
                </ul>
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