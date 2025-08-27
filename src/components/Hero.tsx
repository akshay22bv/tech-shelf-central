
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-brand-accent mr-2" />
            <span className="text-sm text-foreground-muted">Premium Tech Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block gradient-text">Perfect Laptop</span>
            for Your Needs
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            From gaming powerhouses to ultrabooks for professionals, find your ideal laptop 
            from our curated collection of premium devices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-interactive-primary-hover text-background font-semibold px-8 py-4 rounded-xl shadow-glow"
            >
              Browse Laptops
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border-elevated bg-surface-glass hover:bg-surface-elevated text-foreground px-8 py-4 rounded-xl"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-sm text-foreground-muted">Laptops Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">50K+</div>
              <div className="text-sm text-foreground-muted">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
              <div className="text-sm text-foreground-muted">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
