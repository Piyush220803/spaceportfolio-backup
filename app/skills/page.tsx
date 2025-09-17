import Skills from "@/components/main/Skills";
import Navbar from "@/components/main/Navbar";

export default function SkillsPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
    </main>
  );
}
