import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white px-6 md:px-16 py-12">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto border border-dashed border-purple-500/40 p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-xl font-bold italic">
              <span className="text-blue-400">Hassaan</span>{" "}
              <span className="text-lime-400">Travel</span>
            </h2>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs">
              We are a company work efficiently and are very customer-oriented.
              Connection with the customer and ensuring a good trip are our
              highest priorities.
            </p>

            {/* IATA */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="/images/iata1.png"   // 👈 ADD YOUR IATA IMAGE HERE
                alt="iata"
                className="h-8 w-auto"
              />
              <span className="text-xs text-gray-400">
                IATA Aggregated
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Airline tickets</li>
              <li>Visa Services</li>
              <li>Umrah Services</li>
              <li>Hotels</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Conditions</li>
            </ul>
          </div>

       {/* CONTACT */}
<div>
  <h3 className="font-semibold mb-4">Contact</h3>

  <div className="space-y-3 text-sm text-gray-400">

    <div className="flex items-start gap-2">
      <MdLocationOn className="text-blue-400 mt-1 text-lg" />
      <span>Dordtselaan 67 D, 3081 BG, Rotterdam</span>
    </div>

    <div className="flex items-center gap-2">
      <MdEmail className="text-blue-400 text-lg" />
      <span>Info@hassaantravel.nl</span>
    </div>

    <div className="flex items-center gap-2">
      <MdPhone className="text-blue-400 text-lg" />
      <span>+31 104857673</span>
    </div>

    {/* SOCIAL ICONS */}
    <div className="flex gap-3 mt-4">

      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full cursor-pointer hover:bg-blue-500 transition">
        <FaFacebookF className="text-sm" />
      </div>

      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full cursor-pointer hover:bg-pink-500 transition">
        <FaInstagram className="text-sm" />
      </div>

      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full cursor-pointer hover:bg-gray-800 transition">
        <FaTiktok className="text-sm" />
      </div>

    </div>

  </div>
</div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p className="text-center md:text-left">
            Copyright © 2006 - 2024 HassaanTravel | All rights reserved
          </p>

          <div className="flex items-center gap-2">
            <span>Powered by</span>

            <img
              src="/images/footer.png"   
              alt="logo"
              className="h-4 w-auto"
            />

            <span>IT SOLUTIONS WORLDWIDE</span>
          </div>

        </div>

      </div>

    </footer>
  );
}