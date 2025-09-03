import { 
  Shield, 
  Droplets, 
  Disc, 
  Wind, 
  Zap, 
  Car, 
  Search, 
  Clipboard, 
  Sparkles,
  Wrench
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: '§57a Pickerl-Überprüfung',
      description: 'Offizielle technische Überprüfung Ihres Fahrzeugs nach österreichischen Standards',
      price: 'ab €70',
      popular: true
    },
    {
      icon: Droplets,
      title: 'Ölwechsel & Wartung',
      description: 'Regelmäßiger Ölwechsel und Wartungsservice für optimale Motorleistung',
      price: 'ab €80',
      popular: false
    },
    {
      icon: Disc,
      title: 'Reifenservice',
      description: 'Reifenwechsel, Auswuchten, Reparatur und fachgerechte Lagerung',
      price: 'ab €25',
      popular: false
    },
    {
      icon: Disc,
      title: 'Bremsenreparatur',
      description: 'Bremsbeläge, Bremsscheiben und komplette Bremssystem-Wartung',
      price: 'ab €120',
      popular: false
    },
    {
      icon: Wind,
      title: 'Klimaservice',
      description: 'Klimaanlagen-Wartung, Befüllung und Reparatur für angenehme Fahrten',
      price: 'ab €90',
      popular: true
    },
    {
      icon: Car,
      title: 'Unfallreparaturen',
      description: 'Professionelle Karosserie- und Lackierarbeiten nach Unfällen',
      price: 'auf Anfrage',
      popular: false
    },
    {
      icon: Wrench,
      title: 'Ersatzteilverkauf',
      description: 'Original- und Qualitäts-Ersatzteile für alle gängigen Fahrzeugmarken',
      price: 'variabel',
      popular: false
    },
    {
      icon: Search,
      title: 'Fahrzeugdiagnose',
      description: 'Computergestützte Diagnose und Fehlerbehebung mit modernster Technik',
      price: 'ab €65',
      popular: true
    },
    {
      icon: Clipboard,
      title: 'Inspektion & Service',
      description: 'Komplette Fahrzeuginspektion nach Herstellervorgaben',
      price: 'ab €150',
      popular: false
    },
    {
      icon: Sparkles,
      title: 'Fahrzeugaufbereitung',
      description: 'Professionelle Innen- und Außenreinigung für den perfekten Glanz',
      price: 'ab €60',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-glow rounded-full px-4 py-2 text-sm border border-primary/20 mb-6">
            <Wrench className="w-4 h-4 text-space-cyan" />
            <span className="text-space-cyan font-medium">Werkstatt-Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-space-cyan">Professionelle</span>
            <br />
            <span className="text-foreground">Autowerkstatt-Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der gesetzlichen Überprüfung bis zur kompletten Fahrzeugwartung – 
            wir bieten Ihnen alle Services aus einer Hand mit modernster Technik und erfahrenen Mechanikern.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative p-6 group hover:scale-105 transition-all duration-300 border-border/50 hover:border-space-cyan/40 ${
                service.popular ? 'ring-2 ring-space-yellow/20 bg-gradient-glow' : 'bg-card/50'
              } backdrop-blur-sm`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Beliebt
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${service.popular ? 'bg-space-cyan/20' : 'bg-gradient-glow'} group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6 text-space-cyan" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-space-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-space-yellow font-bold">{service.price}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-space-cyan hover:text-primary-foreground hover:bg-space-cyan"
                    >
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;