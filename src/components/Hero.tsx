import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              🌱 Feeding the Future with Smart Farming
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Revolutionizing
            <span className="block text-harvest">Agriculture</span>
            <span className="block">with Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Empower your farm with cutting-edge IoT sensors, AI-driven analytics, and sustainable solutions. 
            Increase yields, reduce costs, and build a greener future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-harvest text-primary hover:bg-harvest/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md">
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-harvest">500+</div>
              <div className="text-sm text-primary-foreground/80">Farms Transformed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-harvest">30%</div>
              <div className="text-sm text-primary-foreground/80">Yield Increase</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-harvest">50M+</div>
              <div className="text-sm text-primary-foreground/80">Data Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;