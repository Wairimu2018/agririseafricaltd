import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import ConsultationForm from '@/components/ConsultationForm';
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
      <div id="consultation" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ConsultationForm />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
