import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Zap, Brain, Shield } from "lucide-react";

const DisclaimerSection = () => {
  const warnings = [
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      text: "May cause cracked screens, broken noses, and lifelong regret"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "Technology not FDA approved (they hung up on us)"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      text: "Probably illegal in 47 states and most dimensions"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Don't actually do this (seriously, please don't)"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 px-6 py-2 text-lg animate-pulse">
            ⚠️ LEGAL DISCLAIMER ⚠️
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            Important Safety Information
            <sup className="text-lg text-muted-foreground">(That We're Legally Required to Include)</sup>
          </h2>
        </div>

        {/* Main Disclaimer */}
        <div className="max-w-4xl mx-auto mb-12">
          <Alert className="border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <AlertDescription className="text-base md:text-lg font-medium text-foreground">
              <span className="font-bold text-destructive">DISCLAIMER:</span> Feel-A-Mattress™ may cause cracked screens, broken noses, and lifelong regret. 
              Technology not FDA approved. Probably illegal. Don't actually do this.
            </AlertDescription>
          </Alert>
        </div>

        {/* Warning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {warnings.map((warning, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 border border-warning/30 bg-warning/5 rounded-lg"
            >
              <div className="text-warning flex-shrink-0">
                {warning.icon}
              </div>
              <p className="text-sm text-foreground">
                {warning.text}
              </p>
            </div>
          ))}
        </div>

        {/* Fine Print */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-muted/20 border border-muted-foreground/20 rounded-xl p-8">
            <h3 className="text-lg font-bold mb-4 text-center text-muted-foreground">
              The Really Small Print That Nobody Reads But Lawyers Make Us Include
            </h3>
            <div className="text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p>
                Feel-A-Mattress™ is a satirical technology demonstration and should not be attempted by humans, 
                animals, or sentient AI. Any resemblance to actual mattress-feeling technology is purely coincidental 
                and probably impossible given current understanding of physics.
              </p>
              <p>
                HyperSense™, LazyGPT™, SleepGAN™, AI Comfort Predictor™, and ReviewSynth™ are fictional technologies 
                that exist only in the realm of comedic imagination. Attempting to feel mattresses through screens 
                may result in disappointment, confusion, and awkward explanations to tech support.
              </p>
              <p>
                Side effects may include: questioning the nature of reality, an irresistible urge to touch every 
                screen you encounter, disappointed family members, confused pets, and strongly worded letters from 
                the International Association of Actual Mattress Retailers.
              </p>
              <p>
                Feel-A-Mattress™ is not responsible for: broken devices, injured faces, existential crises, 
                spontaneous laughter, loss of faith in e-commerce, or the sudden realization that you've been 
                reading fake disclaimers for way too long.
              </p>
              <p>
                By reading this disclaimer, you acknowledge that Feel-A-Mattress™ is a work of satirical fiction 
                and that you promise not to actually try to feel mattresses through your screen, no matter how 
                convincing our fake technology sounds.
              </p>
              <p className="font-semibold text-warning">
                Seriously though, don't press your face into your screen. That's not how computers work.
              </p>
            </div>
          </div>
        </div>

        {/* Final Warning */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/20 border border-destructive rounded-full">
            <AlertTriangle className="h-5 w-5 text-destructive animate-pulse" />
            <span className="text-sm font-bold text-destructive">
              THIS IS A PARODY WEBSITE - DO NOT ATTEMPT
            </span>
            <AlertTriangle className="h-5 w-5 text-destructive animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;