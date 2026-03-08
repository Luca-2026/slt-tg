import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Set noindex for 404 pages
    let meta = document.querySelector('meta[name="robots"]');
    if (meta) {
      meta.setAttribute("content", "noindex, nofollow");
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      meta.setAttribute("content", "noindex, nofollow");
      document.head.appendChild(meta);
    }
    document.title = "Seite nicht gefunden | SLT Technology Group";

    return () => {
      const m = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (m) m.setAttribute("content", "index, follow");
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Seite nicht gefunden</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben. 
          Nutzen Sie die Navigation oder kehren Sie zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              Zur Startseite
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
