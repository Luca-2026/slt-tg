import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

const Datenschutz = () => {
  return (
    <Layout>
      <SEOHead
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der SLT Technology Group GmbH & Co. KG. Informationen zur Datenverarbeitung gemäß DSGVO."
        keywords="Datenschutz, DSGVO, Datenschutzerklärung, SLT Technology Group"
        canonical="/datenschutz"
      />
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">
              Rechtliches
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Ihre Betroffenenrechte
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten</li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns</li>
                  <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
                <p className="text-muted-foreground mt-4">
                  Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Zwecke der Datenverarbeitung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. 
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. 
                  Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                  <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist</li>
                  <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist</li>
                  <li>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Löschung bzw. Sperrung der Daten
                </h2>
                <p className="text-muted-foreground">
                  Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. 
                  Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung 
                  der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen 
                  vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf 
                  dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den 
                  gesetzlichen Vorschriften gesperrt oder gelöscht.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  SSL-Verschlüsselung
                </h2>
                <p className="text-muted-foreground">
                  Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir 
                  dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Verwendung von Google Maps
                </h2>
                <p className="text-muted-foreground">
                  Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. 
                  Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen 
                  durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung 
                  durch Google können Sie den{" "}
                  <a href="http://www.google.com/privacypolicy.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google-Datenschutzhinweisen
                  </a>{" "}
                  entnehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Änderung unserer Datenschutzbestimmungen
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                  rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                  Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Fragen an den Datenschutzbeauftragten
                </h2>
                <p className="text-muted-foreground">
                  Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden 
                  Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">SLT Technology Group GmbH & Co. KG</strong><br />
                  Herr Benedikt Nöchel<br />
                  Anrather Straße 291<br />
                  DE-47807 Krefeld<br />
                  E-Mail:{" "}
                  <a href="mailto:datenschutz@slt-tg.de" className="text-primary hover:underline">
                    datenschutz@slt-tg.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
