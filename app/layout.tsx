import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Nav/navigation";
import BackToTop from "./components/Nav/backToTop";
import GlobalTheme from '@/app/context/ThemeContext'
import ModalProvider from "@/app/context/ModalContext";

export const metadata: Metadata = {
  title: "Shaquille Blackwood",
  description: "Hi, I'm Shaquille! Welcome to my technology & design portfolio",
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/icon.png",
        },
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">

    <ModalProvider>
      <GlobalTheme>
            <Navigation />
            {children}
            <BackToTop />
      </GlobalTheme>
    </ModalProvider>
    </html>
  );
}
