import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import FaqSection from "@/app/components/ui/FaqSection";



import React from "react";
import WhySection from "../components/ui/WhySection";

const UmrahPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      <section className="relative py-20 md:py-24 px-4 overflow-hidden">

  {/* BACKGROUND IMAGE (light + soft) */}
  <div
    className="absolute inset-0 bg-cover bg-center brightness-125 contrast-90 saturate-75"
    style={{ backgroundImage: "url('/images/umrah.jpg')" }}
  ></div>

  {/* SOFT BLUE OVERLAY (main effect) */}
  <div className="absolute inset-0 bg-[#dff4fb]/40"></div>

  {/* EXTRA GRADIENT (top sky effect) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#dff4fb]/60 via-[#dff4fb]/30 to-transparent"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    {/* HEADING */}
    
    <h1 className="mt-10 text-4xl md:text-4xl font-bold leading-tight text-black">
      Apply for Your Umrah Visa Online with Hassaan <br /> Travel
    </h1>

    {/* DESCRIPTION */}
    <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
      Fast, Easy, and Reliable Umrah Visa Services for Performers from the Netherlands.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
        Apply Umrah Visa Now
      </button>

      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
        Requirements
      </button>

    </div>

  </div>
</section>

     
<section className="relative py-20 px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/umrah.jpg')" }}
  ></div>

  {/* LIGHT OVERLAY (slightly lighter for visibility) */}
  <div className="absolute inset-0 bg-[#eaf6fb]/80"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-black">
        Complete Umrah Visa Services <br /> for Performers
      </h2>
    </div>

    {/* TOP 4 CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
      
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md">
        <img src="/assets/umrah/icon1.webp" className="w-14 h-14 mx-auto mb-4" />
        <h3 className="font-bold text-base mb-2 text-[#0f172a]">
          E-Visa Services
        </h3>
        <p className="text-sm text-gray-700">
          Fast and easy processing of your Umrah visa through e-visa.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md">
        <img src="/assets/umrah/icon2.webp" className="w-14 h-14 mx-auto mb-4" />
        <h3 className="font-bold text-base mb-2 text-[#0f172a]">
          Document Assistance
        </h3>
        <p className="text-sm text-gray-700">
          Help with collecting the necessary documents.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md">
        <img src="/assets/umrah/icon3.webp" className="w-14 h-14 mx-auto mb-4" />
        <h3 className="font-bold text-base mb-2 text-[#0f172a]">
          Group & Family Visa Options
        </h3>
        <p className="text-sm text-gray-700">
          Services for families and groups traveling together.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md">
        <img src="/assets/umrah/icon4.webp" className="w-14 h-14 mx-auto mb-4" />
        <h3 className="font-bold text-base mb-2 text-[#0f172a]">
          Visa Tracking
        </h3>
        <p className="text-sm text-gray-700">
          Track your visa status easily from Hassaan Travel.
        </p>
      </div>
    </div>

    {/* BOTTOM BOX */}
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
      
      {/* TEXT */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-5 text-[#0f172a] leading-snug">
          The <span className="text-blue-600">Required Documents</span> for
          <br /> an Umrah visa are
        </h3>

        <ul className="text-base text-gray-800 space-y-2 list-disc pl-5">
          <li>Online Saudi Umrah Visa Application</li>
          <li>A Valid Passport</li>
          <li>Passport-size Photo</li>
          <li>Proof of Relationship</li>
          <li>No-Objection Letter</li>
          <li>Ticket</li>
        </ul>
      </div>

     <div className="flex-1">
  <img
    src="/assets/umrah/kaba.webp"
    className="rounded-xl w-[370px] h-[270px] object-cover ml-auto"
  />
</div>
    </div>

  </div>
</section>




<section className="relative w-full py-24">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/umrah.jpg')" }}
  ></div>

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-[#eaf6fb]/90"></div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-black mb-14">
      Benefits of applying for your visa with Hassaan Travel
    </h2>

    {/* BENEFITS */}
    <div className="flex flex-wrap justify-center gap-8 mb-24">

      <div className="w-[340px] h-[180px] border-2 border-[#2f8ecb] rounded-2xl flex items-center justify-center bg-[#f5f7fa] px-6">
        <p className="text-base font-semibold text-[#3c4663] text-center">
          A hassle-free, easy Umrah visa application process
        </p>
      </div>

      <div className="w-[340px] h-[180px] border-2 border-[#2f8ecb] rounded-2xl flex items-center justify-center bg-[#f5f7fa] px-6">
        <p className="text-base font-semibold text-[#3c4663] text-center">
          Faster processing, convenient services, expert assistance at every step
        </p>
      </div>

      <div className="w-[340px] h-[180px] border-2 border-[#2f8ecb] rounded-2xl flex items-center justify-center bg-[#f5f7fa] px-6">
        <p className="text-base font-semibold text-[#3c4663] text-center">
          Customised Umrah packages according to your needs.
        </p>
      </div>

    </div>

    {/* SECOND HEADING */}
    <h2 className="text-3xl font-bold text-black mb-14">
      How to Apply for Your Umrah Visa Online
    </h2>

    {/* STEPS */}
    <div className="flex flex-wrap justify-center gap-8">

      {/* STEP 1 */}
      <div className="flex items-center w-[380px] bg-[#f3f3f3] rounded-xl p-5">
        
        <img
          src="/assets/umrah/step-1.webp"
          alt="Step 1"
          className="w-20 h-20 mr-5"
        />

        <p className="text-base font-semibold text-[#2d2d2d] text-left">
          Determine the Appropriate Visa
        </p>
      </div>

      {/* STEP 2 */}
      <div className="flex items-center w-[380px] bg-[#f3f3f3] rounded-xl p-5">
        
        <img
          src="/assets/umrah/step-2.webp"
          alt="Step 2"
          className="w-20 h-20 mr-5"
        />

        <p className="text-base font-semibold text-[#2d2d2d] text-left">
          Gather Required Documents
        </p>
      </div>

      {/* STEP 3 */}
      <div className="flex items-center w-[380px] bg-[#f3f3f3] rounded-xl p-5">
        
        <img
          src="/assets/umrah/step-3.webp"
          alt="Step 3"
          className="w-20 h-20 mr-5"
        />

        <p className="text-base font-semibold text-[#2d2d2d] text-left">
          Complete the Visa Application Form
        </p>
      </div>

    </div>

  </div>
</section>




<section className="py-24 px-4 bg-[#f7f7f7]">

  <div className="max-w-7xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#3c4663] mb-16">
      Complete Umrah Visa Services <br /> for Performers
    </h2>

    <div className="flex flex-wrap justify-center gap-8">

      {/* CARD 1 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/assets/umrah/e-visa.webp" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          E-Visa Services
        </h3>

        <p className="text-sm text-black">
          Fast and easy processing of your Umrah visa through e-visa.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/assets/umrah/document.webp" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          Document Assistance
        </h3>

        <p className="text-sm text-black">
          Help with collecting the necessary documents for a smooth visa application process.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/assets/umrah/group.webp" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          Group & Family Visa Options
        </h3>

        <p className="text-sm text-black">
          Special services for families and groups traveling together.
        </p>

      </div>

      {/* CARD 4 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/assets/umrah/tracking.webp" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          Visa Tracking
        </h3>

        <p className="text-sm text-black">
          Track your Umrah visa status and get updates directly from Hassaan Travel.
        </p>

      </div>

    </div>

  </div>

</section>



<WhySection />




<FaqSection />


<TestimonialsSection />
      








    </div>
  );
};

export default UmrahPage;