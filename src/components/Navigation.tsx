import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Updates', path: '/updates' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-forest-deep to-forest-medium p-2.5 rounded-lg shadow-medium">
              {/* <Leaf className="w-6 h-6 text-cream" /> */}

<Link to="/" className="flex items-center space-x-3">
  <img src={logo} alt="AgriRise Logo" className="h-16 w-auto" />
</Link>

            </div>
            <span className="text-xl font-bold text-charcoal tracking-tight">AgriRise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-forest-medium ${
                  isActive(item.path) ? 'text-forest-medium' : 'text-charcoal/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-forest-medium/30 text-forest-medium hover:bg-forest-medium/10 px-6"
              >
                Let's work together
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-forest-medium ${
                    isActive(item.path) ? 'text-forest-medium' : 'text-charcoal/70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-forest-medium/30 text-forest-medium hover:bg-forest-medium/10"
                  >
                    Let's work together
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;