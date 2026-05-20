"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "../components/ui/HeroSection";
import { FaPlane, FaUser, FaPassport, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; // Location Pin Icon
import { BsFillAirplaneFill } from "react-icons/bs"; // Stylized Blue Plane Icon matching the image
import TestimonialsSection from "../components/ui/TestimonialsSection";

/* ---------------- DESTINATIONS DATA ---------------- */
const destinations = [
  {
    name: "Makkah",
    country: "Saudi Arabia",
    image: "/assets/destinations/d1.webp",
    description: "Holy pilgrimage destination",
    time: "6h 30m",
    price: "€399",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: "/assets/destinations/d2.webp",
    description: "Modern luxury & adventure",
    time: "6h 45m",
    price: "€299",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    image: "/assets/destinations/d3.webp",
    description: "Where East meets West",
    time: "4h 15m",
    price: "€189",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    image: "/assets/destinations/d4.webp",
    description: "Vibrant city of temples",
    time: "11h 45m",
    price: "€459",
  },
];

/* ---------------- FORM JSON ---------------- */
const formSections = [
  {
    title: "Flight Details",
    icon: <FaPlane size={12} className="text-blue-600" />,
    fields: [
      { label: "From (Departure City)", name: "from" },
      { label: "To (Destination City)", name: "to" },
      { label: "Departure Date", name: "departure", type: "date" },
      { label: "Return Date", name: "return", type: "date" },
      { label: "Your Class", name: "class", full: true },
    ],
  },
  {
    title: "Passenger Information",
    icon: <FaUser size={12} className="text-blue-600" />,
    fields: [
      { label: "Given Name", name: "firstName" },
      { label: "Middle Name", name: "middleName" },
      { label: "Last Name", name: "lastName" },
      { label: "Nationality", name: "nationality" },
      { label: "Date of Birth", name: "dob", type: "date", full: true },
    ],
  },
  {
    title: "Passport Information",
    icon: <FaPassport size={12} className="text-blue-600" />,
    fields: [
      { label: "Passport Number", name: "passport" },
      { label: "Date of Issue", name: "issueDate", type: "date" },
      { label: "Date of Expiry", name: "expiryDate", type: "date", full: true },
    ],
  },
  {
    title: "Contact Information",
    icon: <FaEnvelope size={12} className="text-blue-600" />,
    fields: [
      { label: "Email Address", name: "email" },
      { label: "Phone Number", name: "phone" },
    ],
  },
];

export default function Destination() {
  const [tripType, setTripType] = useState("Round Trip");
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <HeroSection
        title={
          <>
            Your Journey Starts Here: Book Your Tickets <br />
            Online with Ease
          </>
        }
        subtitle="Fast, Secure, and Reliable Ticket Booking for Every Traveler"
      />

      {/* DESTINATION SECTION */}
      <section className="relative py-20 px-6 sm:px-12 md:px-16 bg-[#cfe3ec]">

        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
            Fly to Your <span className="font-bold text-blue-600">Dream Destination</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Discover the world's most popular destinations with unbeatable flight prices.
            Book now and save up to 40% on select routes.
          </p>
        </div>

        {/* Wider layout with safe side breathing space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {destinations.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">

              <div className="relative h-52">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-0.5">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-200">
                    {/* Image matching Red Pin Icon */}
                    <IoLocationSharp size={14} className="text-red-500" />
                    {item.country}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">{item.description}</p>

                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Flight Time</span>
                  <span>Starting from</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    {/* Image matching Blue Airplane Icon */}
                    <BsFillAirplaneFill size={16} className="text-sky-500 transform rotate-[45deg]" />
                    {item.time}
                  </div>

                  <span className="font-bold text-blue-600 text-lg">
                    {item.price}
                  </span>
                </div>

                <hr className="mb-4" />

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all">
                  View Flights →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium transition hover:bg-blue-50 shadow-sm">
            Explore All Destinations →
          </button>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#cfe3ec] py-16 px-4 flex justify-center">

        <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8">

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              <span className="text-black">Air Ticket</span>{" "}
              <span className="text-blue-600">Request Form</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Fill out the form below and our travel experts will find you the best flight deals <br className="hidden sm:inline" /> within 24 hours
            </p>
          </div>

          {/* TRIP TYPE */}
          <div className="flex gap-3 mb-6">
            {["Round Trip", "One Way", "Multi-City"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tripType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* FORM */}
          {formSections.map((section, i) => (
            <div key={i} className="mb-8">

              <div className="flex items-center gap-2 mb-4 font-semibold text-sm text-gray-900">
                {section.icon}
                {section.title}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.fields.map((field, idx) => (
                  <div key={idx} className={field.full ? "sm:col-span-2" : ""}>
                    <label className="text-xs text-gray-600 mb-1 block">
                      {field.label}
                    </label>

                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm focus:border-blue-600 outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}

          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition hover:bg-blue-700">
              Submit Request
            </button>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA SECTION */}
      <section className="w-full bg-blue-600 py-16 px-4 text-center text-white">

        <div className="max-w-2xl mx-auto">

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Ready to Take Off?
          </h2>

          {/* SUBTEXT */}
          <p className="text-sm sm:text-base text-white/80 mb-6">
            Join thousands of satisfied travelers who trust Hassaan Travel for their flight bookings
          </p>

          {/* BUTTON */}
          <button className="bg-white text-blue-600 text-sm font-bold px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition flex items-center gap-2 mx-auto">
            Start Booking Now
            <span className="text-lg">→</span>
          </button>

        </div>

      </section>

    </main>
  );
}