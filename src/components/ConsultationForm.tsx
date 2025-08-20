import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^(\+254|0)[17]\d{8}$/, 'Please enter a valid Kenyan phone number'),
  farmLocation: z.string().min(2, 'Farm location is required'),
  farmSize: z.string().min(1, 'Farm size is required'),
  service: z.string().min(1, 'Please select a service'),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultationFormProps {
  onClose?: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      farmLocation: '',
      farmSize: '',
      service: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      console.log('Form data:', data);
      
      toast({
        title: "Consultation Request Submitted",
        description: "Thank you! We'll contact you within 24 hours to schedule your consultation.",
      });
      
      form.reset();
      onClose?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const products = [
    'SolarPump Pro X1',
    'SolarPump Compact S2',
    'SmartSoil Monitor Pro',
    'WeatherStation Elite',
    'AutoIrrigate Controller',
    'DroneScout Agricultural Drone',
    'Others'
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Request Agricultural Technology Consultation</h2>
        <p className="text-muted-foreground mt-2">
          Get personalized advice from our agricultural technology experts. All fields are required.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Kenya) *</FormLabel>
                  <FormControl>
                    <Input placeholder="+254712345678 or 0712345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="farmLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Farm Location *</FormLabel>
                  <FormControl>
                    <Input placeholder="County, Town/Area" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="farmSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Farm Size *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 5 acres, 10 hectares" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services Required *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product/service you're interested in" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your current farming challenges, specific needs, or any questions you have..."
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1" variant="nature">
              Submit Consultation Request
            </Button>
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ConsultationForm;