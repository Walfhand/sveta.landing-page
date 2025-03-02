"use client";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PhaseMvpSection from "@/components/sections/PhaseMvpSection";
import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PhaseMvpSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
