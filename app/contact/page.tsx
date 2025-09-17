import Contact from "@/components/main/Contact";
import Navbar from "@/components/main/Navbar";

export default function ContactPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
    </main>
  );
}
