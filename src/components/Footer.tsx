import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaceMotorsLogo from '@/assets/space-motors-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Pickerl-Überprüfung',
        'Ölwechsel & Wartung',
        'Reifenservice',
        'Bremsenreparatur',
        'Klimaservice',
        'Fahrzeugdiagnose'
      ]
    },
    {
      title: 'Fahrzeuge',
      links: [
        'AutoScout24 Angebote',
        'Fahrzeugankauf',
        'Inzahlungnahme',
        'Finanzierung',
        'Garantie',
        'Fahrzeugbewertung'
      ]
    },
    {
      title: 'Unternehmen',
      links: [
        'Über uns',
        'Unser Team',
        'Karriere',
        'Kundenbewertungen',
        'Partnerschaften',
        'Zertifikate'
      ]
    }
  ];

  return (
    <footer className="bg-space-black border-t border-border/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={spaceMotorsLogo} 
                alt="Space Motors Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-space-cyan">SPACE</span>
                  <span className="text-space-yellow ml-1">MOTORS</span>
                </h3>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ihre professionelle Autowerkstatt und Ihr vertrauensvoller Partner für 
              Fahrzeugverkauf in Wels. Modernste Technik, faire Preise, erstklassiger Service.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-space-cyan flex-shrink-0" />
                <span className="text-muted-foreground">+43 664 9103790</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-space-yellow flex-shrink-0" />
                <span className="text-muted-foreground">office@spacemotors.at</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-space-cyan flex-shrink-0" />
                <span className="text-muted-foreground">Europastraße 80, 4060 Wels</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground text-sm hover:text-space-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Opening Hours Card */}
        <div className="mt-12 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-space-yellow" />
                <h4 className="font-semibold text-lg">Öffnungszeiten</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag - Freitag:</span>
                  <span className="text-space-cyan font-medium">08:30 - 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samstag:</span>
                  <span className="text-space-cyan font-medium">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag:</span>
                  <span className="text-muted-foreground">Geschlossen</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="border-space-yellow text-space-yellow hover:bg-space-yellow hover:text-primary-foreground"
                onClick={() => window.open('https://www.autoscout24.at/haendler/space-motors-gmbh', '_blank')}
              >
                Fahrzeuge ansehen
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/20 bg-space-black/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Space Motors. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/impressum" 
                className="text-muted-foreground hover:text-space-cyan transition-colors"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;