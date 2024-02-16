import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#161b22]">
      <NavBar />
      <div className=" container mx-auto px-12 p-4 mt-24">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
