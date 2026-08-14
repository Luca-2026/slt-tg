import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import sltLogo from "@/assets/slt-logo.png";
import { solutionsNav } from "@/data/solutionPages";

const topNavigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Managed Services", href: "/managed-services" },
  { name: "Technologien", href: "/technologien" },
  { name: "Finanzierung", href: "/finanzierung" },
  { name: "Projekte", href: "/projekte" },
  { name: "News & Wissen", href: "/news" },
  { name: "Karriere", href: "/karriere" },
  { name: "Über uns", href: "/ueber-uns" },
];

const solutionsItems = solutionsNav;

function isSolutionsActive(pathname: string) {
  return solutionsItems.some((item) => item.href === pathname);
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="section-container flex items-center justify-between h-20 lg:h-24 overflow-visible">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center overflow-hidden">
          <img src={sltLogo} alt="SLT Technology Group" className="h-28 nav:h-32 2xl:h-40 w-auto object-contain scale-110" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden nav:flex items-center gap-4 2xl:gap-6 whitespace-nowrap">
          {topNavigation.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Lösungen Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopSolutionsOpen(true)}
            onMouseLeave={() => setDesktopSolutionsOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                isSolutionsActive(location.pathname)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              aria-expanded={desktopSolutionsOpen}
              aria-haspopup="true"
            >
              Lösungen
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  desktopSolutionsOpen && "rotate-180"
                )}
              />
            </button>
            {desktopSolutionsOpen && (
              <div className="absolute top-full left-0 pt-2 animate-fade-in">
                <div className="min-w-[16rem] rounded-md border border-border bg-background shadow-lg py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        location.pathname === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {topNavigation.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden nav:block">
          <Button asChild className="btn-glow">
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="nav:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nav:hidden bg-background border-b border-border animate-fade-in">
          <div className="section-container py-4 space-y-1">
            {topNavigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Lösungen Accordion */}
            <div className="border-b border-border">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={cn(
                  "flex w-full items-center justify-between py-3 text-base font-medium transition-colors",
                  isSolutionsActive(location.pathname)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-expanded={mobileSolutionsOpen}
              >
                Lösungen
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    mobileSolutionsOpen && "rotate-180"
                  )}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pb-2 pl-4 space-y-1">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block py-2 text-sm transition-colors",
                        location.pathname === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {topNavigation.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                Kontakt
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
