import Projects from "@/components/main/Project";
import Navbar from "@/components/main/Navbar";

export default function ProjectsPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
    </main>
  );
}
