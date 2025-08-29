import { useState } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaceMotorsLogo from '../assets/space-motors-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Werkstatt', href: '#services' },
    { name: 'Fahrzeuge', href: '#vehicles' },
    { name: 'Termin', href: '#appointment' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={spaceMotorsLogo} 
              alt="Space Motors Logo" 
              className="h-12 w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">
                <span className="text-space-cyan">SPACE</span>
                <span className="text-space-yellow ml-1">MOTORS</span>
              </h1>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone size={16} className="text-space-cyan" />
              <span>+43 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock size={16} className="text-space-yellow" />
              <span>Mo-Fr 8:00-18:00</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Button variant="default" className="hidden lg:flex bg-gradient-primary text-primary-foreground hover:shadow-cyan">
            Termin vereinbaren
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone size={16} className="text-space-cyan" />
                  <span>+43 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Clock size={16} className="text-space-yellow" />
                  <span>Mo-Fr 8:00-18:00</span>
                </div>
                <Button variant="default" className="w-full bg-gradient-primary text-primary-foreground">
                  Termin vereinbaren
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;