
"use client";
import Image from "next/image";
import Button from "./Button";

export default function HostWithCaseStudy() {
  const whyHostCards = [
    {
      img: "/icon1.png",
      title: "New Revenue Stream",
      desc: "Earn a share of every charging session. Your location generates income 24/7 with zero cost to start.",
    },
    {
      img: "/icon2.png",
      title: "More Traffic",
      desc: "EV drivers search for charging stops. Hosting brings new customers directly to your business and keeps them on-site longer.",
    },
    {
      img: "/icon3.png",
      title: "Zero Investment",
      desc: "We cover equipment, installation, and all ongoing maintenance. You provide the space, and we handle the rest.",
    },
    {
      img: "/icon4.png",
      title: "Fully Insured by Ancestro Protect",
      desc: "All equipment is insured against damage, downtime, and accidents — so you host with complete peace of mind.",
    },
    {
      img: "/icon5.png",
      title: "Join The Movement",
      desc: "Be part of the largest EV charging network movement in LATAM. Ancestro handles everything: customer service, charger maintenance, and payment processing through the Ancestro Charge App.",
    },
  ];

  return (
    <section className="relative flex flex-col w-full">
      {/* ===== Hero Section with GIF background ===== */}
      <div className="relative w-full min-h-screen flex flex-col justify-center">
        {/* Background GIF */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroGif.gif')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
          {/* Top Logo fixed at 20px from top */}
  <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-20 w-[264px] h-[57px]">
    <Image
      src="/TopLogo.png"
      alt="Top Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center  ">
          {/* Top Logo closer to top */}
     

          {/* Heading */}
          <h1 className="text-3xl md:text-[80px] font-helevetica font-bold text-white leading mb-6 w-full">
            HOST A CHARGER. <br />
            BE PART OF THE LARGEST EV <br />
             CHARGING NETWORK IN LATAM.
          </h1>

          {/* Description */}
          <p className="text-base md:text-[30px] font-helevetica text-gray-200 max-w-7xl mb-8">
            Turn your location into a revenue generating charging hub with zero
            upfront investments.
          </p>

          {/* CTA Button */}
<button className="relative overflow-hidden group rounded-xl px-5 py-3 font-helevetica font-bold text-[16px] tracking-[2px] text-white bg-[#FFFFFF1A] hover:cursor-pointer transition-colors duration-300">
  {/* Background overlay */}
  <span className="absolute inset-0 bg-[#F5DC7B] left-full group-hover:left-0 transition-all duration-500 ease-out"></span>

  {/* Text */}
  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
    APPLY TO HOST A CHARGER
  </span>
</button>


   
        </div>
      </div>

      {/* ===== Why Host + Cards Section ===== */}
      <div className="relative w-full z-10 inset-0 bg-black/10 " style={{marginTop:"-170px"}}>
        <div className="w-full max-w-[1400px] mx-auto px-6 pt-12 pb-20 ">
          {/* Why Host Heading moved here */}
          <h2 className="text-2xl md:text-[40px] font-helevetica font-bold text-white text-center mb-10 tracking-[2px]">
            WHY HOST?
          </h2>

          {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {whyHostCards.map((card, i) => (
    <div
      key={i}
      className="group bg-[#111111] rounded-2xl p-6 flex flex-col items-start border border-transparent transition-all duration-300 hover:border-[#F5DC7B] hover:shadow-[0_0_20px_#F5DC7B1A]"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300 border group-hover:border-[#F5DC7B] group-hover:bg-[#F5DC7B1A] group-hover:shadow-[0_0_10px_#F5DC7B1A]">
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
      <h3 className="text-lg font-semibold text-white mb-2">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400">{card.desc}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
