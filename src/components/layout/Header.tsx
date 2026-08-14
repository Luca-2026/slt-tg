import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import sltLogo from "@/assets/slt-logo.png";
import { solutionsNav } from "@/data/solutionPages";

type NavLinkItem = { name: string; href: string };
type NavGroup = { name: string; items: NavLinkItem[] };
type NavEntry = NavLinkItem | NavGroup;

const isGroup = (entry: NavEntry): entry is NavGroup => "items" in entry;

const solutionsItems: NavLinkItem[] = solutionsNav;

const serviceItems: NavLinkItem[] = [
  { name: "Managed Services", href: "/managed-services" },
  { name: "Service & Wartung (ITIL v4)", href: "/service-wartung" },
  { name: "Technologien", href: "/technologien" },
  { name: "Finanzierung", href: "/finanzierung" },
];

const companyItems: NavLinkItem[] = [
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Projekte", href: "/projekte" },
  { name: "News & Wissen", href: "/news" },
  { name: "Karriere", href: "/karriere" },
];

const navigation: NavEntry[] = [
  { name: "Startseite", href: "/" },
  { name: "Lösungen", items: solutionsItems },
  { name: "Services", items: serviceItems },
  { name: "Unternehmen", items: companyItems },
];

const isGroupActive = (group: NavGroup, pathname: string) =>
  group.items.some((item) => item.href === pathname);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="section-container flex items-center justify-between h-20 lg:h-24 overflow-visible">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center overflow-hidden">
          <img src={sltLogo} alt="SLT Technology Group" className="h-28 nav:h-32 2xl:h-40 w-auto object-contain scale-110" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-5 nav:gap-7 2xl:gap-8 whitespace-nowrap">
          {navigation.map((entry) =>
            isGroup(entry) ? (
              <div
                key={entry.name}
                className="relative"
                onMouseEnter={() => setOpenDesktopGroup(entry.name)}
                onMouseLeave={() => setOpenDesktopGroup(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                    isGroupActive(entry, location.pathname)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  aria-expanded={openDesktopGroup === entry.name}
                  aria-haspopup="true"
                >
                  {entry.name}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openDesktopGroup === entry.name && "rotate-180"
                    )}
                  />
                </button>
                {openDesktopGroup === entry.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="min-w-[16rem] rounded-md border border-border bg-background shadow-lg py-2">
                      {entry.items.map((item) => (
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
            ) : (
              <Link
                key={entry.name}
                to={entry.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  entry.href === "/" && "hidden nav:inline",
                  location.pathname === entry.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {entry.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button asChild className="btn-glow">
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="xl:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-background border-b border-border animate-fade-in">
          <div className="section-container py-4 space-y-1">
            {navigation.map((entry) =>
              isGroup(entry) ? (
                <div key={entry.name} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup(openMobileGroup === entry.name ? null : entry.name)
                    }
                    className={cn(
                      "flex w-full items-center justify-between py-3 text-base font-medium transition-colors",
                      isGroupActive(entry, location.pathname)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-expanded={openMobileGroup === entry.name}
                  >
                    {entry.name}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        openMobileGroup === entry.name && "rotate-180"
                      )}
                    />
                  </button>
                  {openMobileGroup === entry.name && (
                    <div className="pb-2 pl-4 space-y-1">
                      {entry.items.map((item) => (
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
              ) : (
                <Link
                  key={entry.name}
                  to={entry.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    location.pathname === entry.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {entry.name}
                </Link>
              )
            )}
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
