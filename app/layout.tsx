import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Nav/navigation";
import BackToTop from "./components/Nav/backToTop";
import Backdrop from "./components/Backdrop";
import ResumeSection from "./components/Resume/resumeSection";
import Decorate from "./Decorate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaquille Blackwood",
  description: "Hi, I'm Shaquille! Welcome to my technology & design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden relative`}
      >
        <Backdrop />
        <Navigation />
        {children}
        <BackToTop />
        <div
          id="resume"
          className="relative w-full bg-gradient-to-tl from-purple-950 to-purple-600 overflow-y-hidden overflow-x-hidden"
        >
          <Decorate />
          <ResumeSection />
        </div>
      </body>
    </html>
  );
}
