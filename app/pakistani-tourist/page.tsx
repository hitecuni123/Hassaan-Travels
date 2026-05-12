export default function PakistaniTouristPage() {
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
Pakistani Family & Tousist Visa Services |             <br />
            Hassaan Travel - Simple & Fast Processing
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
Apply online for a Pakistani Family & Tourist visa today! Simple application process, fast approvals, and expert assistance          </p>
        </div>

      </section>


{/* ================= FAMILY VISA SECTION ================= */}
<section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* TOP ROW */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          What is a{" "}
          <span className="text-blue-600">Pakistani Family Visa?</span>
        </h2>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          A Pakistani Family Visa allows foreign nationals to visit or stay
          in Pakistan and reunite with their family members.
        </p>

        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
          It is usually granted to a spouse, children, parents, etc.
        </p>

        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
          We offer expert services to help you through the visa process.
        </p>
      </div>

      {/* RIGHT IMAGE (HORIZONTAL) */}
      <div>
        <img
          src="/assets/pakistani-tourist/family.webp"
          alt="Family Travel"
          className="w-full h-[200px] md:h-[230px] object-cover rounded-2xl shadow-md"
        />
      </div>

    </div>

    {/* BOTTOM ROW */}
    <div className="grid md:grid-cols-2 gap-10 mt-14 items-start">

      {/* LEFT IMAGE (VERTICAL LIKE DESIGN) */}
      <div>
        <img
          src="/assets/pakistani-tourist/world.webp"
          alt="World Travel"
          className="w-full h-[420px] object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">
          Choose the Right Visa Option for Your Family
        </h3>

        <div className="space-y-4 text-sm text-gray-700">

          <div>
            <p className="font-semibold text-black">
              Single Entry – 3 Months Visa
            </p>
            <p>This visa can be used once and is valid for 90 days</p>
          </div>

          <div>
            <p className="font-semibold text-black">
              Multiple Entry (for 1 year) – 1 Year Visa
            </p>
            <p>
              You can use this visa multiple times within 365 days
            </p>
          </div>

          <div>
            <p className="font-semibold text-black">
              Multiple Entry (multiple years)
            </p>
            <p>Valid between 2 to 5 years</p>
          </div>

        </div>

        {/* NOTE BOX */}
        <div className="mt-6 border border-blue-400 rounded-xl p-4 text-center bg-white/70 backdrop-blur">
          <p className="text-blue-600 text-xs font-semibold">
            PLEASE NOTE
          </p>
          <p className="text-gray-600 text-[11px] mt-1">
            We cannot guarantee visa validity. Passport must be valid for at least 2 years.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>



{/* ================= REQUIRED DOCUMENTS ================= */}
<section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          The{" "}
          <span className="text-blue-600">Required Documents</span>{" "}
          for Pakistan Family Visa:
        </h2>

        <ul className="mt-6 space-y-3 text-sm text-gray-700 leading-relaxed list-decimal pl-5">

          <li>Passport (valid for at least 6 months)</li>

          <li>
            Recent passport photo (passport photo must not be older than 6 months)
          </li>

          <li>
            If you are of Pakistani origin or married to a Pakistani origin:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Pakistani ID card (NIC)</li>
              <li>Old/expired Pakistani passport</li>
              <li>Birth certificate</li>
            </ul>
          </li>

          <li>
            Children under the age of 17 must provide valid passports from both parents
          </li>

          <li>
            Marriage certificate / Nikkahnama / BRP extract (if applicable)
          </li>

          <li>
            Parents consent form required for children under 17
          </li>

        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="/assets/pakistani-tourist/world1.webp"
          alt="Documents"
          className="w-full h-[420px] object-cover rounded-2xl shadow-md"
        />
      </div>

    </div>

  </div>
</section>



{/* ================= TOURIST VISA SECTION ================= */}
<section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

    {/* LEFT SIDE */}
    <div>

      {/* TOP IMAGE */}
      <img
        src="/assets/pakistani-tourist/plane1.webp"
        alt="Plane"
        className="w-full h-[260px] object-cover rounded-2xl shadow-md"
      />

      {/* TEXT */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900">
          Pakistan{" "}
          <span className="text-blue-600">Tourist Visa Requirements</span>
        </h3>

        <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
          <li>Passport must be valid for at least 3 months</li>
          <li>Single-entry visa valid for 3 months duration</li>
          <li>Required documents to apply:</li>
          <li className="ml-3">1. Valid passport</li>
          <li className="ml-3">2. Passport-size photograph</li>
          <li className="ml-3">3. Hotel booking details</li>
          <li className="ml-3">4. Ticket details</li>
        </ul>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div>

      {/* TEXT */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          <span className="text-blue-600">Pakistani Tourist Visa</span>{" "}
          Consultation Service
        </h2>

        <p className="text-blue-600 text-sm font-semibold mt-3">
          Simple, Fast, and Reliable Services
        </p>

        <p className="text-gray-700 text-sm mt-3 leading-relaxed">
          Are you excited for your new journey? With Hassaan Travel,
          you will not experience application delays or mishaps.
          Our expert team ensures smooth visa processing with a
          fast and convenient experience.
        </p>
      </div>

      {/* BOTTOM IMAGE */}
      <img
        src="/assets/pakistani-tourist/airport.webp"
        alt="Airport"
        className="w-full h-[300px] object-cover rounded-2xl shadow-md mt-6"
      />

    </div>

  </div>
</section>





{/* ================= PROCESSING & DISCLAIMER ================= */}
<section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* TOP ROW */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT IMAGE */}
      <div>
        <img
          src="/assets/pakistani-tourist/visa-form.webp"
          alt="Visa Form"
          className="w-full h-[260px] object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          <span className="text-blue-600">Processing Time & Procedure</span>{" "}
          for Pakistani Family & Tourist Visa:
        </h2>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Usually, it takes 1 to 3 days to process your visa application.
          Authorities in Pakistan may take 7 to 10 working days to make
          a final decision.
        </p>

        <p className="text-gray-700 text-sm mt-3 leading-relaxed">
          Standard processing for entry-level tourist visa is 7 to 10 working days.
          Multiple-entry visas may take longer depending on approval.
        </p>

        <p className="text-blue-600 text-sm mt-3">
          Contact us to explore available options.
        </p>
      </div>

    </div>

    {/* BOTTOM ROW */}
    <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">

      {/* LEFT DISCLAIMER */}
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Disclaimer:
        </h3>

        <p className="text-gray-700 text-sm mt-3 leading-relaxed">
          Hassaan Travel does not guarantee visa approval. The authorities
          can always reject or request additional documents. Requirements
          may vary based on your profile.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="/assets/pakistani-tourist/plane2.webp"
          alt="Plane"
          className="w-full h-[260px] object-cover rounded-2xl shadow-md"
        />
      </div>

    </div>

    {/* NOTE BOX */}
    <div className="mt-12 max-w-3xl mx-auto border border-blue-400 rounded-xl p-5 text-center bg-white/70 backdrop-blur">
      <p className="text-gray-800 font-semibold">
        Note:
      </p>
      <p className="text-gray-600 text-sm mt-1">
        If your visa application is canceled, service fees are not refundable.
      </p>
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
        src="/assets/pakistani-tourist/why-1.webp"
        alt=""
        className="absolute top-0 left-[-20px] w-[300px] h-[215px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-30"
      />

      {/* TOP RIGHT IMAGE */}
      <img
        src="/assets/pakistani-tourist/why-2.webp"
        alt=""
        className="absolute top-[25px] left-[220px] w-[150px] h-[140px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-20"
      />

      {/* SMALL CENTER IMAGE */}
      <img
        src="/assets/pakistani-tourist/why-3.webp"
        alt=""
        className="absolute top-[155px] left-[210px] w-[120px] h-[150px] object-cover rounded-[2px] border-[5px] border-white shadow-md z-40"
      />

  
  {/* KAABA IMAGE FINAL POSITION */}
<div className="absolute top-[200px] left-[20px] w-[280px] h-[200px] overflow-hidden rounded-[2px] border-[5px] border-white shadow-md z-10">

  <img
    src="/assets/pakistani-tourist/why-4.webp"
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
        Why Choose Hassaan Travel for a Pakistani Family Visa? <br />
        
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
            Experience a hassle-free Pakistan visa application process
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            ⚙
          </div>
          <p className="text-gray-700 leading-relaxed">
Get your Pakistan visa fast and at fair prices          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            📄
          </div>
          <p className="text-gray-700 leading-relaxed">
Our customer support is ready to guide you throughout the application process          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
            ☎
          </div>
          <p className="text-gray-700 leading-relaxed">
Our team is available 24/7 to accommodate you for urgent application processing.          </p>
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
<div className="grid grid-cols-2 gap-6 h-[520px]">

  {/* BIG LEFT IMAGE */}
  <img
    src="/assets/pakistani-tourist/travel-1.webp"
    alt=""
    className="row-span-2 h-full w-full object-cover rounded-2xl shadow-lg"
  />

  {/* TOP RIGHT */}
  <img
    src="/assets/pakistani-tourist/travel-2.webp"
    alt=""
    className="h-[160px] w-full object-cover rounded-2xl shadow-lg"
  />

  {/* BOTTOM RIGHT */}
  <img
    src="/assets/pakistani-tourist/travel-3.webp"
    alt=""
    className="h-full w-full object-cover rounded-2xl shadow-lg"
  />

  {/* EXPLORE BUTTON */}
  <div className="col-span-2 border-2 border-blue-500 rounded-xl h-[90px] flex items-center justify-center">
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
  </main>
  );
}