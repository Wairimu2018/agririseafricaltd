import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Solutions />
      <div id="contact">
        <Contact />
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
