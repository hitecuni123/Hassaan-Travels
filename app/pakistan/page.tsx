import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "../components/ui/HeroSection";

export default function NetherlandsPage() {
  return (
    <main className="min-h-screen">
      
      <HeroSection
        title={
          <>
            Pakistani Family & Tourist Visa Services | <br />
            Hassaan Travel - Simple & Fast Processing
          </>
        }
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
          <div className="relative max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

            {/* LEFT TEXT */}
            <div className="md:w-[65%]">

              {/* HEADING */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                What is a{" "}
                <span className="font-bold text-blue-600">Pakistani Family Visa?</span>
              </h2>

              {/* PARAGRAPHS */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan
                and return with their family members who are living in Pakistan.
              </p>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                A Pakistani Family Visa is usually granted to a spouse, children, parents,
                etc.
              </p>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                We offer different types of Pakistani Family Visas and our expert services
                to help you through the visa application process.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-[35%] w-full">
              <div className="relative h-[200px] md:h-[230px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <img
                  src="/assets/pakistan/p1.webp"
                  alt="Family Visa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* ===== REQUIRED DOCUMENTS CARD ===== */}
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-6 md:p-10 flex flex-col md:flex-row items-stretch gap-8">

            {/* LEFT */}
            <div className="md:w-[65%] h-full flex flex-col justify-between">

              {/* HEADING */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                The{" "}
                <span className="font-bold text-blue-600">Required Documents</span>{" "}
                for Pakistani Family Visa:
              </h2>

              {/* LIST */}
              <div className="mt-4 text-gray-600 text-sm leading-relaxed space-y-2">

                <p>1. Passport (Valid for at least 6 months)</p>

                <p>
                  2. Recent passport photo (passport photo must not be older than 6 months)
                </p>

                <p>
                  3. If you are of Pakistani origin or married to a Pakistani origin,
                  one of the following combinations:
                </p>

                {/* BULLETS */}
                <ul className="list-disc pl-5 space-y-1">
                  <li>A Pakistani ID card (NIC)</li>
                  <li>An old/expired Pakistani passport</li>
                  <li>Birth certificate</li>
                  <li>
                    Children under the age of 17 must provide valid passports from both
                    parents, at least one Pakistani ID of the father or mother
                  </li>
                  <li>
                    Marriage certificate, Marriage book, Nikkahnama or BRP extract with
                    mention of your partner in combination with your partner’s Pakistani
                    ID (NIC, MNIC, NICOP, or POC) or your Pakistan passport
                  </li>
                </ul>

                <p>
                  4. For children under the age of 17, a "Parents Consent Form" is required
                  and it must be completed and signed by both parents.
                </p>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-[35%] w-full self-stretch">
              <div className="h-full rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <img
                  src="/assets/pakistan/p2.webp"
                  alt="Required Documents"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== VISA SELECTION SECTION ===== */}
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
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
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
                Ideal for leisure travel and exploring beautiful destinations in Pakistan.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
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
                For meetings, commercial events, and professional engagements.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
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
                Reunite with your family and loved ones living across Pakistan.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
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
                For students pursuing academic or educational opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FaqSection />

      <TestimonialsSection />

    </main>
  );
}