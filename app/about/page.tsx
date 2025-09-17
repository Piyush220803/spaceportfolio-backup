import About from "@/components/main/About";
import Navbar from "@/components/main/Navbar";

export default function AboutPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
    </main>
  );
}
