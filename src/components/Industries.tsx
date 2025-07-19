import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Building2, 
  Globe, 
  GraduationCap,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Smallholder Farmers",
      description: "Affordable, easy-to-use technology solutions designed specifically for small-scale farming operations.",
      benefits: ["Low-cost sensors", "Simple mobile apps", "Community support"],
      stats: "10,000+ farmers served",
      bgGradient: "from-primary/10 to-accent/20"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary-light" />,
      title: "Large-Scale Agribusinesses",
      description: "Enterprise-grade solutions for commercial farms and agricultural corporations seeking maximum efficiency.",
      benefits: ["Scalable infrastructure", "Advanced analytics", "Custom integration"],
      stats: "500+ enterprises",
      bgGradient: "from-primary-light/10 to-harvest/20"
    },
    {
      icon: <Globe className="w-8 h-8 text-earth" />,
      title: "Government & NGOs",
      description: "Policy-driven solutions supporting sustainable agriculture initiatives and food security programs.",
      benefits: ["Policy compliance", "Sustainability metrics", "Grant support"],
      stats: "50+ organizations",
      bgGradient: "from-earth/10 to-sky/20"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent-foreground" />,
      title: "Researchers & Agronomists",
      description: "Research-grade tools and data platforms for agricultural research and precision crop management.",
      benefits: ["Research APIs", "Data export tools", "Academic partnerships"],
      stats: "100+ institutions",
      bgGradient: "from-accent-foreground/10 to-primary/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tailored Solutions for
            <span className="block text-primary">Every Farming Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From small family farms to large agricultural enterprises, our technology adapts to serve diverse 
            agricultural communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-gradient-to-br ${industry.bgGradient} hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-primary text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {industry.stats}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Agricultural Operations?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of farmers and agricultural professionals who trust our technology 
            to optimize their operations and increase sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;