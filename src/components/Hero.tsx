import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
// import { ArrowRight, ChevronDown } from "lucide-react";
import { ArrowRight, ChevronDown} from 'lucide-react';
import aerialHeroImage from '@/assets/aerial-farm-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aerialHeroImage})` }}
        > */}
        <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-drone-pan"
  style={{ backgroundImage: `url(${aerialHeroImage})` }}
      >

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 animate-fade-in stagger-1">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-float"></div>
                Driven
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 animate-fade-in stagger-2">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-float"></div>
                Rooted
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 animate-fade-in stagger-3">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-float"></div>
                Impactful
              </Badge>
            </div>

            {/* Main Text */}
            <div className="space-y-6 animate-fade-in stagger-4">
              <p className="text-lg leading-relaxed">
                Through sustainable farming and smart collaboration, we grow more than crops — we grow impact.
              </p>
              
              <Button variant="Hero" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover-lift">
                Start growing with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white space-y-8 animate-slide-in-right">
            <div className="space-y-4 animate-fade-in stagger-5">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Redefining agriculture at a global scale
              </h1>
              
              <div className="flex items-center space-x-2 text-sm opacity-80 animate-fade-in stagger-6">
                <span>35.6895° N, 139.6917° E</span>
              </div>
            </div>

            <Button variant="Hero" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover-lift animate-fade-in stagger-6">
              Start growing with us
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
};
export default Hero;