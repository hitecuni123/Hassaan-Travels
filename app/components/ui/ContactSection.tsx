"use client";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tour.jpg')" }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

        {/* MAP */}
        <div className="order-last lg:order-first h-full">
          <iframe
            src="https://www.google.com/maps?q=Dordtselaan+67D,+3081BG+Rotterdam,+Netherlands&output=embed"
            className="rounded-xl shadow-xl w-full h-full min-h-[500px] border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 flex flex-col justify-between">

          {/* LOCATION */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-lg flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg text-xl">
              <MdLocationOn />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Rotterdam</h3>
              <p className="text-sm text-gray-600">
                Dordtselaan 67D, 3081BG Rotterdam, Netherlands
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Monday - Saturday <br /> Sunday: Closed
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-lg space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full"
              />
            </div>

            <textarea
              placeholder="Tell us about your travel plans..."
              rows={3}
              className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-sm w-full"
            ></textarea>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg text-sm w-full sm:w-auto shadow-md">
              Send Now
            </button>
          </div>

          {/* PHONE */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-lg flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg text-xl">
              <MdPhone />
            </div>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-medium">+31 104857673</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-lg flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg text-xl">
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
  );
}