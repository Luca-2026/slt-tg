import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { useLocation } from "react-router-dom";
import { JsonLd } from "@/components/JsonLd";
import { ALL_ROUTES } from "@/data/seo-routes";
import { buildGlobalSchemas, resolveRouteSchemas } from "@/data/schemas";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const route = ALL_ROUTES.find(item => item.path === pathname);
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={route ? resolveRouteSchemas(route) : buildGlobalSchemas()} />
      <Header />
      <main className="flex-1 pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
