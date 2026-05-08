"use client";

export default function PackagesPage() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/contact-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto">

        {/* 👇 TEXT SIZE REDUCED */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
          Pakistani Family & Tourist Visa Services <br />
          Hassaan Travel - Simple & Fast Processing
        </h1>

        {/* 👇 SMALLER PARAGRAPH */}
        <p className="text-gray-700 text-xs sm:text-sm mb-6">
          Apply online for a Pakistani Family & Tourist visa today! Simple application process, fast approvals, and expert assistance.
        </p>

        {/* BUTTON */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition">
          Apply For Family Visa Now
        </button>

      </div>
    </section>



  );

<section className="relative py-20 px-6 text-center overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/packages-bg.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/80"></div>
  </div>

  {/* HEADING */}
  <h2 className="text-3xl md:text-4xl font-bold mb-3">
    <span className="text-blue-600">Popular Tour Packages</span>{" "}
    <span className="text-black">From Netherlands</span>
  </h2>

  <p className="text-gray-500 text-sm mb-12 max-w-2xl mx-auto">
    Embark on unforgettable journeys to popular destinations such as Makkah,
    Madinah, Dubai, and more with our exclusive tour packages.
  </p>

  {/* CARDS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src="/images/pkg-1.jpg" className="h-48 w-full object-cover" />

        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
          Couple
        </span>

        <span className="absolute top-3 right-3 bg-white text-blue-600 text-sm px-3 py-1 rounded-lg shadow">
          €3,499
        </span>
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-sm mb-2">
          Maldives Honeymoon Paradise
        </h3>

        <p className="text-xs text-gray-500 mb-3">10 Days</p>

        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li>✔ Private villa</li>
          <li>✔ All meals included</li>
          <li>✔ Ocean view</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
          Book Now
        </button>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src="/images/pkg-2.jpg" className="h-48 w-full object-cover" />

        <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
          Solo
        </span>

        <span className="absolute top-3 right-3 bg-white text-blue-600 text-sm px-3 py-1 rounded-lg shadow">
          €899
        </span>
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-sm mb-2">
          Express Umrah Package
        </h3>

        <p className="text-xs text-gray-500 mb-3">7 Days</p>

        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li>✔ Hotel Included</li>
          <li>✔ Visa Processing</li>
          <li>✔ Transport</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
          Book Now
        </button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src="/images/pkg-3.jpg" className="h-48 w-full object-cover" />

        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          Family
        </span>

        <span className="absolute top-3 right-3 bg-white text-blue-600 text-sm px-3 py-1 rounded-lg shadow">
          €1,599
        </span>
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-sm mb-2">
          Dubai Family Experience
        </h3>

        <p className="text-xs text-gray-500 mb-3">7 Days</p>

        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li>✔ Theme Park</li>
          <li>✔ Family Hotel</li>
          <li>✔ Transfers</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
          Book Now
        </button>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src="/images/pkg-4.jpg" className="h-48 w-full object-cover" />

        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          Family
        </span>

        <span className="absolute top-3 right-3 bg-white text-blue-600 text-sm px-3 py-1 rounded-lg shadow">
          €1,599
        </span>
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-sm mb-2">
          Dubai Family Theme Park
        </h3>

        <p className="text-xs text-gray-500 mb-3">7 Days</p>

        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li>✔ Atlantis Hotel</li>
          <li>✔ Water Park</li>
          <li>✔ Transfers</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
          Book Now
        </button>
      </div>
    </div>

  </div>
</section>

}