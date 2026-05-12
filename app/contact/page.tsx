"use client";

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Netherlands Visa Services for Pakistani & UAE Citizens
          </h1>

          <p className="text-gray-700 text-sm md:text-base">
            Expert Visa Services for Pakistani and UAE Travelers.
          </p>
        </div>

      </section>

     <section className="relative py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/contact-bg.jpg"   // 👈 your bg image
      alt=""
      className="w-full h-full object-cover"
    />

    {/* LIGHT OVERLAY */}
    <div className="absolute inset-0 bg-white/70"></div>
  </div>

  {/* CONTENT */}
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
      <div className="bg-white/90 backdrop-blur p-5 rounded-xl shadow flex gap-4 items-start">
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
      <div className="bg-white/90 backdrop-blur p-5 sm:p-6 rounded-xl shadow-lg space-y-4 border">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg text-sm w-full"
          />
          <input
            placeholder="your@email.com"
            className="border border-gray-300 p-3 rounded-lg text-sm w-full"
          />
        </div>

        <textarea
          placeholder="Tell us about your travel plans..."
          className="border border-gray-300 p-3 rounded-lg text-sm w-full"
          rows={3}
        ></textarea>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto font-semibold">
          Send Now
        </button>

      </div>

      {/* PHONE */}
      <div className="bg-white/90 backdrop-blur p-5 rounded-xl shadow flex items-center gap-4">
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
      <div className="bg-white/90 backdrop-blur p-5 rounded-xl shadow flex items-center gap-4">
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

<section className="relative py-20 px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/contact-bg.jpg"
      alt=""
      className="w-full h-full object-cover"
    />

    {/* LIGHT OVERLAY */}
    <div className="absolute inset-0 bg-white/70"></div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div className="grid grid-cols-2 gap-6 h-[520px]">

      <img
        src="/assets/contacts/travel-1.webp"
        alt=""
        className="row-span-2 h-full w-full object-cover rounded-2xl shadow-lg"
      />

      <img
        src="/assets/contacts/travel-2.webp"
        alt=""
        className="h-[160px] w-full object-cover rounded-2xl shadow-lg"
      />

      <img
        src="/assets/contacts/travel-3.webp"
        alt=""
        className="h-full w-full object-cover rounded-2xl shadow-lg"
      />

      <div className="col-span-2 border-2 border-blue-500 rounded-xl h-[90px] flex items-center justify-center bg-white/80 backdrop-blur-sm">
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
<section className="relative py-12 sm:py-20 px-4 sm:px-8 md:px-16 text-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/contact-bg.jpg"   // 👈 same bg image (or testimonials-bg.jpg)
      alt=""
      className="w-full h-full object-cover"
    />

    {/* LIGHT OVERLAY */}
    <div className="absolute inset-0 bg-white/70"></div>
  </div>

  {/* HEADING */}
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8 sm:mb-12">
    What Our Customers Say
  </h2>

  {/* CARDS */}
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
        className={`p-6 rounded-xl shadow backdrop-blur transition ${
          item.highlight
            ? "bg-blue-500/90 text-white"
            : "bg-white/90 text-gray-800"
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
    </>




  );
}