import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import Image from "next/image";
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
            Pakistani Family & Tousist Visa Services | <br />
            Hassaan Travel - Simple & Fast Processing
            
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
           Apply online for a Pakistani Family & Tourist visa today! Simple application process, fast approvals, and expert assistance         </p>
        </div>

      </section>




<section className="relative py-16 px-4 bg-gradient-to-b from-[#cfe8f6] to-[#eaf6fd] overflow-hidden">

      {/* LIGHT CLOUD BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/cloud-bg.png')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

          {/* LEFT TEXT */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
              What is a{" "}
              <span className="text-blue-600">
                Pakistani Family Visa?
              </span>
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan
              and return with their family members who are living in Pakistan.
              A Pakistani Family Visa is usually granted to a spouse, children, parents, etc.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We offer you different types of Pakistani Family Visas and our expert
              services to help you through the visa application process.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/pakistan/p1.webp" 
              alt="Family Visa"
              width={320}
              height={220}
              className="rounded-xl shadow-md object-cover w-full max-w-[320px] h-[220px]"
            />
          </div>

        </div>
      </div>
    </section>
      



<section className="relative py-16 px-4 bg-gradient-to-b from-[#cfe8f6] to-[#eaf6fd] overflow-hidden">

      {/* LIGHT BG EFFECT */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/cloud-bg.png')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-8">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-gray-800">

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              The{" "}
              <span className="text-blue-600">
                Required Documents
              </span>{" "}
              for Pakistan Family Visa:
            </h2>

            <ol className="text-sm md:text-base leading-relaxed space-y-3 list-decimal pl-5">

              <li>
                Passport (Valid for at least 6 months)
              </li>

              <li>
                Recent passport photo (passport photo must not be older than 6 months)
              </li>

              <li>
                If you are of Pakistani origin or married to a Pakistani origin, one
                of the following combinations:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>A Pakistani ID card (NIC)</li>
                  <li>An old/expired Pakistani passport</li>
                  <li>Birth certificate</li>
                  <li>
                    Children under the age of 17 must provide valid passports from both parents,
                    at least one Pakistani ID of the father or mother
                  </li>
                  <li>
                    Marriage certificate, Marriage book, Nikkahnama or BRP extract with mention
                    of your partner in combination with your partner's Pakistani ID
                    (NIC, MNIC, NICOP, or POC) or your Pakistan passport.
                  </li>
                </ul>
              </li>

              <li>
                For children under the age of 17, a “Parents Consent Form” is required
                and it must be completed and signed by both parents.
              </li>

            </ol>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/pakistan/p2.webp" 
              alt="Documents"
              width={320}
              height={220}
              className="rounded-xl shadow-md object-cover w-full max-w-[320px] h-[220px]"
            />
          </div>

        </div>
      </div>
    </section>






   <section className="relative py-16 px-4 bg-gradient-to-b from-[#eaf6fd] to-white text-center">

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
        Which Visa Do You Need?
      </h2>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img
            src="/assets/pakistan/v1.webp"
            alt="Tourist Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-800 mb-2">Tourist Visa</h3>
          <p className="text-sm text-gray-500">
            Ideal for leisure travel and exploring the Netherlands.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img
            src="/assets/pakistan/v2.webp"
            alt="Business Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-800 mb-2">Business Visa</h3>
          <p className="text-sm text-gray-500">
            For meetings, events, and professional engagements.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img
            src="/assets/pakistan/v3.webp"
            alt="Family Visit Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-800 mb-2">Family Visit Visa</h3>
          <p className="text-sm text-gray-500">
            Reunite with loved ones living in the Netherlands.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img
            src="/assets/pakistan/v4.webp"
            alt="Student Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-800 mb-2">Student Visa</h3>
          <p className="text-sm text-gray-500">
            For academic or training opportunities (if applicable).
          </p>
        </div>

      </div>
    </section>   


<FaqSection />



<TestimonialsSection />

    </main>
  );
}