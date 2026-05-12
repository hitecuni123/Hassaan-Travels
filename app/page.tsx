import {
  FaPlane,
  FaBed,
  FaFileAlt,
  FaHeadset,
  FaCheck,
  FaStar
} from "react-icons/fa";

import {
  MdLocationOn,
  MdEmail,
  MdPhone
} from "react-icons/md";

import { GiTakeMyMoney } from "react-icons/gi";

import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full text-gray-800">


      
{/* HERO */}
<section className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden min-h-[600px] md:min-h-[680px] pb-16">
  {/* VIDEO */}
  <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
    <source src="/videos/hero.mp4" />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 pt-24 md:pt-28">

    {/* BADGE */}
    <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-5 text-xs sm:text-sm">
      <Image
        src="/images/iata.png"
        alt="IATA"
        width={20}
        height={20}
        className="h-4 w-auto object-contain"
      />
      <span>IATA AUTHORIZED • 17+ YEARS EXCELLENCE</span>
    </div>

    {/* HEADING LINE 1 */}
    <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] whitespace-nowrap">
      Fast Tickets. Smooth <span className="text-blue-400">Journeys</span>
    </h2>

    {/* HEADING LINE 2 */}
    <h3 className="text-4xl md:text-6xl font-extrabold text-blue-400 mt-1">
      From Booking to Boarding
    </h3>

    {/* DESCRIPTION */}
    <p className="mt-4 text-gray-200 text-sm md:text-lg leading-snug">
      Experience seamless, luxury travel with expert visa processing, bespoke Umrah packages,
    </p>
    <p className="text-gray-200 text-sm md:text-lg leading-snug">
      and personalized guidance. Trusted by 10,000+ discerning travelers.
    </p>

  </div>

  {/* SEARCH — still inside the section, video covers it */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-10">
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center overflow-hidden w-full">

{/* FROM */}
<div className="px-6 py-5 border-b lg:border-b-0 lg:border-r text-center lg:text-left w-full">
  <p className="text-xs text-gray-400">From</p>
  <p className="text-sm font-semibold text-gray-800">Amsterdam, Netherlands</p>
</div>

{/* TO */}
<div className="px-6 py-5 border-b lg:border-b-0 lg:border-r text-center lg:text-left w-full">
  <p className="text-xs text-gray-400">To</p>
  <p className="text-sm font-semibold text-gray-800">Country, City or Airport</p>
</div>

{/* DEPART */}
<div className="px-6 py-5 border-b lg:border-b-0 lg:border-r text-center lg:text-left w-full">
  <p className="text-xs text-gray-400">Depart</p>
  <p className="text-sm font-semibold text-gray-800">Add Date</p>
</div>

{/* RETURN */}
<div className="px-6 py-5 border-b lg:border-b-0 lg:border-r text-center lg:text-left w-full">
  <p className="text-xs text-gray-400">Return</p>
  <p className="text-sm font-semibold text-gray-800">Add Date</p>
</div>

{/* TRAVELLERS */}
<div className="px-6 py-5 border-b lg:border-b-0 lg:border-r text-center lg:text-left w-full">
  <p className="text-xs text-gray-400">Travellers & Cabin Class</p>
  <p className="text-sm font-semibold text-gray-800">1 Adult, Economy</p>
</div>

      {/* BUTTON */}
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-5 font-semibold whitespace-nowrap w-full lg:w-auto">
        Subscribe
      </button>

    </div>
  </div>

</section>
      {/* POPULAR TOUR PACKAGES */}
      <section
  className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/tour.jpg')" }}
>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          <span className="text-blue-600">Popular Tour Packages</span>{" "}
          <span className="text-black">From Netherlands</span>
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl text-sm sm:text-base">
          Embark on unforgettable journeys to popular destinations such as Makkah, Madinah, Dubai, and more with our exclusive tour packages.
        </p>

        {/* CATEGORY BUTTONS - Responsive wrap */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          <button className="bg-blue-500 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">Popular</button>
          <button className="bg-gray-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">Family</button>
          <button className="bg-gray-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">Honeymoon</button>
          <button className="bg-gray-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">Summer</button>
          <button className="bg-gray-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">Cultural</button>
        </div>

      {/* CARDS GRID - Responsive columns */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    { img: "dubai.webp", name: "Dubai", country: "UAE", price: "€ 1,650" },
    { img: "istanbul.webp", name: "Istanbul", country: "Turkey", price: "€ 1,750" },
    { img: "bangkok.webp", name: "Bangkok", country: "Thailand", price: "€ 2,250" },
    { img: "makkah.webp", name: "Makkah", country: "Saudi Arabia", price: "€ 1,950" },
    { img: "madinah.webp", name: "Madinah", country: "Saudi Arabia", price: "€ 1,850" },
    { img: "kuala-lumpur.webp", name: "Kuala Lumpur", country: "Malaysia", price: "€ 2,150" },
  ].map((item, i) => (
    <div
      key={i}
      className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >

      {/* IMAGE LEFT */}
      <Image
        src={`/assets/home/${item.img}`}
        alt={item.name}
        width={140}
        height={110}
        className="w-[120px] sm:w-[140px] h-[100px] sm:h-[110px] object-cover"
      />

      {/* TEXT RIGHT */}
      <div className="p-3 sm:p-4 flex flex-col justify-between w-full">

        <div>
          <h3 className="font-semibold text-sm">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.country}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Retour vanaf</p>
          <p className="text-blue-600 font-bold">{item.price}</p>
        </div>

      </div>
    </div>
  ))}

</div>
      </section>

{/* EXPERT VISA SOLUTIONS */}
<section
  className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/tour.webp')" }}
>

  {/* TITLE */}
  <h2 className="text-3xl sm:text-4xl font-bold">
    Expert Visa <span className="text-blue-600">Solutions</span>
  </h2>

  <p className="text-gray-600 mt-2 mb-12 px-2">
    Streamlined processing with guaranteed approval for all destinations
  </p>
{/* CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">

  {[
    {
      title: "Flight Booking",
      desc: "Book affordable flights with flexible options for individuals and families.",
      icon: <FaPlane />,
    },
    {
      title: "Hotel Reservations",
      desc: "Comfortable accommodations in Makkah, Madinah and worldwide destinations.",
      icon: <FaBed />,
    },
    {
      title: "Visa Processing",
      desc: "Fast and reliable visa services ensuring smooth approval for travelers.",
      icon: <FaFileAlt />,
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock customer support for all your travel needs.",
      icon: <FaHeadset />,
    },
  ].map((item, i) => (

    <div
      key={i}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
    >

      {/* ICON LEFT */}
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white text-xl mb-4">
        {item.icon}
      </div>

      {/* TEXT */}
      <h3 className="font-semibold text-lg mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {item.desc}
      </p>

    </div>

  ))}

</div>

{/* PARTNERS */}
<div className="mt-16">

  <p className="text-sm text-gray-600 mb-6">
    Our Services Partners
  </p>

  <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-90">

    <Image
      src="/images/etihad.png"
      alt="Etihad Airways"
      width={140}
      height={50}
      className="h-8 sm:h-10 w-auto object-contain"
    />

    <Image
      src="/images/qatar.png"
      alt="Qatar Airways"
      width={140}
      height={50}
      className="h-8 sm:h-10 w-auto object-contain"
    />

    <Image
      src="/images/pia.png"
      alt="PIA"
      width={140}
      height={50}
      className="h-8 sm:h-10 w-auto object-contain"
    />

    <Image
      src="/images/emirates.png"
      alt="Emirates"
      width={140}
      height={50}
      className="h-8 sm:h-10 w-auto object-contain"
    />

    <Image
      src="/images/saudia.png"
      alt="Saudia"
      width={140}
      height={50}
      className="h-8 sm:h-10 w-auto object-contain"
    />

  </div>

</div>
</section>

      {/* FIVE STAR HOTEL EXPERIENCE */}
      <section
  className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/hote.jpg')" }}
>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div>

            {/* SMALL BADGE */}
            <div className="inline-block bg-yellow-100 text-yellow-700 text-xs px-4 py-1 rounded-full mb-4">
              LUXURY ACCOMMODATION
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-snug">
              Five-Star Hotel <br /> Experiences
            </h2>

            {/* FEATURES */}
            <div className="space-y-4 sm:space-y-5">

              {[
                {
                  title: "Premium Hotels Worldwide",
                  desc: "Stay at handpicked 5-star hotels worldwide with prime locations and exceptional comfort.",
                },
                {
                  title: "Luxury Suites & Personalized Stays",
                  desc: "Enjoy spacious suites with personalized services for a seamless stay.",
                },
                {
                  title: "Exclusive Deals & Priority Booking",
                  desc: "Access exclusive rates, priority bookings, and premium amenities worldwide.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-md"
                >

                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg">
  <FaCheck />
</div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
{/* RIGHT IMAGE */}
<div className="order-first lg:order-last flex justify-center">

  <Image
    src="/assets/home/hotel.webp"
    alt="Luxury Hotel"
    width={500}
    height={700}
    className="rounded-2xl shadow-lg w-full max-w-md h-[520px] object-cover object-top"
  />

</div>
        </div>

      </section>

      {/* IATA / FEATURES STRIP */}
      <section className="relative bg-[#cfeaf5] py-12 sm:py-16">

        {/* BLUE LINE */}
        <div className="absolute top-5 sm:top-10 left-0 w-full h-[2px] sm:h-[3px] bg-blue-400"></div>

        {/* CONTENT - Responsive grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center px-4 sm:px-8 md:px-16">
                
          {[
              {
    icon: <FaPlane />,
    title: "IATA Certified",
    desc: "Fully Authorized Agency",
  },
  {
    icon: <FaHeadset />,
    title: "Concierge Support",
    desc: "Available 24/7",
  },
  {
    icon: <GiTakeMyMoney />,
    title: "Award-Winning",
    desc: "15+ Years Excellence",
  },
  {
    icon: <FaStar />,
    title: "Premium Service",
    desc: "White-Glove Treatment",
  },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* FLOATING ICON BOX */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-500 text-white rounded-2xl shadow-lg -mt-8 mb-2 sm:mb-3 text-lg sm:text-xl">
                {item.icon}
              </div>

              {/* TEXT */}
              <h3 className="font-semibold text-xs sm:text-sm">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-600 mt-1">{item.desc}</p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT / MAP SECTION */}
<section
  className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/tour.jpg')" }}
>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

         <div className="order-last lg:order-first h-full">
  <iframe
    src="https://www.google.com/maps?q=Dordtselaan+67D,+3081BG+Rotterdam,+Netherlands&output=embed"
    className="rounded-xl shadow-lg w-full h-full min-h-[500px]"
    loading="lazy"
  ></iframe>
</div>

{/* RIGHT SIDE */}
<div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-between">

  {/* LOCATION CARD */}
  <div className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow flex gap-4 items-start">
    
    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg">
      <MdLocationOn />
    </div>

    <div>
      <h3 className="font-semibold">Rotterdam</h3>
      <p className="text-sm text-gray-500">
        Dordtselaan 67D, 3081BG Rotterdam, Netherlands
      </p>
      <p className="text-xs text-gray-400 mt-2">
        Monday - Saturday <br /> Sunday: Closed
      </p>
    </div>

  </div>

  {/* FORM */}
  <div className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow space-y-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full transition"
      />

      <input
        type="email"
        placeholder="your@email.com"
        className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full transition"
      />
    </div>

    <textarea
      placeholder="Tell us about your travel plans..."
      className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full transition"
      rows={3}
    ></textarea>

    <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto shadow-md hover:shadow-lg">
      Send Now
    </button>

  </div>

  {/* PHONE */}
  <div className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">

    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg">
      <MdPhone />
    </div>

    <div>
      <p className="text-xs text-gray-400">Phone</p>
      <p className="text-sm font-medium">+31 104857673</p>
    </div>

  </div>

  {/* EMAIL */}
  <div className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">

    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg">
      <MdEmail />
    </div>

    <div>
      <p className="text-xs text-gray-400">Email</p>
      <p className="text-sm font-medium">info@hassaantravel.nl</p>
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

      {/* CTA SECTION */}
      <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-r from-[#1ea7d7] to-[#0f7db0] text-white">

        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Start Your Journey?
        </h2>

        <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto px-2">
          Contact us today for a free consultation and discover how we can
          make your travel dreams a reality.
        </p>

        <button className="bg-lime-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold">
          Request a Free Quote →
        </button>

      </section>

    </main>
  );
}