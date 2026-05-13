import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
export default function UAEPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/contact-bg.jpg"
          alt="UAE Visa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* TEXT */}
        <div className="relative z-10 px-4">
          <h1 className="mt-10 text-xl sm:text-4xl md:text-4xl font-bold text-black leading-tight">
            UAE Visa Services for Pakistani & Dutch Citizens
            
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
Fast, reliable, and personalized support for your UAE visa application.          </p>
        </div>

      </section>


{/* UAE VISA OPTIONS SECTION */}
<section className="py-16 px-6 bg-[#eaf4fb] text-center">

  {/* HEADING */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
    UAE Visa Options{" "}
    <span className="text-blue-600">Tailored to Your Needs</span>
  </h2>

  <p className="text-gray-600 text-sm mt-3 max-w-2xl mx-auto">
    For short-term tourist single-entry visa, it is valid for 30 days and with no extension.
    The visa processing fee will be 250 AED.
  </p>

  {/* CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-blue-600 font-semibold mb-2 text-sm">
        Long-term visas for business or family stays.
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed">
        The UAE’s Golden Visa is a long-term residence visa which offers the possibility
        to live, work or study in the UAE. It allows foreign nationals to stay up to 10 years.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-blue-600 font-semibold mb-2 text-sm">
        Transit visas for travelers passing through the UAE
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed">
        The UAE Government offers a transit visa to those transiting through UAE airports.
        A transit visa is valid for 48 or 96 hours.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-blue-600 font-semibold mb-2 text-sm">
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
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md text-sm">
      Find the Right UAE Visa for You
    </button>
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
          src="/assets/uae/net1.webp"
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
          src="/assets/uae/net2.webp"
          alt="Visa Free Travel"
          className="w-full h-[180px] md:h-[200px] object-cover rounded-xl"
        />
      </div>

    </div>

   {/* ================= DOCUMENTS REQUIRED ================= */}
<div className="max-w-6xl mx-auto mt-14 text-center">

  <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

    {/* LEFT CONTENT */}
    <div className="flex-1 text-left">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
        Documents Required for{" "}
        <span className="text-blue-600">UAE Visa</span>
      </h3>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        To apply for a UAE visa, you need to prepare the following documents.
        Make sure all documents are clear and valid to avoid delays.
      </p>

      <ul className="mt-5 space-y-3 text-sm text-gray-700">
        <li>✔️ Valid passport (minimum 6 months validity)</li>
        <li>✔️ Passport-size photographs</li>
        <li>✔️ Confirmed return flight ticket</li>
        <li>✔️ Proof of accommodation (hotel booking)</li>
        <li>✔️ Bank statement or financial proof</li>
        <li>✔️ Travel insurance (if required)</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 w-full">
      <img
        src="/assets/uae/net1.webp"
        alt="Documents Required"
        className="w-full h-[220px] md:h-[260px] object-cover rounded-xl"
      />
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