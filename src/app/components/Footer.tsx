"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black text-white font-helvetica">
      {/* Top Divider */}
      <div
        className="w-full h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #C4952D 0%, #AE7F2A 25%, #F5DC7B 50%, #AE7F2A 75%, #C4952D 100%)",
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="flex flex-col items-center py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo-footer.png"
            alt="Ancestro Logo"
            width={364}
            height={78}
            className="object-contain w-[240px] sm:w-[300px] lg:w-[364px]"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-20 w-full max-w-[1400px] text-[14px] font-bold mb-12 justify-items-center sm:justify-items-start ">
          {/* Hosts */}
          <div className="flex flex-col sm:items-start w-full max-w-[200px] ">
            <h3
              className="text-[14px] font-bold mb-3 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #C4952D, #AE7F2A, #F5DC7B, #AE7F2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("footer_hosts")}
            </h3>
            <ul className="space-y-2 text-[14px] text-white/90 list-disc list-outside pl-6 w-full">
              <li>{t("footer_apply_to_host")}</li>
              <li>{t("footer_how_it_works")}</li>
              <li>{t("footer_app_features")}</li>
            </ul>
          </div>

          {/* Dealers */}
          <div className="flex flex-col items-start w-full max-w-[200px]">
            <h3
              className="text-[14px] font-bold mb-3 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #C4952D, #AE7F2A, #F5DC7B, #AE7F2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("footer_dealers")}
            </h3>
            <ul className="space-y-2 text-[14px] text-white/90 list-disc list-outside pl-6 w-full">
              <li>{t("footer_dealer_application")}</li>
              <li>{t("footer_portal_login")}</li>
            </ul>
          </div>

          {/* Customers */}
          <div className="flex flex-col items-start w-full max-w-[200px]">
            <h3
              className="text-[14px] font-bold mb-3 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #C4952D, #AE7F2A, #F5DC7B, #AE7F2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("footer_customers")}
            </h3>
            <ul className="space-y-2 text-[14px] text-white/90 list-disc list-outside pl-6 w-full">
              <li>{t("footer_download_app")}</li>
              <li>{t("footer_find_a_charger")}</li>
              <li>{t("footer_support")}</li>
            </ul>
          </div>

          {/* Investors */}
          <div className="flex flex-col items-start w-full max-w-[200px]">
            <h3
              className="text-[14px] font-bold mb-3 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #C4952D, #AE7F2A, #F5DC7B, #AE7F2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("footer_investors")}
            </h3>
            <ul className="space-y-2 text-[14px] text-white/90 list-disc list-outside pl-6 w-full">
              <li>{t("footer_investor_relations")}</li>
              {/* <li >{t("footer_ancestro_capital")}</li> */}
              <li>
                <a
                  href="https://www.ancestrocapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t("footer_ancestro_capital")}
                </a>
              </li>

              <li>{t("footer_sustainability")}</li>
            </ul>
          </div>

          {/* Company + Social Icons */}
          <div className="flex flex-col items-start w-full max-w-[200px]">
            <h3
              className="text-[14px] font-bold mb-3 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #C4952D, #AE7F2A, #F5DC7B, #AE7F2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("footer_company")}
            </h3>
            <ul className="space-y-2 text-[14px] text-white/90 list-disc list-outside pl-6 w-full mb-4">
              <li>{t("footer_about")}</li>
              <li>{t("footer_careers")}</li>
              <li>{t("footer_contact")}</li>
              <li>{t("footer_privacy_policy")}</li>
              <li>{t("footer_terms_of_service")}</li>
            </ul>
            {/* Social Icons under Company */}
          <div className="flex gap-4 mt-2 justify-start pl-1 sm:pl-6">
  {/* YouTube */}
  <a
    href="https://www.youtube.com/@GrupoAncestro"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <Image
      src="/icon-yt.png"
      alt="YouTube"
      width={37}
      height={37}
      className="object-contain cursor-pointer"
    />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ancestrocharge/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <Image
      src="/icon-instagram.png"
      alt="Instagram"
      width={37}
      height={37}
      className="object-contain cursor-pointer"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/ancestro-charge/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <Image
      src="/icon-linkedin.png"
      alt="LinkedIn"
      width={37}
      height={37}
      className="object-contain cursor-pointer"
    />
  </a>
</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div
        className="w-full py-5 font-lato flex flex-col sm:flex-row items-center justify-between sm:justify-around text-center sm:text-left text-black text-[14px] sm:text-[15px] font-bold px-4 sm:px-10 tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #C4952D 0%, #AE7F2A 25%, #F5DC7B 50%, #AE7F2A 75%, #C4952D 100%)",
        }}
      >
        <p className="mb-2 sm:mb-0">{t("footer_all_rights_reserved")}</p>
        <p>{t("footer_buy_charger")}</p>
      </div>
    </footer>
  );
}
