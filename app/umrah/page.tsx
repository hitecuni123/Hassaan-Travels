import React from "react";

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
    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
      Apply for Your Umrah Visa Online with Hassaan Travel
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

      {/* IMAGE */}
      <div className="flex-1">
        <img
          src="/assets/umrah/kaba.webp"
          className="rounded-xl w-full h-[240px] object-cover"
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


{/* WHY HASSAAN TRAVEL SECTION */}
<section
  className="relative py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/assets/umrah/why-bg.webp')" }}
>

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-[#dff4fb]/85"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT SIDE IMAGES */}
    <div className="relative w-full h-[450px]">

      {/* MAIN BIG IMAGE */}
      <img
        src="/assets/umrah/why-1.webp"
        alt=""
        className="absolute top-0 left-[-20px] w-[300px] h-[215px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-30"
      />

      {/* TOP RIGHT IMAGE */}
      <img
        src="/assets/umrah/why-2.webp"
        alt=""
        className="absolute top-[25px] left-[220px] w-[150px] h-[140px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-20"
      />

      {/* SMALL CENTER IMAGE */}
      <img
        src="/assets/umrah/why-3.webp"
        alt=""
        className="absolute top-[155px] left-[210px] w-[120px] h-[150px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-40"
      />

  
  {/* KAABA IMAGE FINAL POSITION */}
<div className="absolute top-[200px] left-[20px] w-[280px] h-[200px] overflow-hidden rounded-[2px] border-[5px] border-white shadow-md z-10">

  <img
    src="/assets/umrah/why-4.webp"
    alt=""
    className="w-full h-full object-cover"
    style={{
      objectPosition: "center bottom"
    }}
  />

</div>

    </div>

    {/* RIGHT TEXT */}
    <div>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
        Why Hassaan Travel is <br />
        Your Trusted Visa Partner
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-5 text-gray-600 text-base leading-relaxed max-w-xl">
        We're more than just a travel agency; we're your passport to extraordinary experiences.
        Here's why you should choose us:
      </p>

      {/* FEATURES */}
      <div className="mt-8 space-y-5">

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            ✈
          </div>
          <p className="text-gray-700 leading-relaxed">
            Assistance in obtaining all necessary documents,
            including legalisations and translations.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            ⚙
          </div>
          <p className="text-gray-700 leading-relaxed">
            Fast, reliable, and transparent visa services.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            📄
          </div>
          <p className="text-gray-700 leading-relaxed">
            Expertise in handling visa applications for multiple countries.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            ☎
          </div>
          <p className="text-gray-700 leading-relaxed">
            Customer support in multiple languages.
          </p>
        </div>

      </div>

      {/* BUTTON */}
      <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
        Contact Us Today
      </button>

    </div>

  </div>

</section>






{/* FAQ */}
<section className="bg-[#f4f4f4] py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div className="flex flex-col justify-between h-[520px]">

      {/* TOP IMAGES */}
      <div className="grid grid-cols-2 gap-6">

        {/* LEFT BIG IMAGE */}
        <img
          src="/assets/umrah/travel-1.webp"
          alt=""
          className="h-[350px] w-full object-cover rounded-2xl shadow-lg"
        />

        {/* RIGHT SIDE STACK */}
        <div className="flex flex-col gap-6">
          <img
            src="/assets/umrah/travel-2.webp"
            alt=""
            className="h-[150px] w-full object-cover rounded-2xl shadow-lg"
          />
          <img
            src="/assets/umrah/travel-3.webp"
            alt=""
            className="h-[180px] w-full object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>

      {/* LETS EXPLORE (BOTTOM ALIGNED PERFECTLY) */}
      <div className="border-2 border-blue-500 rounded-xl h-[90px] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
            🌍
          </div>
          <span className="text-gray-700 font-medium">Lets Explore!</span>
        </div>
      </div>

    </div>


    {/* RIGHT SIDE FAQ */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
        Frequently asked questions
      </h2>

      <div className="space-y-4">

        {/* ACTIVE */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <h4 className="text-blue-600 font-semibold text-sm md:text-base">
              How can I apply for an Umrah visa from the Netherlands?
            </h4>
            <span className="text-blue-600 text-xl">−</span>
          </div>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            To apply for an Umrah visa from the Netherlands, you must consult a verified travel agency to process your visa application. Required documents are a valid passport, recent passport-sized photos, a confirmed return flight, travel insurance, proof of accommodation in Saudi Arabia, and a vaccination certificate.
          </p>
        </div>

        {/* ITEM */}
        <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">
          <h4 className="text-blue-600 font-semibold text-sm md:text-base">
            What documents are required for a Pakistani visa?
          </h4>
          <span className="text-blue-600 text-xl">+</span>
        </div>

        {/* ITEM */}
        <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">
          <h4 className="text-blue-600 font-semibold text-sm md:text-base">
            Can I apply for a UAE visa online from the Netherlands?
          </h4>
          <span className="text-blue-600 text-xl">+</span>
        </div>

        {/* ITEM */}
        <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">
          <h4 className="text-blue-600 font-semibold text-sm md:text-base">
            How long does it take to get a Saudi visa?
          </h4>
          <span className="text-blue-600 text-xl">+</span>
        </div>

      </div>
    </div>

  </div>
</section>



      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-white text-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8 sm:mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              name: "Maria Silva",
              time: "3 Days ago",
              text: "Authentic Portuguese products, fast delivery, and excellent quality. Highly recommended!",
            },
            {
              name: "Maria Silva",
              time: "6 Days ago",
              text: "Great quality Portuguese products with quick delivery. Very satisfied!",
              highlight: true,
            },
            {
              name: "Ana Ferreira",
              time: "5 Days ago",
              text: "Finally authentic items, delivered fast and in perfect condition!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow ${
                item.highlight
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gray-300 mx-auto mb-3"></div>

              {/* NAME */}
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs opacity-70">{item.time}</p>

              {/* STARS */}
              <div className="text-yellow-400 my-2">★★★★★</div>

              {/* TEXT */}
              <p className="text-sm">{item.text}</p>

            </div>
          ))}

        </div>

      </section>






<section className="bg-[#eaf6fb] py-12">

  {/* CENTERED CONTAINER (NOT FULL WIDTH) */}
  <div className="max-w-6xl mx-auto px-4">

    <div className="relative rounded-2xl overflow-hidden shadow-lg">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <div className="bg-white/80 text-blue-700 text-sm md:text-base px-5 py-2.5 rounded-full mb-5 shadow font-semibold">
          ✈️ RECOGNIZED PARTNERS • 17+ YEARS EXCELLENCE
        </div>

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Seamless Travel, Extraordinary Experiences
        </h1>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-500 hover  :bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md font-semibold text-base transition">
            Call Now
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md font-semibold text-base transition">
            Book Now
          </button>
        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  );
};

export default UmrahPage;