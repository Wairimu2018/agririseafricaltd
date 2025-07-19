import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  Smartphone, 
  Gauge, 
  Brain, 
  Leaf, 
  ArrowRight 
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Precision Farming Tools",
      description: "Advanced sensors and IoT devices for real-time monitoring of soil conditions, weather patterns, and crop health.",
      features: ["Soil moisture sensors", "Weather monitoring", "GPS-guided equipment"],
      color: "from-primary to-primary-light"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent-foreground" />,
      title: "Farm Management Software",
      description: "Comprehensive platform to manage operations, track resources, and optimize farm productivity from anywhere.",
      features: ["Resource planning", "Inventory management", "Mobile accessibility"],
      color: "from-accent-foreground to-primary"
    },
    {
      icon: <Cpu className="w-8 h-8 text-earth" />,
      title: "Soil & Weather Monitoring",
      description: "24/7 environmental monitoring with predictive analytics to help you make informed farming decisions.",
      features: ["Real-time alerts", "Historical data", "Predictive insights"],
      color: "from-earth to-harvest"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary-light" />,
      title: "AI & Data Analytics",
      description: "Machine learning algorithms that analyze your farm data to provide actionable insights and recommendations.",
      features: ["Yield prediction", "Disease detection", "Optimization algorithms"],
      color: "from-primary-light to-sky"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainable AgTech",
      description: "Eco-friendly solutions that reduce environmental impact while maximizing productivity and profitability.",
      features: ["Carbon footprint tracking", "Water conservation", "Organic farming support"],
      color: "from-primary to-accent-foreground"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Technology for
            <span className="block text-primary">Modern Agriculture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of agricultural technology solutions designed to help farmers 
            increase productivity, reduce costs, and build sustainable operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light shadow-lg">
            Explore All Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;