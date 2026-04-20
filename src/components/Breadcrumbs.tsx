import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  const baseUrl = "https://www.slt-tg.de";

  const allItems = [{ label: "Startseite", href: "/" }, ...items];
  // BreadcrumbList JSON-LD wird statisch durch Prerender (scripts/prerender.mjs)
  // ausgeliefert. Hier nur noch UI – keine DOM-Schema-Injection mehr.
  void location;
  void baseUrl;

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">
                {index === 0 && <Home className="h-3.5 w-3.5 inline mr-1" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
