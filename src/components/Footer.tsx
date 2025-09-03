import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaceMotorsLogo from '@/assets/space-motors-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-space-black border-t border-border/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={spaceMotorsLogo} alt="Space Motors Logo" className="h-12 w-12" />
                <h3 className="text-xl font-bold">
                  <span className="text-space-cyan">SPACE</span>
                  <span className="text-space-yellow ml-1">MOTORS</span>
                </h3>
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

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pickerl-Überprüfung</li>
                <li>Ölwechsel & Wartung</li>
                <li>Reifenservice</li>
                <li>Bremsenreparatur</li>
                <li>Klimaservice</li>
                <li>Fahrzeugdiagnose</li>
              </ul>
            </div>

            {/* Fahrzeuge */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Fahrzeuge</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Fahrzeugankauf</li>
                <li>Inzahlungnahme</li>
                <li>Finanzierung</li>
                <li>Garantie</li>
                <li>Fahrzeugbewertung</li>
                <li>Probefahrt vereinbaren</li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Unternehmen</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/impressum" className="hover:text-space-cyan transition-colors text-muted-foreground">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="mailto:office@spacemotors.at"
                     className="hover:text-space-cyan transition-colors text-muted-foreground">
                    E-Mail
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/spacemotors.at" target="_blank"
                     className="hover:text-space-cyan transition-colors text-muted-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/search?sca_esv=518de7ca735d1bf8&biw=1536&bih=695&sxsrf=AE3TifOa-3ckWifVjlgkxJay_QAKJChViw:1756942573079&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4k5L7CXjuquPH3-nsIQF6h2HvabqbquGvn8GL6iZU4BOb5RYJmmCAxWrI4DB4--NMKjbr_MtXZXf58DvupF2n40wZrSK55TaLcKTmQxXVpMwMcRSA%3D%3D&q=Space+Motors+GmbH+Rezensionen&sa=X&ved=2ahUKEwif99WP4b2PAxW_HBAIHUcIJqEQ0bkNegQILBAD" target="_blank"
                     className="hover:text-space-cyan transition-colors text-muted-foreground">
                    Kundenbewertungen
                  </a>
                </li>
                <li>
                  <a href="https://www.autoscout24.at/haendler/space-motors-gmbh" target="_blank"
                     className="hover:text-space-cyan transition-colors text-muted-foreground">
                    AutoScout24 Angebote <ExternalLink className="inline h-4 w-4 ml-1"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.willhaben.at/iad/haendler/space-motors-gmbh" target="_blank"
                     className="hover:text-space-cyan transition-colors text-muted-foreground">
                    Willhaben Angebote <ExternalLink className="inline h-4 w-4 ml-1"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Öffnungszeiten Card */}
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
                <a href="/impressum" className="text-muted-foreground hover:text-space-cyan transition-colors">
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
