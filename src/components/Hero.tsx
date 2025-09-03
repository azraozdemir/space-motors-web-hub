import { ArrowRight, Shield, Wrench, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import workshopHero from '../assets/workshop-hero.jpg';

const Hero = () => {
  const features = [
    {
      icon: Shield,
      title: '§57a Pickerl',
      description: 'Offizielle Überprüfung'
    },
    {
      icon: Wrench,
      title: 'Werkstatt-Service',
      description: 'Alle Reparaturen'
    },
    {
      icon: Car,
      title: 'Fahrzeugverkauf',
      description: 'Geprüfte Fahrzeuge'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={workshopHero} 
          alt="Space Motors Werkstatt" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-space-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-space-yellow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-glow rounded-full px-4 py-2 text-sm border border-primary/20">
                <span className="w-2 h-2 bg-space-cyan rounded-full animate-pulse"></span>
                <span className="text-space-cyan font-medium">Premium Autowerkstatt & Handel</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-space-cyan">SPACE</span>
                <br />
                <span className="text-space-yellow">MOTORS</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Ihre professionelle Autowerkstatt und Ihr vertrauensvoller Partner für 
                Fahrzeugverkauf in modernster Ausstattung.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4" >
              <a href="https://www.autoscout24.at/haendler/space-motors-gmbh">
              <Button
                variant="outline"
                size="lg"
                className="border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground"
              >
                Fahrzeuge ansehen
              </Button>
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-glow">
                      <feature.icon className="h-6 w-6 text-space-cyan group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300">
                <div className="text-3xl font-bold text-space-cyan mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </Card>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-yellow/20 hover:border-space-yellow/40 transition-all duration-300">
                <div className="text-3xl font-bold text-space-yellow mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </Card>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300">
                <div className="text-3xl font-bold text-space-cyan mb-2">9h</div>
                <div className="text-sm text-muted-foreground">Service-Hotline</div>
              </Card>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-yellow/20 hover:border-space-yellow/40 transition-all duration-300">
                <div className="text-3xl font-bold text-space-yellow mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Qualitätsgarantie</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;