import Experience from "@/components/main/Experience";
import Navbar from "@/components/main/Navbar";

export default function ExperiencePage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Experience />
      </div>
    </main>
  );
}
