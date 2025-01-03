import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutAndWhy from "./components/AboutAndWhy";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        <Hero/>
        <AboutAndWhy></AboutAndWhy>
        <Features></Features>
        <FAQ></FAQ>
        <Footer></Footer>
        {children}
      </body>
    </html>
  );
}
