import { ArrowLeft, Building2, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-space-cyan hover:bg-space-cyan/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Button>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-space-cyan">Impressum</span>
            </h1>
            <p className="text-muted-foreground">
              Rechtliche Informationen gemäß §5 E-Commerce Gesetz
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="h-5 w-5 text-space-cyan" />
                    <h2 className="text-xl font-semibold">Firmeninformationen</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Firmenname:</strong> Space Motors GmbH</p>
                    <p><strong>Adresse:</strong> Werkstattstraße 123, 1234 Wien, Österreich</p>
                    <p><strong>Firmenbuchnummer:</strong> FN 123456a</p>
                    <p><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
                    <p><strong>UID-Nummer:</strong> ATU12345678</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="h-5 w-5 text-space-yellow" />
                    <h2 className="text-xl font-semibold">Geschäftsführung</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Geschäftsführer:</strong> Max Mustermann</p>
                    <p><strong>Vertretungsberechtigt:</strong> Einzelvertretung</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Phone className="h-5 w-5 text-space-cyan" />
                    <h2 className="text-xl font-semibold">Kontaktinformationen</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Telefon:</strong> +43 123 456 789</p>
                    <p><strong>E-Mail:</strong> info@spacemotors.at</p>
                    <p><strong>Website:</strong> www.spacemotors.at</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="h-5 w-5 text-space-yellow" />
                    <h2 className="text-xl font-semibold">Zuständige Aufsichtsbehörde</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Gewerbeordnung:</strong> www.ris.bka.gv.at</p>
                    <p><strong>Bezirkshauptmannschaft:</strong> Wien</p>
                    <p><strong>Berufsbezeichnung:</strong> Kraftfahrzeugtechnik</p>
                    <p><strong>Verleihungsstaat:</strong> Österreich</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-dark border-border/50">
            <h2 className="text-xl font-semibold mb-4 text-space-cyan">
              Haftungsausschluss
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene 
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter 
                der Verpflichtung, übermittelte oder gespeicherte fremde Informationen 
                zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
            <h2 className="text-xl font-semibold mb-4 text-space-yellow">
              Urheberrecht
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen 
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, 
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </Card>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString('de-AT')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;