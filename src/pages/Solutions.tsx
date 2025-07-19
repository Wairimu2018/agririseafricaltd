import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Smartphone, 
  Gauge, 
  Brain, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Sun,
  Droplets
} from 'lucide-react';
import precisionImage from '@/assets/precision-farming.jpg';
import solarImage from '@/assets/solar-irrigation.jpg';

const Solutions = () => {
  const solutions = [
    {
      icon: <Sun className="w-8 h-8 text-harvest" />,
      title: "Solar Smart Irrigation",
      description: "Solar-powered irrigation systems with AI-driven water management, reducing energy costs by 80% while optimizing crop hydration.",
      features: ["Solar panel integration", "Smart water sensors", "Automated scheduling", "Weather-based adjustments", "Remote monitoring"],
      benefits: ["80% energy savings", "40% water conservation", "Zero carbon footprint", "24/7 operation"],
      price: "Starting at $349/month",
      popular: true
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Precision Farming Tools",
      description: "Advanced sensors and IoT devices for real-time monitoring of soil conditions, weather patterns, and crop health.",
      features: ["Soil moisture sensors", "Weather monitoring stations", "GPS-guided equipment", "Crop health imaging"],
      benefits: ["30% water savings", "25% yield increase", "Real-time alerts"],
      price: "Starting at $299/month",
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Farm Management Software",
      description: "Comprehensive platform to manage operations, track resources, and optimize farm productivity from anywhere.",
      features: ["Resource planning", "Inventory management", "Mobile accessibility", "Team collaboration"],
      benefits: ["50% time savings", "Improved efficiency", "Cost tracking"],
      price: "Starting at $199/month",
      popular: true
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Soil & Weather Monitoring",
      description: "24/7 environmental monitoring with predictive analytics to help you make informed farming decisions.",
      features: ["Real-time alerts", "Historical data", "Weather forecasting", "Soil analysis"],
      benefits: ["Prevent crop loss", "Optimize irrigation", "Plan harvests"],
      price: "Starting at $149/month",
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI & Data Analytics",
      description: "Machine learning algorithms that analyze your farm data to provide actionable insights and recommendations.",
      features: ["Yield prediction", "Disease detection", "Optimization algorithms", "Custom reports"],
      benefits: ["Predictive insights", "Early problem detection", "Data-driven decisions"],
      price: "Starting at $399/month",
      popular: false
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainable AgTech",
      description: "Eco-friendly solutions that reduce environmental impact while maximizing productivity and profitability.",
      features: ["Carbon footprint tracking", "Water conservation", "Organic farming support", "Sustainability reporting"],
      benefits: ["Reduce environmental impact", "Meet sustainability goals", "Access green incentives"],
      price: "Starting at $249/month",
      popular: false
    }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6 text-harvest" />, text: "Easy Setup & Integration" },
    { icon: <Shield className="w-6 h-6 text-primary" />, text: "Enterprise-Grade Security" },
    { icon: <TrendingUp className="w-6 h-6 text-earth" />, text: "Proven ROI Results" },
    { icon: <CheckCircle className="w-6 h-6 text-primary-light" />, text: "24/7 Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Smart Technology for
              <span className="block text-primary">Modern Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive suite of agricultural technology solutions designed to help farmers 
              increase productivity, reduce costs, and build sustainable operations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-harvest/10 text-harvest hover:bg-harvest/20">Featured Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Solar Smart Irrigation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Revolutionary solar-powered irrigation systems that combine renewable energy with AI-driven 
                water management to create the most sustainable and cost-effective farming solution.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Sun className="w-5 h-5 text-harvest" />
                  <span className="text-foreground">100% solar-powered operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="w-5 h-5 text-primary" />
                  <span className="text-foreground">AI-optimized water distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">80% reduction in energy costs</span>
                </div>
              </div>
              <Button variant="nature" size="lg">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={solarImage} 
                alt="Solar Smart Irrigation System"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-harvest/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Solution Suite
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of specialized solutions or combine multiple tools 
              for comprehensive farm management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 relative ${
                  solution.popular ? 'border-primary/50 shadow-lg' : ''
                }`}
              >
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-harvest text-primary hover:bg-harvest/90">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-4">{solution.price}</div>
                    <Button 
                      variant={solution.popular ? "default" : "outline"}
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have increased their yields and reduced costs with our technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;