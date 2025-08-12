import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'SolarPump Pro X1',
      category: 'solar-pumps',
      price: '$2,499',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      reviews: 127,
      description: 'High-efficiency solar water pump system for irrigation up to 5 acres',
      features: ['50% more efficient than standard pumps', 'Remote monitoring', '10-year warranty'],
      specifications: {
        'Flow Rate': '50 GPM',
        'Max Head': '200 ft',
        'Solar Panel': '1.5kW',
        'Coverage': 'Up to 5 acres'
      },
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'SolarPump Compact S2',
      category: 'solar-pumps',
      price: '$1,299',
      image: '/api/placeholder/400/300',
      rating: 4.7,
      reviews: 89,
      description: 'Compact solar pump perfect for small farms and gardens',
      features: ['Easy installation', 'Weather resistant', '5-year warranty'],
      specifications: {
        'Flow Rate': '25 GPM',
        'Max Head': '120 ft',
        'Solar Panel': '750W',
        'Coverage': 'Up to 2 acres'
      },
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: 'SmartSoil Monitor Pro',
      category: 'monitoring',
      price: '$399',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      reviews: 203,
      description: 'Advanced soil moisture and nutrient monitoring system',
      features: ['Real-time data', 'Mobile app integration', 'Multi-sensor array'],
      specifications: {
        'Sensors': '6 soil sensors',
        'Range': '1000ft wireless',
        'Battery': '2-year life',
        'Connectivity': 'WiFi + Cellular'
      },
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: 'WeatherStation Elite',
      category: 'monitoring',
      price: '$799',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      reviews: 156,
      description: 'Professional weather monitoring station for precision agriculture',
      features: ['Hyperlocal forecasting', 'Disease pressure alerts', 'API integration'],
      specifications: {
        'Sensors': '12 weather parameters',
        'Accuracy': '±0.1°C temperature',
        'Range': '10 mile radius',
        'Data Storage': '5 years cloud storage'
      },
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: 'AutoIrrigate Controller',
      category: 'irrigation',
      price: '$599',
      image: '/api/placeholder/400/300',
      rating: 4.6,
      reviews: 94,
      description: 'Smart irrigation controller with AI-powered scheduling',
      features: ['AI scheduling', '16-zone control', 'Water usage analytics'],
      specifications: {
        'Zones': '16 zones',
        'Flow Monitoring': 'Real-time',
        'Connectivity': 'WiFi + Bluetooth',
        'Water Savings': 'Up to 40%'
      },
      inStock: false,
      featured: false
    },
    {
      id: 6,
      name: 'DroneScout Agricultural Drone',
      category: 'precision-tech',
      price: '$12,999',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      reviews: 67,
      description: 'Professional agricultural drone for crop monitoring and spraying',
      features: ['4K multispectral camera', '10kg payload capacity', 'Autonomous flight'],
      specifications: {
        'Flight Time': '45 minutes',
        'Coverage': '100 acres/hour',
        'Payload': '10kg spraying system',
        'Camera': '4K + multispectral'
      },
      inStock: true,
      featured: true
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
              Agricultural Technology Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional-grade equipment to modernize your farming operations with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="nature">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Shop All Products
              </Button>
              <Button size="lg" variant="outline">
                <Info className="mr-2 w-5 h-5" />
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
          <p className="text-muted-foreground text-center mb-12">Our most popular and innovative solutions</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-t-lg flex items-center justify-center">
                    <Droplets className="w-16 h-16 text-primary opacity-60" />
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
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button variant={product.inStock ? "nature" : "outline"} disabled={!product.inStock}>
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
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
          <h2 className="text-3xl font-bold text-center mb-2">Shop by Category</h2>
          <p className="text-muted-foreground text-center mb-12">Find the right equipment for your specific needs</p>
          
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
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-t-lg flex items-center justify-center relative">
                    <Droplets className="w-16 h-16 text-primary opacity-60" />
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
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                      <Button variant={product.inStock ? "nature" : "outline"} size="sm" disabled={!product.inStock}>
                        {product.inStock ? 'Add to Cart' : 'Notify Me'}
                      </Button>
                    </div>
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
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our agricultural technology experts are here to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;