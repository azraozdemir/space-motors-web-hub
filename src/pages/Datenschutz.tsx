import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Datenschutz = () => {
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
              <span className="text-space-cyan">Datenschutz</span>
              <span className="text-space-yellow">erklärung</span>
            </h1>
            <p className="text-muted-foreground">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-6 w-6 text-space-cyan" />
              <h2 className="text-2xl font-semibold">Allgemeine Hinweise</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-dark border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <UserCheck className="h-5 w-5 text-space-cyan" />
                <h3 className="text-lg font-semibold">Verantwortliche Stelle</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Space Motors GmbH</strong></p>
                <p>Werkstattstraße 123</p>
                <p>1234 Wien, Österreich</p>
                <p>E-Mail: datenschutz@spacemotors.at</p>
                <p>Telefon: +43 123 456 789</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="h-5 w-5 text-space-yellow" />
                <h3 className="text-lg font-semibold">Datenerfassung</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Automatische Datenerfassung:</strong></p>
                <p>• Server-Log-Dateien</p>
                <p>• Cookies (technisch notwendig)</p>
                <p>• IP-Adresse (anonymisiert)</p>
                <p>• Browserinformationen</p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-2 mb-6">
              <Lock className="h-6 w-6 text-space-cyan" />
              <h2 className="text-2xl font-semibold">Datenverarbeitung im Detail</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-space-yellow">1. Kontaktformular</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Erhobene Daten:</strong> Name, E-Mail, Telefonnummer, Nachricht</p>
                  <p><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Terminvereinbarung</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
                  <p><strong>Speicherdauer:</strong> 3 Jahre nach Abschluss der Geschäftsbeziehung</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-space-cyan">2. Server-Log-Dateien</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Erhobene Daten:</strong> IP-Adresse, Browsertyp, Betriebssystem, Zugriffsdatum</p>
                  <p><strong>Zweck:</strong> Sicherstellung der Systemsicherheit und -stabilität</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
                  <p><strong>Speicherdauer:</strong> 7 Tage</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-space-yellow">3. Cookies</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Verwendung:</strong> Nur technisch notwendige Cookies</p>
                  <p><strong>Zweck:</strong> Funktionsfähigkeit der Website</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
                  <p><strong>Speicherdauer:</strong> Bis zum Ende der Browser-Sitzung</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-dark border-border/50">
            <h2 className="text-2xl font-semibold mb-6 text-space-cyan">
              Ihre Rechte als Betroffener
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-space-yellow">Auskunftsrecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können jederzeit Auskunft über die von uns verarbeiteten Daten verlangen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-yellow">Berichtigungsrecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können die Berichtigung unrichtiger personenbezogener Daten verlangen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-yellow">Löschungsrecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können die Löschung Ihrer Daten verlangen, soweit keine Aufbewahrungspflichten bestehen.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-space-cyan">Einschränkung der Verarbeitung</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-cyan">Datenübertragbarkeit</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht auf Übertragung Ihrer Daten in einem strukturierten Format.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-cyan">Beschwerderecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können sich bei der zuständigen Aufsichtsbehörde beschweren.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-space-yellow">
              Datensicherheit
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) 
              in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. 
              In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine 
              256-Bit-Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit-v3-Technologie zurück.
            </p>
          </Card>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString('de-AT')} | 
              Bei Fragen wenden Sie sich an: datenschutz@spacemotors.at
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;