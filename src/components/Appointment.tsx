import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const GoogleReviews = () => {
  // Beispielhafte Rezensionen
  const reviews = [
    {
      name: 'Canan Y.',
      rating: 5,
      text: 'Hatte Autopanne, wurde sofort abgeschleppt und gleich repariert. Schnell und günstig, sehr gutes Personal und toller Chef',
    },
    {
      name: 'Cihan A.',
      rating: 5,
      text: 'Hervorragendes Preis-Leistungs-Verhältnis, äußerst freundliches Team. Die Serviceleistungen lassen keine Wünsche offen',
    },
    {
      name: 'Azra Ö.',
      rating: 4,
      text: 'Wow, ich bin absolut begeistert! 😍 Heute war ich bei einer Werkstätte, weil mein Auto ein paar Macken hatte, und ......',
    },
  ];

  return (
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-space-cyan">Google</span>
              <br />
              <span className="text-foreground">Rezensionen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere Kunden über Space Motors – echte Erfahrungen direkt von Google.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Warum Space Motors? */}
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-space-yellow">
                Warum Space Motors?
              </h4>
              <div className="space-y-3">
                {[
                  'Modernste Diagnosegeräte',
                  'Erfahrene Mechaniker',
                  'Faire und transparente Preise',
                  'Originalteile und Qualitätsersatzteile',
                  'Schnelle Terminvergabe',
                ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-space-cyan flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                ))}
              </div>
            </Card>

            {/* Google Reviews Übersicht */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                  <Card key={index} className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-space-cyan font-semibold">
                        {'⭐'.repeat(review.rating)}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </Card>
              ))}

              <div className="text-center mt-4">
                <a
                    href="https://www.google.com/search?sa=X&sca_esv=452a92eb2c2ade68&rlz=1C1LRNT_deAT1041AT1042&biw=1536&bih=695&tbm=lcl&sxsrf=AE3TifNl17NS1kHfBW4LntUlOHzChwxCtg:1756924420779&q=Space%20Motors%20GmbH%20Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDMwNzE3NDcEMkwMLU1MjSyNNzAyvmKUDS5ITE5V8M0vyS8qVnDPTfJQCEqtSs0rzszPS81bxIpfHgAmZKeAWwAAAA&rldimm=16074717116041945293&hl=de-AT&ved=0CAwQ5foLahcKEwiQw5bHnb2PAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJSHI3SzJsdXRHLTFnRRAB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-space-cyan font-medium underline hover:text-space-yellow"
                >
                  Alle Google-Bewertungen ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default GoogleReviews;
