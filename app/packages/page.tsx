"use client";
import HeroSection from "@/app/components/ui/HeroSection";
export default function PackagesPage() {
  return (
    <>
<HeroSection
  
  title={
    <>
      Pakistani Family & Tourist Visa Services <br />
      Hassaan Travel - Simple & Fast Processing
    </>
  }
  subtitle="Apply online for a Pakistani Family & Tourist visa today! Fast approvals & expert help."
/>



 {/* ====== SECTION WRAPPER WITH BG ====== */}
<section className="relative py-16 bg-gradient-to-b from-blue-100 via-blue-50 to-white overflow-hidden">

  {/* LIGHT BG */}
  <div className="absolute inset-0 opacity-20 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">

    {/* ===== HEADING ===== */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
        Popular Tour Packages <span className="text-black">From Netherlands</span>
      </h2>
      <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
        Embark on unforgettable journeys to destinations like Makkah, Madinah, Dubai and more.
      </p>
    </div>

    {/* ===== GRID ===== */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[1,2,3,4].map((item, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={
                i === 0
                  ? "/assets/packages/maldives.webp"
                  : i === 1
                  ? "/assets/packages/umra.webp"
                  : i === 2
                  ? "/assets/packages/dubai1.webp"
                  : "/assets/packages/dubai2.webp "
              }
              className="h-52 w-full object-cover"
              alt="package"
            />

            <span className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full shadow
              ${i===0 ? 'bg-pink-500' : i===1 ? 'bg-orange-500' : 'bg-green-500'}`}>
              {i===0 ? 'Couple' : i===1 ? 'Solo' : 'Family'}
            </span>

            <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-xl shadow text-blue-600 font-semibold text-sm">
              €{i===1 ? '899' : i===0 ? '3,499' : '1,599'}
              <div className="text-[10px] text-gray-400">per person</div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4 text-left">
            <div className="text-xs text-gray-500 mb-2">⭐ 4.8 (365)</div>

            <h3 className="font-semibold text-sm mb-1">
              {i===0 && 'Maldives Honeymoon Paradise'}
              {i===1 && 'Express Umrah Package'}
              {i===2 && 'Dubai Theme Park Experience'}
              {i===3 && 'Dubai Luxury Escape'}
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              📍 {i===1 ? 'Makkah & Madinah' : 'Dubai, UAE'} • 🕒 7 Days
            </p>

            <div className="bg-gray-100 rounded-lg p-2 text-xs mb-3">
              Atlantis The Palm ⭐⭐⭐⭐⭐
            </div>

            <div className="text-xs text-gray-600 space-y-1 mb-3">
              <p className="font-semibold text-black">Package Includes:</p>
              <p>✔ Flights</p>
              <p>✔ Hotel Stay</p>
              <p>✔ Meals</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded">
                Family package
              </span>
              <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded">
                Activities
              </span>
            </div>

            <div className="flex justify-between text-xs mb-3">
              <span>Next Departure:</span>
              <span className="font-medium">June 1, 2026</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      ))}

    </div>

    {/* ===== PAGINATION ===== */}
   <div className="flex justify-center mt-12 gap-3 text-sm font-medium">

  <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
    Previous
  </button>

  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
    1
  </button>

  <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
    2
  </button>

  <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
    3
  </button>

  <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
    4
  </button>

  <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
    Next
  </button>

</div>

  </div>
</section>


<section className="relative py-20 px-4 bg-gradient-to-b from-[#cfe8f3] to-[#eaf6fb]">

  {/* HEADING */}
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-black">
      Make Your <span className="text-blue-600">Custom</span> Travel Package
    </h2>
    <p className="text-gray-700 mt-2 text-sm max-w-xl mx-auto">
      Build your perfect journey tailored to your preferences. Choose your destination,
      travel style, and let us create an unforgettable experience.
    </p>
  </div>

  {/* BOX */}
  <div className="max-w-5xl mx-auto bg-[#f3f4f6] rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">

    {/* LEFT */}
    <div className="space-y-6">

      {/* DESTINATION */}
      <div>
        <h3 className="text-sm font-semibold text-black mb-3">Select Destination</h3>

        <div className="grid grid-cols-3 gap-3">

          {[
            { name: "Makkah", icon: "🕋" },
            { name: "Madinah", icon: "🕌" },
            { name: "Dubai", icon: "🏙️" },
            { name: "Istanbul", icon: "🕌" },
            { name: "Maldives", icon: "🏝️" },
            { name: "Cairo", icon: "🏛️" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-xl py-4 text-center hover:shadow cursor-pointer"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs text-black">{item.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* TRAVEL TYPE */}
      <div>
        <h3 className="text-sm font-semibold text-black mb-3">Travel Type</h3>

        <div className="grid grid-cols-4 gap-3">

          {[
            { name: "Family", icon: "👨‍👩‍👧" },
            { name: "Couple", icon: "💑" },
            { name: "Solo", icon: "🧳" },
            { name: "Friends", icon: "👥" },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl py-3 text-center text-xs border cursor-pointer ${
                item.name === "Couple"
                  ? "bg-blue-500 text-white border-blue-500 shadow"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              <div className="text-lg">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* DURATION */}
      <div>
        <h3 className="text-sm font-semibold text-black mb-3">Duration</h3>

        <div className="flex gap-2 flex-wrap">
          {["3-5 Days", "7 Days", "10 Days", "14 Days", "Custom"].map((item, i) => (
            <button
              key={i}
              className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-xs text-black hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </div>

    {/* RIGHT */}
    <div className="space-y-6">

      {/* TRAVELERS */}
      <div>
        <h3 className="text-sm font-semibold text-black mb-3">Number of Travelers</h3>

        {/* Adults */}
        <div className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-3 py-2 mb-3">
          <span className="text-sm text-black">Adults</span>
          <div className="flex items-center gap-3">
            <button className="w-7 h-7 flex items-center justify-center border border-blue-500 text-blue-600 rounded-full">-</button>
            <span className="text-black">2</span>
            <button className="w-7 h-7 flex items-center justify-center border border-blue-500 text-blue-600 rounded-full">+</button>
          </div>
        </div>

        {/* Children */}
        <div className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
          <span className="text-sm text-black">Children</span>
          <div className="flex items-center gap-3">
            <button className="w-7 h-7 flex items-center justify-center border border-blue-500 text-blue-600 rounded-full">-</button>
            <span className="text-black">0</span>
            <button className="w-7 h-7 flex items-center justify-center border border-blue-500 text-blue-600 rounded-full">+</button>
          </div>
        </div>
      </div>

      {/* PREFERENCES */}
      <div>
        <h3 className="text-sm font-semibold text-black mb-3">Additional Preferences</h3>

        {[
          { name: "Hotel Accommodation", icon: "🏨" },
          { name: "Airport Transport", icon: "🚖" },
          { name: "Tour Guide", icon: "🧭" },
          { name: "Meals Included", icon: "🍽️" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-3 py-2 mb-2"
          >
            <span className="text-sm text-black flex items-center gap-2">
              <span>{item.icon}</span> {item.name}
            </span>
            <input type="checkbox" />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 shadow-md">
        Get Your Custom Quote
      </button>

    </div>

  </div>
</section>



<section className="relative py-24 px-6 bg-gradient-to-b from-[#cfe8f3] to-[#eaf6fb]">

  {/* CARD */}
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-2xl px-12 py-16 text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Can't Find What You're Looking For?
    </h2>

    {/* TEXT */}
    <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
      Our travel experts are ready to create a personalized package just for you.
      Contact us today for a custom quote tailored to your preferences and budget.
    </p>

    {/* BUTTON */}
    <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition">
      Speak with a Travel Expert
    </button>

  </div>

</section>


  </>
);
}