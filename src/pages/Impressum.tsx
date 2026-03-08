import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

const Impressum = () => {
  return (
    <Layout>
      <SEOHead
        title="Impressum"
        description="Impressum der SLT Technology Group GmbH & Co. KG. Angaben gemäß § 5 TMG."
        keywords="Impressum, Kontakt, SLT Technology Group"
        canonical="/impressum"
      />
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">
              Rechtliches
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  SLT Technology Group GmbH & Co. KG
                </h2>
                <p className="text-muted-foreground">
                  Anrather Straße 291<br />
                  DE-47807 Krefeld<br />
                  <br />
                  Fon: +49 (0) 2151 - 417 99 02<br />
                  Fax: +49 (0) 2151 - 417 99 04<br />
                  E-Mail:{" "}
                  <a href="mailto:info@slt-tg.de" className="text-primary hover:underline">
                    info@slt-tg.de
                  </a>
                  <br />
                  <br />
                  HRA 7075 Amtsgericht Krefeld
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Geschäftsführer
                </h2>
                <p className="text-muted-foreground">
                  Benedikt Nöchel
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Persönlich haftende Gesellschafterin
                </h2>
                <p className="text-muted-foreground">
                  SLT Management GmbH<br />
                  Anrather Straße 291<br />
                  DE-47807 Krefeld<br />
                  <br />
                  Fon: +49 (0) 2151 - 417 99 03<br />
                  Fax: +49 (0) 2151 - 417 99 04<br />
                  E-Mail:{" "}
                  <a href="mailto:info@slt-tg.de" className="text-primary hover:underline">
                    info@slt-tg.de
                  </a>
                  <br />
                  <br />
                  HRB 18191 Amtsgericht Krefeld<br />
                  Gerichtsstand: Amtsgericht Krefeld
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Haftungsausschluss
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die SLT Technology Group GmbH & Co. KG prüft und aktualisiert die Informationen auf ihrer 
                  Webseite ständig. Trotz aller Sorgfalt können sich Daten und Informationen jeglicher Art 
                  inzwischen verändert haben. Eine Haftung, Garantie oder sonstiges Einstehen für die Aktualität, 
                  Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen kann daher nicht 
                  übernommen werden.
                </p>
                <p className="text-muted-foreground mb-4">
                  Gleiches gilt auch für alle anderen Webseiten, auf die direkt mittels Hyperlink oder in sonstiger 
                  Weise verwiesen wird. SLT Technology Group GmbH & Co. KG ist für den Inhalt der Webseiten, 
                  die aufgrund einer solchen Verbindung oder Hinweis erreicht werden, nicht verantwortlich.
                </p>
                <p className="text-muted-foreground mb-4">
                  Inhalt, Struktur und Gestaltung der SLT Technology Group GmbH & Co. KG Webseite sind 
                  urheberrechtlich geschützt. Die Vervielfältigung, Änderung, Darstellung, Verbreitung, 
                  Übermittlung, Veröffentlichung, Verkauf, Lizenzierung, Bearbeitung, Verfremdung oder Nutzung 
                  von Informationen oder Daten bedarf der vorherigen schriftlichen Zustimmung der 
                  SLT Technology Group GmbH & Co. KG.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Betriebshaftpflichtversicherung
                </h2>
                <p className="text-muted-foreground">
                  Gothaer Allgemeine Versicherung AG<br />
                  Geltungsbereich des Versicherungsschutzes: Deutschland & Europa
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Streitschlichtung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
                  (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
