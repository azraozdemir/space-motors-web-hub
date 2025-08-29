import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-gradient-glow rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-10 h-10 text-space-cyan" />
          </div>
          <h1 className="text-6xl font-bold text-space-cyan mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-muted-foreground mb-6">
            Die angeforderte Seite <span className="text-space-yellow font-mono">{location.pathname}</span> konnte nicht gefunden werden.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            asChild 
            className="w-full bg-gradient-primary text-primary-foreground hover:shadow-cyan"
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Zur Startseite
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full border-space-cyan text-space-cyan hover:bg-space-cyan hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
