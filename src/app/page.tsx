import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#161b22]">
      <div className=" container mx-auto px-12 p-4">
        <HeroSection />
      </div>
    </main>
  );
}
