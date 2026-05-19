import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "../components/ui/HeroSection";

export default function NetherlandsPage() {
  return (
    <main className="min-h-screen">
      
      <HeroSection
  title="Pakistani Family & Tourist Visa Services | Hassaan Travel - Simple & Fast Processing"
  subtitle="Expert Visa Services for Pakistani and UAE Travelers."
/>

      {/* ===== MAIN SECTION ===== */}
      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/70"></div>

        <div className="relative max-w-6xl mx-auto space-y-10">

          {/* ===== TOP CARD ===== */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

            {/* LEFT TEXT */}
            <div className="md:w-[65%]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is a <span className="text-blue-600">Pakistani Family Visa?</span>
              </h2>

              <p className="text-gray-700 mt-4 text-sm leading-relaxed font-medium">
                A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan and return with their family members who are living in Pakistan.
              </p>

              <p className="text-gray-700 mt-3 text-sm leading-relaxed font-medium">
                A Pakistani Family Visa is usually granted to a spouse, children, parents, etc.
              </p>

              <p className="text-gray-700 mt-3 text-sm leading-relaxed font-medium">
                We offer different types of Pakistani Family Visas and our expert services to help you through the visa application process.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-[35%] h-[200px] md:h-[220px]">
              <img
                src="/assets/pakistan/p1.webp"
                alt="Family Visa"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

  {/* ===== BOTTOM CARD (EXACT LIKE SCREENSHOT) ===== */}
<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 md:p-8">

  <div className="grid md:grid-cols-2 gap-8 items-start">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-[22px] md:text-[26px] font-bold text-black leading-snug">
        The <span className="text-blue-600">RequiredDocuments</span> for
        Pakistan Family Visa:
      </h2>

      <div className="mt-4 text-[14px] text-gray-700 leading-relaxed space-y-2">

        <p>1. Passport (Valid for at least 6 months)</p>

        <p>
          2. Recent passport photo (passport photo must not be older than
          6 months)
        </p>

        <p>
          3. If you are of Pakistani origin or married to a Pakistani
          origin, one of the following combinations:
        </p>

        {/* BULLETS */}
        <ul className="list-disc pl-5 space-y-1">
          <li>A Pakistani ID card (NIC)</li>
          <li>An old/expired Pakistani passport</li>
          <li>Birth certificate</li>
          <li>
            Children under the age of 17 must provide valid passports from
            both parents, at least one Pakistani ID of the father or mother
          </li>
        </ul>

        <p>
          • Marriage certificate, Marriage book, Nikkahnama or BRP extract
          with mention of your partner in combination with your partner’s
          Pakistani ID (NIC, MNIC, NICOP, or POC) or your Pakistani passport.
        </p>

        <p>
          4. For children under the age of 17, a "Parents Consent Form" is
          required and it must be completed and signed by both parents.
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE (FIXED LIKE DESIGN) */}
    <div className="w-[90%] ml-auto">
  <img
    src="/assets/pakistan/p2.webp"
    className="w-full h-[420px] object-cover rounded-xl"
  />
</div>

  </div>
</div>

        </div>
      </section>



<section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/70"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#1f2b4d] mb-10">
      Which Visa Do You Need?
    </h2>

    {/* CARDS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {/* CARD 1 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/pakistan/v1.webp"
            alt="Tourist Visa"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-sm text-[#1f2b4d]">
          Tourist Visa
        </h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Ideal for leisure travel and exploring the Netherlands.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/pakistan/v2.webp"
            alt="Business Visa"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-sm text-[#1f2b4d]">
          Business Visa
        </h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          For meetings, events, and professional engagements.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/pakistan/v3.webp"
            alt="Family Visit Visa"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-sm text-[#1f2b4d]">
          Family Visit Visa
        </h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Reunite with loved ones living in the Netherlands.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/pakistan/v4.webp"
            alt="Student Visa"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-sm text-[#1f2b4d]">
          Student Visa
        </h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          For students pursuing educational opportunities (if applicable).
        </p>
      </div>

    </div>
  </div>
</section>


    </main>
  );
}