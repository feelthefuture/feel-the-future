import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Breakthrough Badge */}
        <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg font-bold border border-primary animate-pulse-neon">
          🚨 BREAKTHROUGH ONLINE SHOPPING TECHNOLOGY! 🚨
        </Badge>

        {/* Main Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="text-gradient">FEEL-A-MATTRESS</span>
            <sup className="text-2xl text-primary">™</sup>
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            FEEL A MATTRESS ONLINE!
          </div>
        </div>

        {/* Subheading */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Finally… Real Comfort, Powered By{" "}
            <span className="text-neon-cyan font-bold">HyperSense™</span> Technology!
          </p>
        </div>

        {/* Taglines */}
        <div className="mb-12 space-y-3">
          <p className="text-lg md:text-xl text-primary font-semibold">
            🌟 Feel the Future Today – No Store Visit Required!
          </p>
          <p className="text-lg md:text-xl text-accent font-semibold">
            💥 Try it Now – Just Press Your Face Into Your Screen!
          </p>
        </div>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="animate-glow">
            💥 PRESS YOUR FACE HERE 💥
          </Button>
          <Button variant="outline" size="lg" className="text-lg">
            Learn More About HyperSense™
          </Button>
        </div>

        {/* Glowing Mattress Visualization */}
        <div className="relative">
          <div className="w-72 h-48 mx-auto bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-2xl border-2 border-primary/50 shadow-2xl animate-pulse-neon">
            <div className="absolute inset-4 bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 rounded-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl animate-float">🛏️</div>
              </div>
            </div>
            {/* Sci-fi Energy Lines */}
            <div className="absolute -inset-2">
              <div className="w-full h-full border border-primary/30 rounded-2xl animate-ping"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Actual size may vary. Holographic projection not included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;