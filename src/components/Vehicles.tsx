import {ExternalLink, Star, Calendar, Gauge, Fuel, Phone} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Vehicles = () => {
  return (
    <section id="vehicles" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-glow rounded-full px-4 py-2 text-sm border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-space-yellow" />
            <span className="text-space-yellow font-medium">Fahrzeugverkauf</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-space-yellow">Geprüfte</span>
            <br />
            <span className="text-foreground">Qualitätsfahrzeuge</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie unsere handverlesene Auswahl an geprüften Gebrauchtfahrzeugen. 
            Jedes Fahrzeug wird von unseren Experten sorgfältig inspiziert und aufbereitet.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300 text-center group">
            <div className="p-3 rounded-lg bg-gradient-glow inline-flex mb-4">
              <Star className="h-8 w-8 text-space-cyan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Qualitätsgarantie</h3>
            <p className="text-muted-foreground text-sm">
              Alle Fahrzeuge werden von unseren Mechanikern geprüft und kommen mit Garantie
            </p>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-yellow/20 hover:border-space-yellow/40 transition-all duration-300 text-center group">
            <div className="p-3 rounded-lg bg-gradient-glow inline-flex mb-4">
              <Calendar className="h-8 w-8 text-space-yellow group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Frisches Pickerl</h3>
            <p className="text-muted-foreground text-sm">
              Alle Fahrzeuge kommen mit gültiger §57a-Überprüfung
            </p>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300 text-center group">
            <div className="p-3 rounded-lg bg-gradient-glow inline-flex mb-4">
              <Fuel className="h-8 w-8 text-space-cyan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Faire Preise</h3>
            <p className="text-muted-foreground text-sm">
              Transparente Preisgestaltung ohne versteckte Kosten
            </p>
          </Card>
        </div>

        {/* AutoScout Link Section */}
        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-space-cyan">Unsere aktuellen</span>
                <br />
                <span className="text-space-yellow">Fahrzeugangebote</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Besuchen Sie unser AutoScout24-Profil und entdecken Sie unsere 
                komplette Fahrzeugauswahl mit detaillierten Informationen, Bildern und Preisen.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 px-4 sm:px-0">
              <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-primary text-primary-foreground hover:shadow-cyan group text-lg px-8 py-4"
                onClick={() => window.open('https://www.autoscout24.at/haendler/space-motors-gmbh', '_blank')}
              >
                Alle Fahrzeuge auf AutoScout24 ansehen
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <p>
                  Oder rufen Sie uns an: 
                  <span className="text-space-cyan font-semibold ml-1">+43 664 9103790</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
            <h4 className="text-xl font-semibold mb-4 text-space-cyan">
              Fahrzeugankauf
            </h4>
            <p className="text-muted-foreground mb-4">
              Sie möchten Ihr Fahrzeug verkaufen? Wir kaufen Fahrzeuge aller Marken zu fairen Preisen an.
            </p>
            <Button
                variant="outline"
                className="border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground"
                onClick={() => window.location.href = 'tel:+436649103790'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Jetzt anrufen
            </Button>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
            <h4 className="text-xl font-semibold mb-4 text-space-yellow">
              Inzahlungnahme
            </h4>
            <p className="text-muted-foreground mb-4">
              Nutzen Sie Ihr altes Fahrzeug als Anzahlung für Ihren neuen Traumwagen.
            </p>
            <Button
                variant="outline"
                className="border-space-yellow text-space-yellow hover:bg-space-yellow hover:text-primary-foreground"
                onClick={() => window.location.href = 'tel:+436649103790'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Jetzt anrufen
            </Button>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
          <h4 className="text-x1 font-smibold mb-4 text-space-white">
              Werksatt
          </h4>
          <p className="text-muted-forderground mb-4">Nutzen Sie unsere Werkstatt Services wie § 57 Überprüfung und Reperatur. </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;