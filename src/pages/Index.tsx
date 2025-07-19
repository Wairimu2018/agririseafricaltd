import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Solutions />
      <Contact />
    </div>
  );
};

export default Index;
