import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrailingSlashRedirect } from "@/components/TrailingSlashRedirect";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import Loesungen from "./pages/Loesungen";
import Technologien from "./pages/Technologien";
import Finanzierung from "./pages/Finanzierung";
import Projekte from "./pages/Projekte";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Projektanfrage from "./pages/Projektanfrage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import NotFound from "./pages/NotFound";
import Karriere from "./pages/Karriere";
import LocalSEOPage from "./pages/LocalSEOPage";
import Ratgeber from "./pages/Ratgeber";
import RatgeberArticle from "./pages/RatgeberArticle";
import { getLocalSEORoutes } from "./data/localSEO";

const queryClient = new QueryClient();

const localRoutes = getLocalSEORoutes();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TrailingSlashRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/loesungen" element={<Loesungen />} />
          <Route path="/technologien" element={<Technologien />} />
          <Route path="/finanzierung" element={<Finanzierung />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/projektanfrage" element={<Projektanfrage />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          {localRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<LocalSEOPage topicKey={route.topic} cityKey={route.city} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
