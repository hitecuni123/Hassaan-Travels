import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
export default function NetherlandsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/contact-bg.jpg"
          alt="Ticketing"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
<div className="absolute inset-0 bg-white/50"></div>

        {/* TEXT */}
        <div className="relative z-10 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
            Netherlands Visa Services for Pakistani & UAE 
            <br />
            Citizens
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
           Expert Visa Services for Pakistani and UAE Travelers.
          </p>
        </div>
      </section>



 <section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* SAME OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  {/* CONTENT */}
  <div className="relative z-10">

    {/* ================= SECTION 1 ================= */}
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          Simplifying Your{" "}
          <span className="text-blue-600">Netherlands</span>{" "}
          <span className="text-blue-500">Visa Process</span>
        </h2>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Citizens of the UAE can travel to the Netherlands without a visa
          for short stays, typically up to 90 days within a 180-day period,
          for tourism or business purposes.
        </p>
      </div>

      <div className="flex-1 w-full">
        <img
          src="/assets/netherlands/net1.webp"
          alt="Visa Process"
          className="w-full h-[180px] md:h-[200px] object-cover rounded-xl"
        />
      </div>
    </div>

    {/* NOTE */}
    <div className="max-w-3xl mx-auto mt-8 bg-white/70 backdrop-blur rounded-xl shadow-sm p-4 text-center">
      <p className="text-blue-600 text-xs font-medium">
        If your visa application is canceled, the visa costs and service costs are not refunded
      </p>
      <p className="text-gray-500 text-[11px] mt-1">
        For more terms and conditions, it is necessary to apply and agree with us beforehand.
        The visa processing fee will be AED 850.
      </p>
    </div>

    {/* ================= SECTION 2 ================= */}
    <div className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          Visa-Free Travel for{" "}
          <span className="text-blue-600">UAE</span>{" "}
          <span className="text-blue-500">Citizens</span>
        </h2>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          UAE citizens can travel to the Netherlands for tourism and business
          purposes without having a visa if they have an Emirati passport.
          The Netherlands allows them to stay for up to 90 days.
        </p>
      </div>

      <div className="flex-1 w-full">
        <img
          src="/assets/netherlands/net2.webp"
          alt="Visa Free Travel"
          className="w-full h-[180px] md:h-[200px] object-cover rounded-xl"
        />
      </div>

    </div>

    {/* ================= VISA TYPES ================= */}
    <div className="max-w-6xl mx-auto mt-14 text-center">

      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-10">
        Which Visa Do You Need?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">🧳</div>
          <h4 className="font-semibold text-gray-800">Tourist Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            Ideal for leisure travel and exploring the Netherlands.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">💼</div>
          <h4 className="font-semibold text-gray-800">Business Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            For meetings, events, and professional engagements.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">👨‍👩‍👧</div>
          <h4 className="font-semibold text-gray-800">Family Visit Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            Reconnect with loved ones living in the Netherlands.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">🎓</div>
          <h4 className="font-semibold text-gray-800">Student Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            For academic or training opportunities.
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