import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import ConsultationForm from '@/components/ConsultationForm';
import { 
  Droplets, 
  Zap, 
  Thermometer, 
  Gauge, 
  Wifi, 
  Battery,
  Star,
  ShoppingCart,
  Info
} from 'lucide-react';

// Import product images
import solarPumpImage from '@/assets/Solar_pump.jpg';
import precisionFarmingImage from '@/assets/precision-farming.jpg';
import solarIrrigationImage from '@/assets/solar-irrigation.jpg';
import aerialFarmImage from '@/assets/aerial-farm-hero.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'SolarPump Pro X1',
      category: 'solar-pumps',
      price: '$2,499',
      image: solarPumpImage,
      rating: 4.9,
      reviews: 127,
      description: "Our flagship solar pump that's been a game-changer for medium-sized farms. James from Laikipia says it cut his irrigation costs by 70% while increasing his crop yields.",
      features: [
        'Pays for itself in under 18 months through energy savings',
        'Monitor and control from your smartphone anywhere',
        'Built to last - comes with our industry-leading 10-year warranty',
        'Installs in half the time of traditional pumps'
      ],
      specifications: {
        'Flow Rate': '50 GPM (perfect for 3-5 acre farms)',
        'Max Head': '200 ft (handles deep wells with ease)',
        'Solar Panel': '1.5kW high-efficiency panels included',
        'Coverage': 'Irrigates up to 5 acres efficiently',
        'Installation': 'Professional setup in 1-2 days',
        'Maintenance': 'Self-cleaning system reduces upkeep'
      },
      inStock: true,
      featured: true,
      detailedDescription: "Meet the pump that's revolutionizing farm irrigation. The SolarPump Pro X1 isn't just another water pump - it's your partner in sustainable farming. Designed by farmers, for farmers, this system understands the real challenges you face: rising energy costs, unpredictable weather, and the constant pressure to do more with less. With its smart technology, you'll know exactly how much water you're using and when your crops need it most. Plus, with zero ongoing electricity costs, you'll wonder why you waited so long to make the switch."
    },
    {
      id: 2,
      name: 'SolarPump Compact S2',
      category: 'solar-pumps',
      price: '$1,299',
      image: soilMonitoringImage,
      rating: 4.7,
      reviews: 89,
      description: "Perfect for smaller operations and hobby farms. Maria from Naivasha loves how easy it was to set up for her organic vegetable garden - no electrician needed!",
      features: [
        'Set up in under 2 hours with basic tools',
        'Weatherproof design survives harsh conditions',
        "Quiet operation won't disturb your neighbors",
        '5-year warranty gives you peace of mind'
      ],
      specifications: {
        'Flow Rate': '25 GPM (ideal for gardens and small plots)',
        'Max Head': '120 ft (works with most shallow wells)',
        'Solar Panel': '750W compact panel system',
        'Coverage': 'Perfect for up to 2 acres',
        'Weight': 'Lightweight at just 45 lbs',
        'Setup Time': 'Most customers finish in under 2 hours'
      },
      inStock: true,
      featured: false,
      detailedDescription: "Sometimes the best things come in small packages. The Compact S2 proves that you don't need a massive system to get professional results. Whether you're starting your farming journey or need a reliable backup system, this pump delivers consistent performance without the complexity. It's like having a reliable farmhand that never calls in sick and works for free once you've brought it home."
    },
    {
      id: 3,
      name: 'SmartSoil Monitor Pro',
      category: 'monitoring',
      price: '$399',
      image: precisionFarmingImage,
      rating: 4.8,
      reviews: 203,
      description: "Stop guessing about your soil conditions. This system tells you exactly what's happening underground, 24/7. Corn farmers report 15% yield increases just from better timing their irrigation.",
      features: [
        'Get alerts on your phone before problems start',
        'Works with all major farming apps and systems',
        'Multiple sensors track moisture, nutrients, and pH',
        'Solar powered - set it and forget it'
      ],
      specifications: {
        'Sensors': '6 precision soil sensors (moisture, pH, nutrients)',
        'Range': '1000ft wireless range covers large fields',
        'Battery': '2-year solar battery life',
        'Connectivity': 'WiFi + Cellular backup ensures connection',
        'Data Storage': '5 years of historical data included',
        'Alerts': 'Custom notifications for any condition'
      },
      inStock: true,
      featured: true,
      detailedDescription: "Your soil is trying to tell you something - are you listening? The SmartSoil Monitor Pro translates what's happening beneath the surface into actionable insights you can actually use. No more walking fields with a shovel or playing guessing games with irrigation schedules. This system learns your land and helps you make decisions like the most experienced farmers, even if you're just getting started. It's like having a soil scientist on call 24/7."
    },
    {
      id: 4,
      name: 'WeatherStation Elite',
      category: 'monitoring',
      price: '$799',
      image: aerialFarmImage,
      rating: 4.9,
      reviews: 156,
      description: "Weather can make or break your season. This station gives you hyperlocal forecasts that are often more accurate than the weather service for your specific field conditions.",
      features: [
        'Predicts disease pressure before you see symptoms',
        'Integrates with spray and irrigation systems',
        'Hyperlocal forecasts for your exact location',
        'Tracks microclimate changes across your land'
      ],
      specifications: {
        'Sensors': '12 weather parameters (temp, humidity, wind, rainfall, etc.)',
        'Accuracy': '±0.1°C temperature, ±2% humidity',
        'Range': '10 mile radius coverage for forecasting',
        'Data Storage': '5 years cloud storage included',
        'Updates': 'Real-time data every 60 seconds',
        'Power': 'Solar powered with battery backup'
      },
      inStock: true,
      featured: false,
      detailedDescription: "Mother Nature doesn't send you a memo about her plans, but the WeatherStation Elite comes pretty close. This isn't just another weather station - it's your early warning system for everything from frost to fungus. By understanding the microclimate of your specific fields, you'll know when to spray, when to harvest, and when to hunker down. Many of our customers say it paid for itself in the first season just by helping them avoid one bad spraying decision."
    },
    {
      id: 5,
      name: 'AutoIrrigate Controller',
      category: 'irrigation',
      price: '$599',
      image: solarIrrigationImage,
      rating: 4.6,
      reviews: 94,
      description: "This smart controller learns your crops' needs and waters them perfectly, even when you're not around. Customers typically see 30-40% water savings in the first year.",
      features: [
        'AI learns your crops and adjusts automatically',
        'Controls up to 16 different irrigation zones',
        'Tracks water usage and costs in real-time',
        'Integrates with weather forecasts to skip unnecessary watering'
      ],
      specifications: {
        'Zones': '16 independent irrigation zones',
        'Flow Monitoring': 'Real-time flow and pressure monitoring',
        'Connectivity': 'WiFi + Bluetooth for easy setup',
        'Water Savings': 'Customers average 35% reduction in water use',
        'Installation': 'Replaces most existing controllers directly',
        'App Control': 'Full smartphone control and monitoring'
      },
      inStock: false,
      featured: false,
      detailedDescription: "Imagine having an irrigation expert who knows your fields better than you do, works around the clock, and never makes mistakes. That's the AutoIrrigate Controller. It takes the guesswork out of watering by learning your crops' patterns, watching the weather, and adjusting on the fly. You'll sleep better knowing your crops are getting exactly what they need, when they need it. And your water bill will thank you too."
    },
    {
      id: 6,
      name: 'DroneScout Agricultural Drone',
      category: 'precision-tech',
      price: '$12,999',
      image: aerialFarmImage,
      rating: 4.8,
      reviews: 67,
      description: "See your fields like never before. This professional drone spots problems before they spread, maps your land with incredible detail, and can even handle targeted spraying.",
      features: [
        '4K multispectral camera reveals hidden crop stress',
        'Carries 10kg for precise pesticide application',
        'Flies autonomous missions - no pilot license needed',
        'Processes data automatically into actionable maps'
      ],
      specifications: {
        'Flight Time': '45 minutes per battery (3 batteries included)',
        'Coverage': 'Maps 100 acres per hour',
        'Payload': '10kg precision spraying system',
        'Camera': '4K RGB + multispectral imaging',
        'Autonomy': 'Pre-programmed flight paths',
        'Weather Rating': 'Operates in light rain and 25mph winds'
      },
      inStock: true,
      featured: true,
      detailedDescription: "This isn't just a drone - it's your eyes in the sky and your most efficient farm worker rolled into one. The DroneScout sees problems you'd miss walking the fields, spots pest pressure before it spreads, and can treat specific areas with surgical precision. While other farmers are spending days scouting fields, you'll have detailed maps and treatment plans ready in hours. It's like having a helicopter, a crop scout, and a spray rig all in one incredibly efficient package."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Gauge },
    { id: 'solar-pumps', name: 'Solar Pumps', icon: Droplets },
    { id: 'monitoring', name: 'Monitoring Systems', icon: Thermometer },
    { id: 'irrigation', name: 'Irrigation Control', icon: Zap },
    { id: 'precision-tech', name: 'Precision Tech', icon: Wifi }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-light/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Farm Smarter, Not Harder
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real equipment that real farmers use every day. Each product is tested in the field and backed by people who actually understand agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="nature">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Shop All Products
              </Button>
              <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    <Info className="mr-2 w-5 h-5" />
                    Request Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Request Agricultural Technology Consultation</DialogTitle>
                  </DialogHeader>
                  <ConsultationForm onClose={() => setIsConsultationOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Farmer Favorites</h2>
          <p className="text-muted-foreground text-center mb-12">The products our customers can't stop talking about</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Featured</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={product.inStock ? "nature" : "outline"} 
                      disabled={!product.inStock}
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${product.name} (${product.price}). Can you provide more details about full payment?`;
                        window.open(`https://wa.me/254720355380?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="flex-1"
                    >
                      {product.inStock ? 'Buy Now' : 'Notify Me'}
                    </Button>
                    {product.inStock && (
                      <Button 
                        variant="outline"
                        onClick={() => {
                          const message = `Hi! I'm interested in the ${product.name} (${product.price}) with monthly payment plan. Can you provide installment options?`;
                          window.open(`https://wa.me/254720355380?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className="flex-1"
                      >
                        Pay Monthly
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Find What Works for You</h2>
          <p className="text-muted-foreground text-center mb-12">Every farm is different. Find equipment that fits your operation, your budget, and your goals.</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "nature" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-t-lg overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <Badge variant="destructive" className="absolute top-2 right-2">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{categories.find(c => c.id === product.category)?.name}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  {/* What makes it special */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Why farmers love it:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={product.inStock ? "nature" : "outline"} 
                      size="sm" 
                      disabled={!product.inStock}
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${product.name} (${product.price}). Can you provide more details about full payment?`;
                        window.open(`https://wa.me/254720355380?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="flex-1"
                    >
                      {product.inStock ? 'Buy Now' : 'Notify Me'}
                    </Button>
                    {product.inStock && (
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const message = `Hi! I'm interested in the ${product.name} (${product.price}) with monthly payment plan. Can you provide installment options?`;
                          window.open(`https://wa.me/254720355380?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className="flex-1"
                      >
                        Pay Monthly
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About What's Right for Your Farm?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every operation is unique. Let's talk about your specific needs and find equipment that actually makes sense for your situation.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Talk to a Real Farmer
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              See All Specs & Pricing
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Products;