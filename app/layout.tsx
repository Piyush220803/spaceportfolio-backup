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
        <link rel="preload" href="/newblackhole.mp4" as="video" type="video/mp4" />
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
            className="absolute top-20 left-0 z-[5] w-full h-1/2 object-cover pointer-events-none video-mobile-offset"
            style={{ transform: 'scaleX(-1)' }}
          >
            <source src="/nnnn.mp4" type="video/mp4" />
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
