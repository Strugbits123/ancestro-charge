
"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import ApplyModal from "./ApplyModal";
import { useTranslation } from "react-i18next";

export default function HostWithCaseStudy() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const whyHostCards = [
    {
      img: "/icon1.png",
      title: t("new_revenue_stream_title"),
      desc: t("new_revenue_stream_desc"),
     hoverImg: "/hower-icon1.png",
    },
    {
      img: "/icon2.png",
      title: t("more_traffic_title"),
      desc: t("more_traffic_desc"),
        hoverImg: "/hower-icon2.png",
    },
    {
      img: "/icon3.png",
      title: t("zero_investment_title"),
      desc: t("zero_investment_desc"),
        hoverImg: "/hower-icon3.png",
    },
    {
      img: "/icon4.png",
      title: t("fully_insured_title"),
      desc: t("fully_insured_desc"),
        hoverImg: "/hower-icon5.png",
    },
    {
      img: "/icon5.png",
      title: t("join_movement_title"),
      desc: t("join_movement_desc"),
        hoverImg: "/hower-icon4.png",
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
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center px-2">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-helevetica font-bold text-white leading mb-6 w-full">
        {t("host_charger_title").split("<br />").map((line, index) => (
              <span key={index}>
                {line}
                {index < t("host_charger_title").split("<br />").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-base md:text-[30px] font-helevetica text-gray-200 max-w-7xl mb-8">
            {t("host_charger_desc")}
          </p>

          {/* CTA Button */}
          <Button label={t("apply_to_host")} small onClick={handleOpenModal} />
        </div>
      </div>

      {/* ===== Why Host + Cards Section ===== */}
      <div className="relative w-full z-10 inset-0 bg-black/10" style={{ marginTop: "-170px" }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 pt-12 pb-20">
          {/* Why Host Heading */}
          <h2 className="text-2xl md:text-[40px] font-helevetica font-bold text-[#FFFFFF66] text-center mb-10 tracking-[2px] ">
            {t("why_host")}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyHostCards.map((card, i) => (
              <div
                key={i}
                className="group bg-[#111111] rounded-2xl p-6 flex flex-col items-start border border-transparent transition-all duration-300 hover:border-[#F5DC7B] hover:shadow-[0_0_35px_5px_#F5DC7B33]"
              >
                {/* Icon */}
         
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300  group-hover:bg-[#F5DC7B1A] group-hover:shadow-[0_0_35px_5px_#F5DC7B33]">
                            <div className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                              <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                
                            <div className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Image
                                src={card.hoverImg}
                                alt={`${card.title} hover`}
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
      <ApplyModal open={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}