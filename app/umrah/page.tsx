import React from "react";

const UmrahPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative py-28 md:py-36 px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/umrah.jpg')" }}
      >
        {/* LIGHT BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#dff4fb]/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Apply for Your Umrah Visa Online with Hassaan Travel
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            Fast, Easy, and Reliable Umrah Visa Services for Performers from the Netherlands.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
              Apply Umrah Visa Now
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
              Requirements
            </button>

          </div>

        </div>
      </section>

     
     {/* ABOUT UMRAH SECTION */}
<section
  className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/umrah.jpg')" }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#dff4fb]/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE IMAGES */}
<div className="flex justify-center md:justify-start items-center gap-4">

  <img
    src="/images/umrah-1.jpg"
    className="w-44 h-64 object-cover rounded-xl shadow-md"
  />

  <img
    src="/images/umrah-2.jpg"
    className="w-44 h-64 object-cover rounded-xl shadow-md"
  />

  <img
    src="/images/umrah-3.jpg"
    className="w-44 h-64 object-cover rounded-xl shadow-md"
  />

</div>

    {/* RIGHT TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        What is an Umrah Visa?
      </h2>

      <p className="text-black text-sm mb-4 leading-relaxed">
        An Umrah visa is a permit for those who wish to enter Saudi Arabia
        to visit the holy site of Makkah to perform Umrah.
      </p>

      <p className="text-black text-sm mb-4 leading-relaxed">
        Our company makes it easy for pilgrims to process Umrah visa application.
      </p>

      <p className="text-black text-sm mb-4 leading-relaxed">
        With years of experience, we offer customized Umrah packages and excellent customer support and guidance.
      </p>

      <p className="text-black text-sm leading-relaxed">
        We believe in maintaining a reliable and time-saving application process, developing a trustworthy reputation.
      </p>
    </div>

  </div>

  {/* BOTTOM SECTION */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-20">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        What You Need to Apply?
      </h2>

      <ul className="text-black text-sm space-y-2 list-disc pl-5">
        <li>Online Saudi Umrah Visa Application</li>
        <li>A Valid Passport</li>
        <li>Passport-size Photo</li>
        <li>Proof of Relationship</li>
        <li>No-Objection Letter</li>
        <li>Ticket</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/images/umrah-4.jpg"
        className="w-80 h-80 object-cover rounded-[30px] shadow-lg"
      />
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
          src="/images/step-1.png"
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
          src="/images/step-2.png"
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
          src="/images/step-3.png"
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

        <img src="/images/e-visa.png" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          E-Visa Services
        </h3>

        <p className="text-sm text-black">
          Fast and easy processing of your Umrah visa through e-visa.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/images/document.png" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          Document Assistance
        </h3>

        <p className="text-sm text-black">
          Help with collecting the necessary documents for a smooth visa application process.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/images/group.png" className="w-14 h-14 mb-6" />

        <h3 className="text-lg font-semibold text-black mb-2">
          Group & Family Visa Options
        </h3>

        <p className="text-sm text-black">
          Special services for families and groups traveling together.
        </p>

      </div>

      {/* CARD 4 */}
      <div className="w-[260px] bg-white rounded-2xl shadow-md p-8 text-left">

        <img src="/images/tracking.png" className="w-14 h-14 mb-6" />

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
  style={{ backgroundImage: "url('/images/why-bg.jpg')" }}
>

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-[#dff4fb]/85"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT SIDE IMAGES */}
    <div className="relative w-full h-[450px]">

      {/* MAIN BIG IMAGE */}
      <img
        src="/images/why-1.jpg"
        alt=""
        className="absolute top-0 left-[-20px] w-[300px] h-[215px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-30"
      />

      {/* TOP RIGHT IMAGE */}
      <img
        src="/images/why-2.jpg"
        alt=""
        className="absolute top-[25px] left-[220px] w-[150px] h-[140px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-20"
      />

      {/* SMALL CENTER IMAGE */}
      <img
        src="/images/why-3.jpg"
        alt=""
        className="absolute top-[155px] left-[210px] w-[120px] h-[150px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-40"
      />

  
  {/* KAABA IMAGE FINAL POSITION */}
<div className="absolute top-[200px] left-[20px] w-[280px] h-[200px] overflow-hidden rounded-[2px] border-[5px] border-white shadow-md z-10">

  <img
    src="/images/why-4.jpg"
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
          src="/images/travel-1.jpg"
          alt=""
          className="h-[350px] w-full object-cover rounded-2xl shadow-lg"
        />

        {/* RIGHT SIDE STACK */}
        <div className="flex flex-col gap-6">
          <img
            src="/images/travel-2.jpg"
            alt=""
            className="h-[150px] w-full object-cover rounded-2xl shadow-lg"
          />
          <img
            src="/images/travel-3.jpg"
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

  {/* FULL WIDTH CONTAINER */}
  <div className="w-full px-2 sm:px-4">

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

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        {/* BADGE (SLIGHTLY BIGGER) */}
        <div className="bg-white/80 text-blue-700 text-sm md:text-base px-5 py-2.5 rounded-full mb-5 shadow font-semibold">
          ✈️ RECOGNIZED PARTNERS • 17+ YEARS EXCELLENCE
        </div>

        {/* HEADING (BIGGER) */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Seamless Travel, Extraordinary Experiences
        </h1>

        {/* BUTTONS (BIGGER) */}
        <div className="flex gap-4 flex-wrap justify-center">

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md font-semibold text-base transition">
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