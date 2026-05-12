export default function TicketingPage() {
  return (
    <main className="bg-[#eef5fb] min-h-screen">

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
            Your Journey Starts Here: Book Your Tickets
            <br />
            Online with Ease
          </h1>

          <p className="text-xs sm:text-sm text-black mt-3">
            Fast, Secure, and Reliable Ticket Booking for Every Traveler
          </p>
        </div>
      </section>

     




<section className="relative py-20 px-4">

     {/* BACKGROUND IMAGE */}
        <img
          src="/images/contact-bg.jpg"
          alt="Ticketing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      {/* OVERLAY */}
<div className="absolute inset-0 bg-white/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
            Air Ticket <span className="text-blue-600">Request Form</span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Fill out the form below and our travel experts will find you the best flight deals within 24 hours
          </p>
        </div>

        {/* FORM BOX */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

          {/* TRIP TYPE */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">Trip Type</p>
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-blue-600 text-white py-2 rounded-lg text-sm">
                Round Trip
              </button>
              <button className="bg-gray-100 border border-gray-300 py-2 rounded-lg text-sm text-gray-700">
                One Way
              </button>
              <button className="bg-gray-100 border border-gray-300 py-2 rounded-lg text-sm text-gray-700">
                Multi-City
              </button>
            </div>
          </div>

          {/* FLIGHT DETAILS */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-4">✈ Flight Details</p>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">From (Departure City)</label>
                <input
                  placeholder="Amsterdam (AMS)"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">To (Destination City)</label>
                <input
                  placeholder="Dubai (DXB)"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Departure Date</label>
                <input
                  type="date"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Return Date</label>
                <input
                  type="date"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Travel Class</label>
                <input
                  placeholder="Economy / Business / First"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>
          </div>

          {/* PASSENGER INFO */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-4">👤 Passenger Information</p>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">Given Name *</label>
                <input
                  placeholder="As per passport"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Middle Name</label>
                <input
                  placeholder="Optional"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  placeholder="As per passport"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Nationality *</label>
                <input
                  placeholder="e.g., Dutch"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Date of Birth *</label>
                <input
                  type="date"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>
          </div>

          {/* PASSPORT INFO */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-4">📘 Passport Information</p>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">Passport Number *</label>
                <input
                  placeholder="e.g., N1234567"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Date of Issue *</label>
                <input
                  type="date"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Date of Expiry *</label>
                <input
                  type="date"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-4">📧 Contact Information</p>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  placeholder="your@email.com"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  placeholder="+31 6 12345678"
                  className="w-full p-2.5 mt-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>
          </div>

          {/* BUTTON */}
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Submit Request
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Our team will review your request and send you the best flight options within 24 hours
            </p>
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




{/* CTA */}
 <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-10 px-4 text-center">
      
      {/* HEADING */}
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
        Ready to Take Off?
      </h2>

      {/* SUBTEXT */}
      <p className="text-blue-100 text-sm mb-5">
        Join thousands of satisfied travelers who trust Hassaan Travel for their flight bookings
      </p>

      {/* BUTTON */}
      <button className="bg-white text-blue-600 text-sm font-medium px-5 py-2 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
        Start Booking Now
        <span className="text-xs">▼</span>
      </button>

    </section>


    </main>
  );
}