import Image from "next/image";

export default function UmrahPage() {
  return (
    <main className="w-full overflow-hidden">

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
      Affordable Visa Services for Travelers in the Netherlands
    </h1>

    {/* DESCRIPTION */}
    <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
      Get your Umrah, Pakistani, Saudia, UAE, and Netherlands visas quickly and easily with Hassaan Travel.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
        Apply for Your Visa Online
      </button>

      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
        Explore Our Visa Services
      </button>

    </div>

  </div>

</section>
      


{/* OUR SERVICES SECTION */}
<section
  className="relative py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
      Our Services
    </h2>

    <p className="text-gray-700 max-w-3xl mx-auto mb-14">
      Embark on unforgettable journeys to popular destinations such as Makkah, Madinah, Dubai, and more with our exclusive tour packages.
    </p>

    {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

  {/* CARD 1 */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
    <img
      src="/images/why-1.jpg"
      alt="Saudia Visa"
      className="w-full h-[380px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
      <h3 className="font-bold text-gray-900 text-lg">
        Saudia Visa Services
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        Our easy and fast platform ensures hassle-free visa application.
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
    <img
      src="/images/why-2.jpg"
      alt="Pakistan Visa"
      className="w-full h-[380px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
      <h3 className="font-bold text-gray-900 text-lg">
        Pakistani Visa Services
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        Fast and reliable visa processing services for travelers.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
    <img
      src="/images/why-1.jpg"
      alt="Saudia Visa"
      className="w-full h-[380px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
      <h3 className="font-bold text-gray-900 text-lg">
        Saudia Visa Services
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        Explore Saudi visa options including family & tourist visas.
      </p>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
    <img
      src="/images/why-2.jpg"
      alt="Pakistan Visa"
      className="w-full h-[380px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
      <h3 className="font-bold text-gray-900 text-lg">
        Pakistani Visa Services
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        Easy and user-friendly visa application system.
      </p>
    </div>
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

<section className="py-12 bg-gradient-to-r from-[#E0F4FF] to-[#D8F2FF]">

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    {/* ITEM 1 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
        ✈
      </div>
      <h4 className="mt-4 font-semibold text-black">IATA Certified</h4>
      <p className="text-sm text-gray-700 mt-1">Fully Authorized Agency</p>
    </div>

    {/* ITEM 2 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
        🎧
      </div>
      <h4 className="mt-4 font-semibold text-black">Concierge Support</h4>
      <p className="text-sm text-gray-700 mt-1">Available 24/7</p>
    </div>

    {/* ITEM 3 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
        🏅
      </div>
      <h4 className="mt-4 font-semibold text-black">Award-Winning</h4>
      <p className="text-sm text-gray-700 mt-1">15+ Years Excellence</p>
    </div>

    {/* ITEM 4 */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
        ✨
      </div>
      <h4 className="mt-4 font-semibold text-black">Premium Service</h4>
      <p className="text-sm text-gray-700 mt-1">White-Glove Treatment</p>
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
    src="/images/travel-1.jpg"
    alt=""
    className="row-span-2 h-full w-full object-cover rounded-2xl shadow-lg"
  />

  {/* TOP RIGHT */}
  <img
    src="/images/travel-2.jpg"
    alt=""
    className="h-[160px] w-full object-cover rounded-2xl shadow-lg"
  />

  {/* BOTTOM RIGHT */}
  <img
    src="/images/travel-3.jpg"
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



 {/* CONTACT / MAP SECTION */}
<section className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-blue-50">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

    {/* MAP */}
    <div className="order-last lg:order-first h-full">
      <iframe
        src="https://www.google.com/maps?q=Dordtselaan+67D,+3081BG+Rotterdam,+Netherlands&output=embed"
        className="rounded-xl shadow-lg w-full h-full min-h-[500px]"
        loading="lazy"
      ></iframe>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-5 h-full flex flex-col justify-between">

      {/* LOCATION */}
      <div className="bg-white p-5 rounded-xl shadow flex gap-4 items-start">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg">
          📍
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Rotterdam</h3>
          <p className="text-sm text-gray-700">
            Dordtselaan 67D, 3081BG Rotterdam, Netherlands
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Monday - Saturday <br /> Sunday: Closed
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg space-y-4 border">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Your Name"
            className="bg-white border border-gray-300 p-3 rounded-lg text-sm w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="your@email.com"
            className="bg-white border border-gray-300 p-3 rounded-lg text-sm w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <textarea
          placeholder="Tell us about your travel plans..."
          className="bg-white border border-gray-300 p-3 rounded-lg text-sm w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        ></textarea>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto font-semibold">
          Send Now
        </button>

      </div>

      {/* PHONE */}
      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg">
          📞
        </div>
        <div>
          <p className="text-xs text-gray-600">Phone</p>
          <p className="text-sm font-semibold text-gray-900">
            +31 104857673
          </p>
        </div>
      </div>

      {/* EMAIL */}
      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg">
          ✉️
        </div>
        <div>
          <p className="text-xs text-gray-600">Email</p>
          <p className="text-sm font-semibold text-gray-900">
            info@hassaantravel.nl
          </p>
        </div>
      </div>

    </div>

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

    </main>
  );
}