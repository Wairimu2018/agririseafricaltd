import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import SolarSmartIrrigation from "./pages/solutions/SolarSmartIrrigation";
import PrecisionFarming from "./pages/solutions/PrecisionFarming";
import FarmManagement from "./pages/solutions/FarmManagement";
import SoilWeatherMonitoring from "./pages/solutions/SoilandWeatherMonitoring";
import AIDataAnalytics from "./pages/solutions/AIandDataAnalytics";
import SustainableAgTech from "./pages/solutions/SustainableAgTech";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions/solar-smart-irrigation" element={<SolarSmartIrrigation />} />
          <Route path="/solutions/precision-farming" element={<PrecisionFarming />} />
          <Route path="/solutions/farm-management" element={<FarmManagement />} />
          <Route path="/solutions/soil-weather-monitoring" element={<SoilWeatherMonitoring />} />
          <Route path="/solutions/ai-data-analytics" element={<AIDataAnalytics />} />
          <Route path="/solutions/sustainable-agtech" element={<SustainableAgTech />} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;