import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Gauge, Satellite, MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import precisionFarmingImage from '@/assets/precision-farming.jpg';

const PrecisionFarming = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Precision Technology
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Precision Farming Tools
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Advanced sensor networks and IoT devices that provide real-time monitoring of soil conditions, weather patterns, and crop health for data-driven farming decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Satellite className="w-5 h-5 text-earth" />
                <span className="text-sm font-medium">GPS Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-harvest" />
                <span className="text-sm font-medium">Field Mapping</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={precisionFarmingImage} 
              alt="Precision Farming Tools" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Gauge className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Soil Moisture Sensors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Wireless soil moisture sensors that provide real-time data on soil conditions across different field zones.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Satellite className="w-8 h-8 text-earth mb-2" />
              <CardTitle>Weather Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive weather stations that track temperature, humidity, wind speed, and precipitation patterns.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="w-8 h-8 text-harvest mb-2" />
              <CardTitle>GPS-Guided Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Precision guidance systems for tractors and farming equipment to optimize field operations and reduce overlap.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-earth">
            Request Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrecisionFarming;