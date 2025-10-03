
import Image from "next/image";
import HeroSection from "./components/HostWithCaseStudy";


export default function Home() {
  return (
<div className="min-h-screen flex flex-col w-full bg-[#000000]">

  <HeroSection/>

   {/* ===== How Hosting Works Section ===== */}
<div className="relative w-full bg-black">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
    {/* Heading */}
    <h2 className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] font-helevetica font-bold text-white text-center mb-10 tracking-[1.5px]">
      HOW HOSTING WORKS?
    </h2>

    {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
  {[
    {
      img: "/how1.png",
      title: "Apply Online",
      desc: "Fill out the quick application form with your property details.",
    },
    {
      img: "/how2.png",
      title: "Site Review",
      desc: "Our team remotely evaluates your location (using photos + utility info you provide). We check if Level 2 or Level 3 is the best fit.",
    },
    {
      img: "/how3.png",
      title: "Free Installation",
      desc: "If approved, we install the charger(s) at no cost to you. All equipment and setup are handled by Ancestro Charge.",
    },
    {
      img: "/how4.png",
      title: "Start Earning",
      desc: "Your charger goes live, drivers start charging, and you collect a share of the profits every month.",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="group bg-[#111111] rounded-2xl p-4 sm:p-6 flex flex-col items-start h-full border border-transparent transition-all duration-300 hover:border-[#F5DC7B] hover:shadow-[0_0_20px_#F5DC7B1A]"
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300  border group-hover:border-[#F5DC7B] group-hover:bg-[#F5DC7B1A] group-hover:shadow-[0_0_10px_#F5DC7B1A]">
        <div className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
          <Image
            src={card.img}
            alt={card.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-400">
        {card.desc}
      </p>
    </div>
  ))}
</div>

  </div>
</div>


  <section className="w-full flex justify-center px-6 py-16">
  <div className="w-full max-w-[1400px] border-2 border-[#FFCD28] bg-[#FFCD281A] rounded-2xl flex flex-col md:flex-row p-8 md:px-28  md:p-14 gap-10 ">
    
    {/* Left Content */}
    <div className="flex-1 md:w-[55%] flex flex-col justify-center">
      {/* Title */}
      <h2 className="text-white text-[32px] sm:text-[40px] font-bold mb-4 ">
      Automated Payments
      </h2>

      {/* Subtitle */}
      <p className="text-[16px] text-gray-200 mb-6">
        Integrated with each charger for debit/credit card transactions. Drivers can pay instantly
as a guest or sign up as members.
      </p>

      {/* Features */}
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-[16px] font-semibold text-white mb-1">
         Member Benefits
          </h3>
          <p className="text-[14px]">
       Registered users enjoy discounts, loyalty perks, and priority charging options.
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-white mb-1">
           Smart Charging Map
          </h3>
          <p className="text-[14px]">
          Hosts’ locations are automatically listed in the app, guiding drivers in real time to your charger.
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-white mb-1">
            Host Transparency Dashboard
          </h3>
          <p className="text-[14px]">
            Automated reports track charging sessions, total sales, and energy usage — so hosts know exactly how much
they’re earning.
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-white mb-1">
          Downtime Alerts
          </h3>
          <p className="text-[14px]">
           Any issue is flagged instantly. Our team responds fast to keep your charger online and earning.
          </p>
        </div>

 
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="relative overflow-hidden group rounded-xl px-5 py-3 font-helevetica font-bold text-[16px] tracking-[2px] text-white bg-[#FFFFFF1A] hover:cursor-pointer transition-colors duration-300">
          {/* Background overlay */}
          <span className="absolute inset-0 bg-[#F5DC7B] left-full group-hover:left-0 transition-all duration-500 ease-out"></span>
          {/* Text */}
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
           APPLY TO HOST A CHARGE
          </span>
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 md:w-[45%] flex justify-center items-center">
      <div className="relative w-[300px] sm:w-[487px] h-[300px] sm:h-[488px]">
        <Image
          src="/appImage.png"
          alt="Ancestro App"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>

</div>


  );
}
