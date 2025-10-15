
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "./I18nProvider"; // Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ancestro Charge - Clean Energy Solutions",
  description: "Ancestro Charge provides ultra-fast, reliable EV charging solutions powered by clean energy — making electric mobility simple, smart, and sustainable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = "en"; 

  return (
    <html lang={initialLanguage}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${inter.variable} antialiased`}
      >
        <I18nProvider initialLanguage={initialLanguage}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}