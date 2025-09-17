import Achievements from "@/components/main/Achievements";
import Navbar from "@/components/main/Navbar";

export default function AchievementsPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Achievements />
      </div>
    </main>
  );
}
