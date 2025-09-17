import Education from "@/components/main/Education";
import Navbar from "@/components/main/Navbar";

export default function EducationPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Education />
      </div>
    </main>
  );
}
