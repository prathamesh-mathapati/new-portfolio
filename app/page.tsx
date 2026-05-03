import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <>
      <PortfolioHeader />
      <main className="relative z-10" x-file-name="Portfolio" x-line-number="15" x-column="6" x-component="main"
        x-id="Portfolio_15_6" x-dynamic="false">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
