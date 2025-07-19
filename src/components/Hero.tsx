import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ArrowDown } from 'lucide-react';
import aerialHeroImage from '@/assets/aerial-farm-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Aerial Farm View */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aerialHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest-medium/70 to-forest-deep/40"></div>
      </div>

      {/* Content Grid - Inspired by Freshfield */}
      <div className="relative z-10 container mx-auto px-4 h-full min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - Value Props */}
          <div className="space-y-8">
            {/* Tag Line Badges - Inspired by Freshfield's "Driven, Rooted, Impactful" */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-field-gold rounded-sm"></div>
                <span className="text-sm font-medium text-cream tracking-wide uppercase">Driven</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-sage rounded-sm"></div>
                <span className="text-sm font-medium text-cream tracking-wide uppercase">Rooted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-field-gold rounded-sm"></div>
                <span className="text-sm font-medium text-cream tracking-wide uppercase">Impactful</span>
              </div>
            </div>

            {/* Main Message */}
            <div className="max-w-lg">
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                Through sustainable farming and smart collaboration, we grow more than crops — we grow impact.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg" 
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 backdrop-blur-sm text-base px-8 py-3 group"
              >
                Start growing with us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side - Main Headline */}
          <div className="lg:text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-tight">
              Redefining
              <span className="block">agriculture at</span>
              <span className="block">a global scale</span>
            </h1>
            
            {/* Coordinates - Inspired by Freshfield */}
            <div className="mt-8 lg:mt-12">
              <p className="text-cream/60 text-sm tracking-wide font-mono">
                35.6895° N, 139.6917° E
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-cream/80 text-sm tracking-wide">Start growing with us</p>
          <ArrowDown className="w-4 h-4 text-cream/60" />
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;