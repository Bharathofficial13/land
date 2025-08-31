import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">AI-Powered Market Intelligence</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
          Discover <span className="gradient-text">Untapped</span><br />
          Business Ideas <span className="gradient-text">Before</span><br />
          Anyone Else
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We scrape Reddit, LinkedIn & the web to find{" "}
          <span className="text-primary font-semibold">high-demand, low-competition</span>{" "}
          product ideas — so you can build your next SaaS with confidence.
        </p>

        {/* CTA Button Centered */}
        <div className="flex justify-center w-full">
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 h-auto flex items-center justify-center"
            onClick={onJoinWaitlist}
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
