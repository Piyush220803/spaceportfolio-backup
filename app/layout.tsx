import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ModalProvider } from "@/contexts/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Portfolio",
  description: "This is my space portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <ModalProvider>
          <StarsCanvas />
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-250px] sm:top-[-310px] left-1/2 transform -translate-x-1/2 z-0 w-full h-3/4 object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
          <Navbar />
          <div className="relative z-[25] bg-black/20">
            {children}
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
