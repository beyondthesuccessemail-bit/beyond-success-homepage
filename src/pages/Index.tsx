import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import MissionSection from "@/components/MissionSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeyondSection from "@/components/BeyondSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Marketing Agency That Cares - Becoming The Success",
    description: "Full-service marketing agency born from real entrepreneur stories. Social media, SEO, PPC, videography & web design. Get your free quote today.",
  });
  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MarqueeSection />
    <MissionSection />
    <ServicesCarousel />
    <StatsSection />
    <TestimonialsSection />
    <BeyondSection />
    <CTASection />
    <Footer />
  </div>
  );
};

export default Index;
