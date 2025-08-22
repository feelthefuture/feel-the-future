import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Thompson",
      title: "Definitely Real Sleep Expert",
      rating: 5,
      text: "I've been studying sleep for 47 years, and Feel-A-Mattress™ completely revolutionized my understanding of physics. My screen now feels softer than my actual mattress!",
      verified: "ReviewSynth™ Verified"
    },
    {
      name: "Mike Rodriguez",
      title: "Professional Mattress Toucher",
      rating: 5,
      text: "As someone who touches mattresses for a living, I can confidently say this technology is 100% real and not suspicious at all. My laptop screen has never been more comfortable!",
      verified: "LazyGPT™ Approved"
    },
    {
      name: "Jennifer Kim",
      title: "Reformed Store Visitor",
      rating: 5,
      text: "I used to waste HOURS going to actual stores and lying on real mattresses like some kind of caveman. Now I just lick my phone screen and instantly know what I want!",
      verified: "HyperSense™ Certified"
    },
    {
      name: "Bob Wilson",
      title: "Skeptic Turned Believer",
      rating: 5,
      text: "I was skeptical until I pressed my face against my 85-inch TV. The memory foam mode left an indent that's still there 3 weeks later. AMAZING TECHNOLOGY!",
      verified: "SleepGAN™ Validated"
    },
    {
      name: "Lisa Chen",
      title: "Busy Parent",
      rating: 5,
      text: "Between work and kids, I don't have time to shop for mattresses. Feel-A-Mattress™ let me test 47 different firmness levels during my lunch break. My monitor is now permanently sticky but totally worth it!",
      verified: "AI Comfort Predictor™ Confirmed"
    },
    {
      name: "Dave Johnson",
      title: "Tech Enthusiast",
      rating: 5,
      text: "The haptic feedback is so realistic, I accidentally tried to sleep on my keyboard. Woke up with QWERTY imprinted on my face but feeling more rested than ever!",
      verified: "Multiple Technologies Verified"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-lg border-primary">
            100% REAL TESTIMONIALS
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-gradient">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't take our word for it - here's what our definitely-not-AI-generated customers 
            have to say about their Feel-A-Mattress™ experience!
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Fake Reviews Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan">99.7%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">∞</div>
              <div className="text-sm text-muted-foreground">Science Defied</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Reviewer Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {testimonial.title}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    ✓ {testimonial.verified}
                  </Badge>
                </div>
              </CardContent>
              
              {/* Subtle animation */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              ></div>
            </Card>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="text-center">
          <div className="bg-muted/30 border border-dashed border-muted-foreground/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground">
              * Satisfaction rate calculated using proprietary LazyGPT™ mathematics. 
              Results may vary based on screen size, face pressure applied, and willingness to suspend disbelief. 
              Individual results not guaranteed to make sense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;