import { useRef } from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WhyUseSection } from "@/components/landing/WhyUseSection";
import { MockPreviewSection } from "@/components/landing/MockPreviewSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { ThemeToggle } from "@/components/landing/ThemeToggle";

const Index = () => {
  // Ref for CTA section
  const ctaRef = useRef<HTMLElement>(null);

  const handleJoinWaitlist = () => {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <HowItWorksSection />
      <WhyUseSection />
      <MockPreviewSection />
      {/* Attach ref here */}
      <section ref={ctaRef}>
        <CtaSection />
      </section>
    </div>
  );
};

export default Index;
