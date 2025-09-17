"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";

// Lazy load non-critical components
const Encryption = dynamic(() => import("@/components/main/Encryption"), {
  loading: () => <div className="h-screen bg-transparent" />,
  ssr: false
});

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-col gap-20">
        <Hero />
        <Encryption />
      </div>
    </main>
  );
}
