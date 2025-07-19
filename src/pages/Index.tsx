import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Vehicles from '@/components/Vehicles';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Vehicles />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
