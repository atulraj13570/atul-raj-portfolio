import SiteShell from "@/components/layout/SiteShell";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

const Index = () => {
  return (
    <SiteShell>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </SiteShell>
  );
};

export default Index;