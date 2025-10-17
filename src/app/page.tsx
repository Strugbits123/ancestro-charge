"use client";
import Image from "next/image";
import HeroSection from "./components/HostWithCaseStudy";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ApplyModalFinal from "./components/ApplyModalFinal";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const items = [
    {
      img: "/ant-1.png",
      title: t("ancestro_energy"),
      subtitle: t("ancestro_energy"),
    },
    {
      img: "/ant-2.png",
      title: t("ancestro_charge"),
      subtitle: t("ancestro_charge"),
    },
    {
      img: "/ant-3.png",
      title: t("ancestro_protect"),
      subtitle: t("ancestro_protect"),
    },
    {
      img: "/ant-4.png",
      title: t("ancestro_foundation"),
      subtitle: t("ancestro_foundation"),
    },
    {
      img: "/ant-5.png",
      title: t("ancestro_sustainable"),
      subtitle: t("ancestro_sustainable"),
    },
    {
      img: "/ant-6.png",
      title: t("ancestro_sustainable"),
      subtitle: t("ancestro_sustainable"),
    },
  ];

  const flags = [
    { img: "/flags/flag0.png" },
    { img: "/flags/flag1.png" },
    { img: "/flags/flag2.png" },
    { img: "/flags/flag3.png" },
    { img: "/flags/flag4.png" },
    { img: "/flags/flag5.png" },
    { img: "/flags/flag6.png" },
    { img: "/flags/flag7.png" },
    { img: "/flags/flag8.png" },
    { img: "/flags/flag9.png" },
    { img: "/flags/flag10.png" },
    { img: "/flags/flag11.png" },
    { img: "/flags/flag12.png" },
    { img: "/flags/flag13.png" },
    { img: "/flags/flag14.png" },
    { img: "/flags/flag15.png" },
    { img: "/flags/flag16.png" },
    { img: "/flags/flag17.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#000000]">
      {/* Language Toggle Button */}
      <div className="fixed top-0 sm:top-4  right-1 sm:right-4 z-50">
        <Button
          label={t("language_toggle")}
          onClick={toggleLanguage}
          small
          className="backdrop-blur-xl tracking-[1px] sm:tracking-[2px] py-2 sm:py-3  "
        />
      </div>

      <HeroSection />

      {/* ===== How Hosting Works Section ===== */}

      <div className="relative w-full bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] font-helvetica font-bold text-[#FFFFFF66] text-center mb-10 tracking-[1.5px]">
            {t("how_hosting_works")}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                img: "/how1.png",
                hoverImg: "/how1-hover.png",
                title: t("apply_online_title"),
                desc: t("apply_online_desc"),
              },
              {
                img: "/how2.png",
                hoverImg: "/how2-hover.png",
                title: t("site_review_title"),
                desc: t("site_review_desc"),
              },
              {
                img: "/how3.png",
                hoverImg: "/how3-hover.png",
                title: t("free_installation_title"),
                desc: t("free_installation_desc"),
              },
              {
                img: "/how4.png",
                hoverImg: "/how4-hover.png",
                title: t("start_earning_title"),
                desc: t("start_earning_desc"),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-[#111111] rounded-2xl p-4 sm:p-6 flex flex-col items-start h-full border border-transparent transition-all duration-300 hover:border-[#F5DC7B] hover:shadow-[0_0_35px_5px_#F5DC7B33]"
              >
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

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center px-6 py-16">
        <div className="w-full max-w-[1400px] border-2 border-[#FFCD28] bg-[#FFCD281A] rounded-2xl flex flex-col md:flex-row p-8 md:px-28 md:p-14 gap-10">
          {/* Left Content */}
          <div className="flex-1 md:w-[55%] flex flex-col justify-center font-inter">
            {/* Title */}
            <h2 className="text-white text-[32px] sm:text-[40px] font-bold mb-4">
              {t("ancestro_charge_app")}
            </h2>

            {/* Features */}
            <div className="space-y-6 text-gray-300 font-helvetica">
              <div>
                <h3 className="text-[16px] font-bold text-white mb-1">
                  {t("automated_payments_title")}
                </h3>
                <p className="text-[14px]">{t("automated_payments_desc")}</p>
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {t("member_benefits_title")}
                </h3>
                <p className="text-[14px]">{t("member_benefits_desc")}</p>
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {t("smart_charging_map_title")}
                </h3>
                <p className="text-[14px]">{t("smart_charging_map_desc")}</p>
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {t("host_transparency_dashboard_title")}
                </h3>
                <p className="text-[14px]">
                  {t("host_transparency_dashboard_desc")}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {t("downtime_alerts_title")}
                </h3>
                <p className="text-[14px]">{t("downtime_alerts_desc")}</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              label={t("apply_to_host")}
              small
              className="mt-8 w-full max-w-[350px]"
              onClick={handleOpenModal}
            />
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

      {/* GlobalPresenceSection */}
      <section className="w-full flex flex-col items-center text-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 font-helevetica">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-white leading-tight tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] font-bold mb-4 px-4">
          {t("global_presence_title").split("<br />")[0]}
          <br className="hidden sm:block" />
          {t("global_presence_title").split("<br />")[1]}
        </h2>
        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-[20px] text-gray-400 max-w-4xl mb-6 sm:mb-8 md:mb-10 px-4">
          {t("global_presence_desc")}
        </p>
        {/* Main Image */}
        <div className="mb-8 sm:mb-12 md:mb-16 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          <Image
            src="/HeroImage.png"
            alt="Ancestro Global Map"
            width={743}
            height={965}
            className="mx-auto h-auto w-full"
            priority
          />
        </div>
        {/* Flags Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-4 md:gap-8 w-full px-4">
          <div
            className="
      grid 
      grid-cols-6 sm:grid-cols-9 
      gap-4 sm:gap-4 md:gap-8 
      justify-center
      place-items-center
      w-full
      max-w-[1000px]
    "
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="relative w-[37px] h-[32px] sm:w-[60px] sm:h-[40px] md:w-[75px] md:h-[50px] rounded-[6px] sm:rounded-[8px] md:rounded-[10px] overflow-hidden flex-shrink-0"
              >
                <Image
                  src={`/flags/flag${i}.png`}
                  alt={`Flag ${i}`}
                  fill
                  sizes="(max-width: 640px) 50px, (max-width: 768px) 60px, 75px"
                  className="object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Ancestro */}
      <section className="w-full flex flex-col items-center text-center py-20 px-6 bg-black text-white font-helvetica">
        {/* Main Heading */}
        <h2 className="text-[30px] tracking-[2px] font-semibold mb-16 uppercase">
          {t("powered_by_ancestro")}
        </h2>

        {/* 5 Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 w-full max-w-7xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group font-helvetica"
            >
              {/* Image */}
              <div className="relative mb-6 w-[120px] h-[79px] sm:w-[130px] sm:h-[85px] md:w-[150px] md:h-[95px] lg:w-[160px] lg:h-[100px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              {/* <h3 className="text-lg font-bold text-2xl md:text-[30px] lg:text-[28px] transition-colors duration-300 group-hover:text-[#F5DC7B] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
                {item.title}
              </h3> */}

              {/* Subtitle */}
              {/* <p className="text-sm md:text-[18px] mt-[-5px] text-light   transition-colors duration-300 group-hover:text-[#F5DC7B] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
                {item.subtitle}
              </p> */}

              {/* Custom Arrow */}
              {/* <div className="mt-3 w-[24.6px] h-[26.9px] relative transition-colors duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(82%)_sepia(42%)_saturate(347%)_hue-rotate(14deg)_brightness(97%)_contrast(88%)]">
                <Image
                  src="/rightarrow.png"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* ReadyToHost */}
      <section className="relative w-full flex items-center justify-center my-10 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl max-w-[85%] md:max-w-3xl lg:max-w-7xl mx-auto w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[438px]"
          style={{ backgroundImage: "url('/host-bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl max-w-[90%] sm:max-w-6xl lg:max-w-7xl mx-auto w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[438px]" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center text-white z-10 w-full max-w-[90%] sm:max-w-6xl lg:max-w-7xl h-[300px] sm:h-[380px] md:h-[420px] lg:h-[438px] px-4">
          <h2 className="font-helvetica font-bold leading-tight tracking-[1px] mb-6 sm:mb-8 text-[22px] sm:text-[30px] md:text-[42px] lg:text-[56px]">
            {t("ready_to_host").split("<br />")[0]}
            <br className="hidden sm:block" />
            {t("ready_to_host").split("<br />")[1]}
          </h2>

          {/* Button */}
          <Button label={t("apply_now")} onClick={handleOpenModal} />
        </div>
      </section>

      <Footer />
      {/* <ApplyModal open={isModalOpen} onClose={handleCloseModal} /> */}
      <ApplyModalFinal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
