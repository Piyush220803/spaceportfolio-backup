import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ModalProvider } from "@/contexts/ModalContext";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Portfolio",
  description: "This is my space portfolio website",
  keywords: ["portfolio", "developer", "react", "nextjs", "fullstack"],
  authors: [{ name: "Piyush Pandey" }],
  openGraph: {
    title: "Piyush Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/blackhole.webm" as="video" type="video/webm" />
        <link rel="preload" href="/mainIconsdark.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <ModalProvider>
          <PerformanceMonitor />
          <StarsCanvas />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
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
