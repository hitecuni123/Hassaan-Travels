export default function NetherlandsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/contact-bg.jpg"
          alt="Ticketing"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
<div className="absolute inset-0 bg-white/50"></div>

        {/* TEXT */}
        <div className="relative z-10 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
            Netherlands Visa Services for Pakistani & UAE 
            <br />
            Citizens
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
           Expert Visa Services for Pakistani and UAE Travelers.
          </p>
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
          src="/assets/netherlands/net1.webp"
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
          src="/assets/netherlands/net2.webp"
          alt="Visa Free Travel"
          className="w-full h-[180px] md:h-[200px] object-cover rounded-xl"
        />
      </div>

    </div>

    {/* ================= VISA TYPES ================= */}
    <div className="max-w-6xl mx-auto mt-14 text-center">

      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-10">
        Which Visa Do You Need?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">🧳</div>
          <h4 className="font-semibold text-gray-800">Tourist Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            Ideal for leisure travel and exploring the Netherlands.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">💼</div>
          <h4 className="font-semibold text-gray-800">Business Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            For meetings, events, and professional engagements.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">👨‍👩‍👧</div>
          <h4 className="font-semibold text-gray-800">Family Visit Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            Reconnect with loved ones living in the Netherlands.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-sm">
          <div className="text-blue-600 text-3xl mb-3">🎓</div>
          <h4 className="font-semibold text-gray-800">Student Visa</h4>
          <p className="text-xs text-gray-500 mt-2">
            For academic or training opportunities.
          </p>
        </div>

      </div>
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
    src="/assets/netherlands/travel-1.webp"
    alt=""
    className="row-span-2 h-full w-full object-cover rounded-2xl shadow-lg"
  />

  {/* TOP RIGHT */}
  <img
    src="/assets/netherlands/travel-2.webp"
    alt=""
    className="h-[160px] w-full object-cover rounded-2xl shadow-lg"
  />

  {/* BOTTOM RIGHT */}
  <img
    src="/assets/netherlands/travel-3.webp"
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