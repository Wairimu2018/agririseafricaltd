import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Pioneering cutting-edge agricultural technology solutions that transform traditional farming practices."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      description: "Committed to developing eco-friendly solutions that protect our planet for future generations."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community",
      description: "Supporting farmers worldwide with accessible technology and ongoing education and support."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Delivering the highest quality products and services that exceed our customers' expectations."
    }
  ];

  const team = [
    {
      name: "Dr. .....",
      role: "CEO & Founder",
      bio: "Agricultural engineer with 15+ years developing sustainable farming solutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael......",
      role: "CTO",
      bio: "Former Google engineer specializing in IoT and machine learning applications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr.....",
      role: "Head of Research",
      bio: "PhD in Plant Biology, leading our agricultural research and development initiatives.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              About AgriRise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforming Agriculture
              <span className="block text-primary">Through Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2025, AgriRise has been at the forefront of agricultural technology, 
              helping farmers worldwide increase productivity while promoting sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower farmers with intelligent technology solutions that increase crop yields, 
                reduce environmental impact, and create sustainable food systems for a growing global population.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that technology should be accessible, practical, and designed with the farmer's 
                real-world challenges in mind. Every solution we develop is tested in actual farming conditions.
              </p>
              <Button variant="nature" size="lg">
                Learn More About Our Impact
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Farms Served</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-harvest/10 to-earth/20 rounded-xl">
                <div className="text-3xl font-bold text-harvest mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-earth/10 to-sky/20 rounded-xl">
                <div className="text-3xl font-bold text-earth mb-2">15M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-sky/10 to-primary/20 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to agricultural innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts combines decades of agricultural experience with cutting-edge technology expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
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
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking to optimize your operations or a partner interested in 
            collaborating on sustainable agriculture solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg">
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Career Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;