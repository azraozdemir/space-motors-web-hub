import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    '§57a Pickerl-Überprüfung',
    'Ölwechsel & Wartung',
    'Reifenservice',
    'Bremsenreparatur',
    'Klimaservice',
    'Unfallreparatur',
    'Fahrzeugdiagnose',
    'Inspektion & Service',
    'Fahrzeugaufbereitung',
    'Sonstiges'
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Terminanfrage gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-glow rounded-full px-4 py-2 text-sm border border-primary/20 mb-6">
            <Calendar className="w-4 h-4 text-space-cyan" />
            <span className="text-space-cyan font-medium">Terminvereinbarung</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-space-cyan">Termin</span>
            <br />
            <span className="text-foreground">vereinbaren</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buchen Sie Ihren Werkstatttermin schnell und unkompliziert online. 
            Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-dark border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-space-cyan">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-glow">
                    <Phone className="h-5 w-5 text-space-cyan" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+43 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-glow">
                    <Mail className="h-5 w-5 text-space-yellow" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-muted-foreground">info@spacemotors.at</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-glow">
                    <Clock className="h-5 w-5 text-space-cyan" />
                  </div>
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-muted-foreground">Mo-Fr: 08:00-18:00</p>
                    <p className="text-muted-foreground">Sa: 08:00-12:00</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Sofortkontakt</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground h-12"
                  onClick={() => window.location.href = 'tel:+43123456789'}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-space-yellow text-space-yellow hover:bg-space-yellow hover:text-primary-foreground h-12"
                  onClick={() => window.location.href = 'https://wa.me/43123456789'}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Benefits */}
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
                  'Schnelle Terminvergabe'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-space-cyan flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Appointment Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ihr vollständiger Name"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefon *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+43 123 456 789"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  E-Mail *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="ihre.email@example.com"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service *
                </label>
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Service auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Wunschdatum *
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Uhrzeit
                  </label>
                  <Select onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Uhrzeit wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time} Uhr
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nachricht
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Beschreiben Sie Ihr Anliegen oder besondere Wünsche..."
                  rows={4}
                  className="bg-background/50"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-cyan h-12 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Wird gesendet...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Terminanfrage senden</span>
                  </div>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Appointment;