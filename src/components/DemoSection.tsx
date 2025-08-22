import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demoModes = [
    {
      id: "firm",
      name: "FIRM MODE",
      description: "Screen smacks back like a karate chop",
      emoji: "🥋",
      color: "bg-destructive",
      action: "KARATE CHOP!"
    },
    {
      id: "soft",
      name: "SOFT MODE", 
      description: "Feels like you're poking a marshmallow",
      emoji: "🍬",
      color: "bg-neon-pink",
      action: "MARSHMALLOW!"
    },
    {
      id: "memory",
      name: "MEMORY FOAM MODE",
      description: "Screen remembers your face print forever",
      emoji: "👤",
      color: "bg-tech-blue",
      action: "FACE IMPRINT!"
    },
    {
      id: "adjustable",
      name: "ADJUSTABLE MODE",
      description: "Scroll up for higher, down for lower",
      emoji: "⬆️⬇️",
      color: "bg-warning",
      action: "SCROLL NOW!"
    }
  ];

  const handleDemoClick = (demoId: string) => {
    setActiveDemo(demoId);
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    
    setTimeout(() => setActiveDemo(null), 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-lg border-primary">
            DEMO MODES AVAILABLE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Experience The Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary HyperSense™ technology lets you feel different mattress types 
            through your device screen. Choose your preferred firmness level below!
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demoModes.map((demo) => (
            <Card 
              key={demo.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                activeDemo === demo.id ? 'animate-pulse-neon border-primary' : 'hover:border-primary/50'
              }`}
              onClick={() => handleDemoClick(demo.id)}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 animate-float">
                  {demo.emoji}
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {demo.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {demo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="demo" 
                  className="w-full"
                  disabled={activeDemo === demo.id}
                >
                  {activeDemo === demo.id ? demo.action : "TRY IT NOW"}
                </Button>
              </CardContent>
              
              {/* Active Demo Effect */}
              {activeDemo === demo.id && (
                <div className="absolute inset-0 bg-primary/20 animate-ping pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Feel the Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Works on all devices: laptops, tablets, and flip phones (sort of)
            </p>
          </div>
          
          <Button 
            variant="neon" 
            size="lg"
            className="text-2xl px-12 py-6 animate-glow"
          >
            💥 PRESS YOUR FACE INTO YOUR SCREEN NOW! 💥
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            * Side effects may include cracked screens, broken noses, and overwhelming confusion about physics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;