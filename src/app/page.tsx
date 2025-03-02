"use client";
import { useState, useEffect } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PhaseMvpSection from "@/components/sections/PhaseMvpSection";
import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      <HeroSection
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <FeaturesSection />
      <PhaseMvpSection />
      <AboutSection />
      <CtaSection
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
