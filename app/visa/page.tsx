import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
import Image from "next/image";
import { HiOutlineGlobeAlt, HiOutlinePhone, HiOutlineBadgeCheck, HiOutlineSparkles } from "react-icons/hi";
import {
  MdLocationOn,
  MdEmail,
  MdPhone
} from "react-icons/md";
import ContactSection from "../components/ui/ContactSection";
import WhySection from "../components/ui/WhySection";
import FaqSection from "../components/ui/FaqSection";
import HeroSection from "@/app/components/ui/HeroSection";

<HeroSection
  title={
    <>
      Affordable Visa Services for Travelers in the <br /> Netherlands
    </>
  }
  subtitle="Get your Umrah, Pakistani, Saudia, UAE, and Netherlands visas quickly and easily with Hassaan Travel."
/>
export default function UmrahPage() {
  return (
    <main className="w-full overflow-hidden">

<HeroSection
  title={
    <>
      Affordable Visa Services for Travelers in the <br /> Netherlands
    </>
  }
  subtitle="Get your Umrah, Pakistani, Saudia, UAE, and Netherlands visas quickly and easily with Hassaan Travel."
/>

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
      src="/assets/visa/why-1.webp"
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
      src="/assets/visa/why-2.webp"
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
      src="/assets/visa/why-1.webp"
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
      src="/assets/visa/why-2.webp"
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


<WhySection />

<section className="py-12 bg-gradient-to-r from-[#E0F4FF] to-[#D8F2FF]">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
            <HiOutlineGlobeAlt className="text-white text-2xl" />
          </div>
          <h4 className="mt-4 font-semibold text-black">IATA Certified</h4>
          <p className="text-sm text-gray-700 mt-1">Fully Authorized Agency</p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
            <HiOutlinePhone className="text-white text-2xl" />
          </div>
          <h4 className="mt-4 font-semibold text-black">Concierge Support</h4>
          <p className="text-sm text-gray-700 mt-1">Available 24/7</p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
            <HiOutlineBadgeCheck className="text-white text-2xl" />
          </div>
          <h4 className="mt-4 font-semibold text-black">Award-Winning</h4>
          <p className="text-sm text-gray-700 mt-1">15+ Years Excellence</p>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1e88c9] rounded-xl flex items-center justify-center shadow-md">
            <HiOutlineSparkles className="text-white text-2xl" />
          </div>
          <h4 className="mt-4 font-semibold text-black">Premium Service</h4>
          <p className="text-sm text-gray-700 mt-1">White-Glove Treatment</p>
        </div>

      </div>

    </section>



<FaqSection />


<TestimonialsSection />



            <ContactSection />


<section className="bg-[#eaf6fb] py-12">

  {/* CENTERED CONTAINER (NOT FULL WIDTH) */}
  <div className="max-w-6xl mx-auto px-4">

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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <div className="bg-white/80 text-blue-700 text-sm md:text-base px-5 py-2.5 rounded-full mb-5 shadow font-semibold">
          ✈️ RECOGNIZED PARTNERS • 17+ YEARS EXCELLENCE
        </div>

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Seamless Travel, Extraordinary Experiences
        </h1>

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