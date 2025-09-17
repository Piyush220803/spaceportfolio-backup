import Encryption from "@/components/main/Encryption";
import Navbar from "@/components/main/Navbar";

export default function EncryptionPage() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="pt-20">
        <Encryption />
      </div>
    </main>
  );
}
