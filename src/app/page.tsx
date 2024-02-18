import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col bg-sitebackground">
        <NavBar />
        <div className=" container mx-auto px-12 p-4 mt-24">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
