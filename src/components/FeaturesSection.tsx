import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    "No more reading 1,473 fake reviews from strangers.",
    "No more guessing if 'soft yet firm' is even real.",
    "Just press your face, hand, or belly into your screen and FEEL the firmness instantly!",
    "Works on all devices: laptops, tablets, and flip phones (sort of)."
  ];

  const technologies = [
    {
      name: "AI Comfort Predictor™",
      description: "Figures out what firmness you secretly like.",
      icon: "🤖",
      techLevel: "BREAKTHROUGH"
    },
    {
      name: "HyperSense™ Haptics",
      description: "Translates mattress softness/firmness through your screen.",
      icon: "📱",
      techLevel: "REVOLUTIONARY"
    },
    {
      name: "SleepGAN™",
      description: "Generates the feeling of lying down without leaving your couch.",
      icon: "🛋️",
      techLevel: "IMPOSSIBLE"
    },
    {
      name: "LazyGPT™",
      description: "Chooses your perfect mattress for you because decision-making is exhausting.",
      icon: "😴",
      techLevel: "GENIUS"
    },
    {
      name: "ReviewSynth™",
      description: "Auto-generates 10,000 fake reviews so you don't have to scroll.",
      icon: "⭐",
      techLevel: "QUESTIONABLE"
    }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Main Features */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-lg border-primary">
            MAIN FEATURES
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            <span className="text-gradient">Why Feel-A-Mattress™?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-foreground font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HyperSense Technology Section */}
        <div className="text-center mb-16">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 px-8 py-3 text-xl border-neon-cyan text-neon-cyan animate-pulse-neon">
              Powered By HyperSense™ Technology!
            </Badge>
            <h3 className="text-3xl md:text-5xl font-black text-gradient mb-6">
              The Science Behind The Magic
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of definitely-real scientists have developed cutting-edge technology 
              that somehow makes your screen feel like a mattress. Don't ask how - just trust the process.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {tech.icon}
                  </div>
                  <div className="mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs px-3 py-1 ${
                        tech.techLevel === 'BREAKTHROUGH' ? 'bg-primary text-primary-foreground' :
                        tech.techLevel === 'REVOLUTIONARY' ? 'bg-neon-cyan text-background' :
                        tech.techLevel === 'IMPOSSIBLE' ? 'bg-neon-pink text-background' :
                        tech.techLevel === 'GENIUS' ? 'bg-warning text-warning-foreground' :
                        'bg-destructive text-destructive-foreground'
                      }`}
                    >
                      {tech.techLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-primary mb-2">
                    {tech.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {tech.description}
                  </CardDescription>
                </CardContent>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="text-center">
          <div className="bg-muted/50 border border-primary/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-warning">⚠️ NOTICE:</span> Our technology is so advanced, 
              it might actually work. Side effects include: questioning reality, improved sleep quality, 
              and an inexplicable urge to touch every screen you see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;