import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { scrollReveal, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <SEOHead
        title="Kontakt – AV-Beratung Krefeld & Bonn"
        description="Jetzt kostenlose Erstberatung anfragen: Konferenztechnik, Medientechnik & AV-Integration. SLT Technology Group – Ihr Systemhaus in Krefeld und Bonn. ☎ 02151 4179902"
        keywords="Kontakt Systemhaus Krefeld, AV-Beratung Krefeld, Konferenztechnik Anfrage, Medientechnik Bonn"
        canonical="/kontakt"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SLT Technology Group GmbH & Co. KG",
            "telephone": "+49 2151 4179902",
            "email": "info@slt-tg.de",
            "address": { "@type": "PostalAddress", "streetAddress": "Anrather Straße 291", "addressLocality": "Krefeld", "postalCode": "47807", "addressCountry": "DE" },
            "url": "https://www.slt-tg.de"
          }
        }}
      />

      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`section-container relative z-10 ${scrollReveal(heroVisible, "blur")}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Kontakt</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kontakt aufnehmen –{" "}
              <span className="text-primary">kostenlose Erstberatung</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              Wir sind immer offen für interessante Ideen, neue Kontakte und spannende Anfragen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={contentRef}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16"
          >
            <div className={`${scrollReveal(contentVisible, "left")}`}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Nachricht senden
                  </CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" placeholder="Ihr Name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input id="email" name="email" type="email" placeholder="ihre@email.de" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+49 123 456789" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea id="message" name="message" placeholder="Wie können wir Ihnen helfen?" rows={5} value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Wird gesendet..." : (<>Nachricht senden <Send className="ml-2 h-4 w-4" /></>)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className={`space-y-6 ${scrollReveal(contentVisible, "right")}`}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Kontaktdaten</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="tel:+4921514179902" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <p className="font-medium text-foreground">+49 (0) 2151 - 417 99 02</p>
                    </div>
                  </a>
                  <a href="mailto:info@slt-tg.de" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-Mail</p>
                      <p className="font-medium text-foreground">info@slt-tg.de</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hauptsitz Krefeld</p>
                      <p className="font-medium text-foreground">
                        Anrather Straße 291<br />
                        47807 Krefeld
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Standort Bonn</p>
                      <p className="font-medium text-foreground">
                        Drachenburgstraße 8<br />
                        53179 Bonn
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 lg:pb-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Beratung für Ihre AV- und IT-Landschaft</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ein neuer Konferenzraum, die Modernisierung bestehender Technik oder ein Rollout an mehreren
                Standorten stellen unterschiedliche Anforderungen. SLT Technology Group verbindet Beratung,
                Planung und Integration von Medientechnik mit der dazugehörigen IT-Infrastruktur. Im Mittelpunkt
                stehen die tatsächliche Nutzung, die vorhandenen Systeme und die Zusammenarbeit mit Ihrer internen
                IT. Unsere Standorte in Krefeld und Bonn sind die Ausgangspunkte für Ihre Anfrage. Ob Einzelraum,
                Boardroom oder Schulungsbereich: Entscheidend ist ein Gesamtkonzept, in dem Bild, Ton, Bedienung
                und Netzwerk aufeinander abgestimmt sind. Dazu gehört auch die Frage, welche vorhandenen Komponenten
                weiterverwendet werden können und wo eine Ergänzung oder Modernisierung sinnvoll ist.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Konferenzräume, Präsentation und Digital Signage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei der <Link to="/konferenzraum-ausstattung" className="text-primary hover:underline">Konferenzraum-Ausstattung</Link> betrachten
                wir Raumgröße, Sitzordnung und typische Inhalte gemeinsam mit Kameras, Mikrofonen und Displays.
                Für hybride Besprechungen ist außerdem relevant, ob ein festes Raumsystem oder das Notebook der
                Teilnehmenden die Konferenz steuert. Kabellose Präsentation und interaktive Displays können
                Zusammenarbeit ergänzen, müssen aber zu den Endgeräten und Sicherheitsvorgaben passen. Auch für
                <Link to="/digital-signage" className="text-primary hover:underline"> Digital Signage</Link> im Empfang,
                auf Informationsflächen oder in der Produktion ist die Auswahl eines Bildschirms nur ein Teil
                der Planung. Inhalte, Zuständigkeiten und deren Verteilung gehören ebenso zum Konzept wie
                Montage, Netzwerkanschluss und die spätere Betreuung der Geräte.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Bestehende Anlagen und laufender Betrieb</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nicht jede Anfrage beginnt mit einem Neubau. Wiederkehrende Störungen, uneinheitliche Bedienung
                oder veraltete Komponenten können Anlass sein, die bestehende Ausstattung zu prüfen. Für die
                Betreuung nach der Installation bieten unsere <Link to="/managed-services" className="text-primary hover:underline">Managed Services</Link> unter
                anderem Service Desk, Monitoring, dokumentierte Wartung und abgestimmte Updates. Der geeignete
                Umfang wird anhand von Räumen, Standorten und Betriebszustand bestimmt. Servicezeiten,
                Verantwortlichkeiten und Schnittstellen zur internen IT gehören dabei zur individuellen
                Abstimmung. Für ein konkretes Vorhaben finden Sie auf der <Link to="/projektanfrage" className="text-primary hover:underline">Projektanfrage</Link> die
                relevanten Themen für den Projektrahmen; Beispiele bereits umgesetzter Lösungen zeigen unsere
                <Link to="/projekte" className="text-primary hover:underline"> Referenzprojekte</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
