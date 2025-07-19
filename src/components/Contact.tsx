import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Werkstattstraße 123', '1234 Wien, Österreich'],
      action: () => window.open('https://maps.google.com?q=Werkstattstraße+123+Wien', '_blank')
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+43 123 456 789', 'Mo-Fr 8:00-18:00'],
      action: () => window.location.href = 'tel:+43123456789'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: ['info@spacemotors.at', 'Antwort binnen 24h'],
      action: () => window.location.href = 'mailto:info@spacemotors.at'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: ['Mo-Fr: 08:00-18:00', 'Sa: 08:00-12:00', 'So: Geschlossen'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-glow rounded-full px-4 py-2 text-sm border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-space-yellow" />
            <span className="text-space-yellow font-medium">Kontakt & Standort</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-space-yellow">Besuchen Sie</span>
            <br />
            <span className="text-foreground">Space Motors</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finden Sie uns im Herzen von Wien. Wir freuen uns auf Ihren Besuch 
            in unserer modernen Werkstatt und unserem Fahrzeugzentrum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-space-cyan/40 transition-all duration-300 group ${
                    info.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-glow group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-space-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-space-cyan transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-background/10 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-space-cyan">
                Schnellkontakt
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground h-12"
                  onClick={() => window.location.href = 'tel:+43123456789'}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-space-yellow text-space-yellow hover:bg-space-yellow hover:text-primary-foreground h-12"
                  onClick={() => window.open('https://maps.google.com?q=Werkstattstraße+123+Wien', '_blank')}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Route planen
                </Button>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-space-yellow">
                Anfahrt & Parken
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Direkt neben der U-Bahn Station Werkstattplatz</p>
                <p>• Kostenlose Parkplätze für Kunden verfügbar</p>
                <p>• Öffentliche Verkehrsmittel: U3, Bus 15A</p>
                <p>• Barrierefreier Zugang zur Werkstatt</p>
              </div>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-space-cyan">
                Unser Standort
              </h3>
              
              {/* Embedded Map Placeholder */}
              <div className="aspect-video bg-gradient-glow rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-space-cyan/20 to-space-yellow/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="h-16 w-16 text-space-cyan mx-auto mb-4 opacity-80" />
                  <p className="text-sm text-muted-foreground">
                    Interaktive Karte wird geladen...
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Werkstattstraße 123, 1234 Wien
                  </p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground"
                onClick={() => window.open('https://maps.google.com?q=Werkstattstraße+123+Wien', '_blank')}
              >
                <Navigation className="mr-2 h-4 w-4" />
                In Google Maps öffnen
              </Button>
            </Card>

            {/* Business Hours Detail */}
            <Card className="p-6 bg-background/10 backdrop-blur-sm border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-space-yellow">
                Detaillierte Öffnungszeiten
              </h4>
              <div className="space-y-3">
                {[
                  { day: 'Montag - Freitag', hours: '08:00 - 18:00', note: 'Werkstatt & Verkauf' },
                  { day: 'Samstag', hours: '08:00 - 12:00', note: 'Nur Notfälle' },
                  { day: 'Sonntag', hours: 'Geschlossen', note: '24h Abschleppdienst' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/20 last:border-b-0">
                    <div>
                      <span className="font-medium text-sm">{schedule.day}</span>
                      <p className="text-xs text-muted-foreground">{schedule.note}</p>
                    </div>
                    <span className="text-sm text-space-cyan font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;