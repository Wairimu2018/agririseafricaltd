import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      details: "info@agririse.org",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      details: "+254 720 355 380",
      subtext: "Mon-Fri, 8am-6pm EAT"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      details: "Buffallo Mall, Naivasha",
      subtext: "Kenya"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      details: "Monday - Friday",
      subtext: "8:00 AM - 6:00 PM EAT"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your farm? Contact us for a free consultation and let's discuss how we can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtext}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <ConsultationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
