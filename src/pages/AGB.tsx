import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

const AGB = () => {
  return (
    <Layout>
      <SEOHead
        title="AGB – Allgemeine Geschäftsbedingungen"
        description="Allgemeine Geschäftsbedingungen der SLT Technology Group GmbH & Co. KG. Geltungsbereich, Haftung, Gewährleistung und weitere Vertragsbedingungen."
        keywords="AGB, Allgemeine Geschäftsbedingungen, SLT Technology Group, Vertragsbedingungen"
        canonical="/agb"
      />
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="section-container px-5 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 sm:mb-6">Rechtliches</Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              der SLT Technology Group GmbH & Co. KG<br />
              und mit diesem verbundene Unternehmen.
            </p>
            <p className="text-muted-foreground mb-8 sm:mb-12 italic">– nachfolgend SLT –</p>

            <div className="prose prose-invert max-w-none space-y-8 sm:space-y-10">

              {/* A – Allgemeine Bestimmungen */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">A. Allgemeine Bestimmungen</h2>

                {/* I */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">I. Geltung der AGB</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese allgemeinen Geschäftsbedingungen finden ausschließlich Anwendung gegenüber Unternehmern, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichem Sondervermögen im Sinne von § 310 Abs. 1 BGB. Diese allgemeinen Geschäftsbedingungen gelten ausschließlich. Abweichende oder entgegenstehende Bedingungen werden von SLT nicht anerkannt, sofern SLT diesen nicht ausdrücklich schriftlich zugestimmt haben. Durch die Erteilung von Aufträgen erkennt der Kunde diese Bedingungen an, auch wenn seine AGB diesen Bedingungen entgegenstehen sollten. Diese AGB gelten auch für alle künftigen Verträge der Parteien, ohne dass es eines erneuten Hinweises auf die AGB bedarf.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Sollte der zwischen den Parteien abgeschlossene Vertrag Bestandteile verschiedener Vertragstypen beinhalten, so wird jeweils für den betreffenden Vertragsbestandteil die hierfür maßgebende Bestimmung dieses Vertrages angewandt. Liegt bsp. ein kombinierter Miet- und Werkvertrag vor, so finden auf den Mietteil die Vorschriften zu C. dieses Vertrages und auf den Werkvertragsteil die Vorschriften zu D. dieses Vertrages Anwendung.
                  </p>
                  <p className="text-muted-foreground">
                    Für jede Leistung sind also die Vorschriften des entsprechenden Vertragstyps anwendbar. Sofern die Vorschriften kollidieren sollten, gilt, dass die Vorschriften desjenigen Vertragstyps anwendbar sind, der den rechtlichen oder wirtschaftlichen Schwerpunkt bildet.
                  </p>
                </section>

                {/* II */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">II. Zahlung / Aufrechnung / Zurückbehaltungsrecht / Abtretung</h3>
                  <p className="text-muted-foreground mb-2">a. Rechnungen von SLT, soweit nichts anderes vereinbart worden ist, sind 14 Tage nach Rechnungsdatum fällig und ohne Abzug zu bezahlen.</p>
                  <p className="text-muted-foreground mb-2">b. Nur unbestrittene oder rechtskräftig festgestellte Forderungen berechtigen den Kunden zur Aufrechnung oder Zurückbehaltung.</p>
                  <p className="text-muted-foreground">c. SLT ist berechtigt, seine Ansprüche aus der bestehenden Geschäftsbeziehung abzutreten.</p>
                </section>

                {/* III */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">III. Haftung von SLT</h3>
                  <p className="text-muted-foreground mb-4">
                    a. Für Personenschäden (Verletzung von Leben, Körper, Gesundheit), die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung von SLT, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen, haftet SLT unbegrenzt.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    b. Für Sach- und Vermögensschäden, die auf einer fahrlässigen oder vorsätzlichen Verletzung wesentlicher Vertragspflichten von SLT, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen, haftet SLT begrenzt auf den vertragstypischen vorhersehbaren Schaden, maximal jedoch begrenzt auf die Deckungssumme der Haftpflichtversicherung von SLT in Höhe von EUR 15.000.000,00 bei Sachschäden und EUR 15.000.000,00 bei Vermögensschäden. Wesentliche Vertragspflichten sind solche, die vertragswesentliche Positionen des Kunden schützen, also solche, die ihm der Vertrag gerade zu gewähren hat, deren Erfüllung die Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde vertrauen darf. Der Schadensersatzanspruch wegen Verletzung wesentlicher Vertragspflichten ist auf den vertragstypischen vorhersehbaren Schaden begrenzt.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    c. Für sonstige Sach- und Vermögensschäden, die auf einer grob fahrlässigen oder vorsätzlichen Pflichtverletzung von SLT, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen, haftet SLT begrenzt auf die Deckungssumme der Haftpflichtversicherung in Höhe von EUR 15.000.000,00 bei Sachschäden und EUR 15.000.000,00 bei Vermögensschäden.
                  </p>
                  <p className="text-muted-foreground">
                    d. Im Übrigen ist die Haftung von SLT ausgeschlossen. Die Haftung wegen schuldhafter Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt; dies gilt auch für die zwingende Haftung nach dem Produkthaftungsgesetz. Die Haftungsbeschränkung gilt ferner nicht, soweit SLT einen Mangel arglistig verschwiegen oder ausnahmsweise eine Beschaffenheits- oder Haltbarkeitsgarantie oder ein Beschaffungsrisiko übernommen hat.
                  </p>
                </section>

                {/* IV */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">IV. Umsatzsteuer</h3>
                  <p className="text-muted-foreground">
                    Sollte SLT einen Umsatz irrtümlich als nicht steuerbar bzw. steuerfrei behandeln, obwohl der Umsatz der Umsatzsteuer unterliegt, kann SLT die tatsächlich anfallende Umsatzsteuer auch nachträglich vom Kunden verlangen, sobald von SLT hierüber eine berichtigte Rechnung ausgestellt worden ist.
                  </p>
                </section>

                {/* V */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">V. Reisekosten</h3>
                  <p className="text-muted-foreground">
                    Reisekosten und Spesen, die SLT im Zusammenhang mit der Ausführung des Vertrages entstehen, sind vom Kunden gesondert zu erstatten.
                  </p>
                </section>

                {/* VI */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">VI. Keine Anrechnung der Vertragsstrafe</h3>
                  <p className="text-muted-foreground">
                    Eine vereinbarte Vertragsstrafe wird auf bestehende Schadensersatzansprüche von SLT nicht angerechnet.
                  </p>
                </section>

                {/* VII */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">VII. Urheberschutz</h3>
                  <p className="text-muted-foreground mb-4">
                    SLT verpflichtet sich, dem Kunden befristet auf die Vertragslaufzeit einfache Nutzungsrechte an allen Schutzrechten nach Maßgabe und Zweck des Vertrages einzuräumen, die mit der Erbringung der Vertragsleistung erwachsen, insbesondere an Urheberrechten oder Leistungsschutzrechten oder gewerblichen Schutzrechten an dem angebotenen Technikkonzept, künstlerischen oder technischen Zeichnungen oder Grafiken (wie Lichtkonzept, Tonkonzept und Anordnung der Beschallung), Textteilen, Lichtbildwerken oder Lichtbildern oder Datensammlungen.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Eine über den unmittelbaren Vertragszweck hinausgehende Nutzung der urheberrechtlich oder über sonstige Schutzrechte geschützten Werke bzw. Schutzobjekte ist dem Kunden nur gestattet, soweit SLT hierzu schriftlich zugestimmt hat. Insbesondere ist es dem Kunden nicht ohne schriftliche Zustimmung von SLT gestattet, das angebotene Technikkonzept an Dritte weiterzugeben, zu veröffentlichen, zu vervielfältigen oder zu bearbeiten.
                  </p>
                  <p className="text-muted-foreground">
                    Für jeden Fall der schuldhaften Zuwiderhandlung verpflichtet sich der Kunde, eine Vertragsstrafe von EUR 5.000,00 an SLT zu bezahlen. Das Recht von SLT, einen höheren Schaden geltend zu machen, bleibt unberührt.
                  </p>
                </section>

                {/* VIII */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">VIII. Rücktritt vom Vertrag</h3>
                  <p className="text-muted-foreground mb-4">
                    Tritt der Kunde aus Gründen, die nicht von uns zu vertreten sind, vom Vertrag zurück, können wir ohne Schadensnachweis als Stornierungskosten fordern:
                  </p>
                  <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 mb-4">
                    <li>Bis 30 Tage vor Vertragsbeginn: 30 % des Auftragswertes</li>
                    <li>Bis 14 Tage vor Vertragsbeginn: 40 % des Auftragswertes</li>
                    <li>Bis 8 Tage vor Vertragsbeginn: 50 % des Auftragswertes</li>
                    <li>Bis 3 Tage vor Vertragsbeginn: 100 % des Auftragswertes</li>
                  </ul>
                </section>

                {/* IX */}
                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">IX. Salvatorische Klausel, Gerichtsstand, anwendbares Recht</h3>
                  <p className="text-muted-foreground mb-2">
                    a. Sollten einzelne Regelungen dieses Vertrages ganz oder teilweise gegen zwingendes Recht verstoßen oder aus anderen Gründen nichtig oder unwirksam sein, so bleibt die Gültigkeit der übrigen Bestimmungen hiervon unberührt. Nichtige oder unwirksame Regelungen sind durch solche zu ersetzen, die dem wirtschaftlich angestrebten Regelungszweck am nächsten kommen.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    b. Für alle Streitigkeiten aus dem Vertragsverhältnis oder im Zusammenhang mit diesem ist das Gericht am Sitz von SLT zuständig. Der Sitz von SLT ist in 47807 Krefeld.
                  </p>
                  <p className="text-muted-foreground">
                    c. Es gilt das Recht der Bundesrepublik Deutschland. Die Vertragssprache ist deutsch. Die Bestimmungen des UN-Kaufrechts werden ausgeschlossen.
                  </p>
                </section>
              </div>

              {/* B – Zusätzliche Werkvertragsbedingungen */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">B. Zusätzliche Werkvertragsbedingungen und Bedingungen bei Dienstleistungen</h2>

                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">I. Allgemeines</h3>
                  <p className="text-muted-foreground mb-4">
                    a. Angebote, Kalkulationen, Pläne, Zeichnungen oder vergleichbare Unterlagen dürfen ohne Zustimmung von SLT vom Besteller weder vervielfältigt, geändert oder Dritten zugänglich gemacht werden. Kommt ein Vertragsschluss nicht zu Stande, sind die Unterlagen einschließlich Kopien unverzüglich an SLT herauszugeben. Entsprechende digitale Unterlagen sind von allen Laufwerken und Speichermedien dauerhaft zu löschen.
                  </p>
                  <p className="text-muted-foreground">
                    b. Behördliche oder sonstige zur Durchführung des Vertrages erforderlichen Genehmigungen sind vom Besteller zu beschaffen und SLT zur Verfügung zu stellen, soweit nichts anderes vereinbart ist.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">II. Unberechtigte Mängelrügen</h3>
                  <p className="text-muted-foreground">
                    Kommt SLT einer Aufforderung des Bestellers zur Mängelbeseitigung nach und gewährt der Besteller den Zugang zum Objekt zum vereinbarten Zeitpunkt nicht oder stellt sich heraus, dass ein Mangel an der Leistung von SLT objektiv nicht vorliegt, hat der Besteller die Aufwendungen von SLT zu ersetzen. Mangels Vereinbarung gelten die ortsüblichen Sätze.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">III. Geeigneter Aufbauort</h3>
                  <p className="text-muted-foreground">
                    SLT ist nicht verpflichtet, den Aufbauort vor Durchführung des Vertrages auf seine Eignung zu überprüfen. SLT schuldet daher die Erbringung der Leistung bei einem üblichen Aufbauort ohne Erschwernisse. Der Besteller hat die Eignung des Aufbauorts für von SLT aufzustellende, zu errichtende oder aufzubauende Materialien sicherzustellen. Verzögert sich der Aufbau durch nicht von SLT zu vertretende Umstände, so hat der Besteller die dadurch entstandenen Mehrkosten (z.&nbsp;B. Wartezeiten, zusätzlich erforderliche Reisen des Personals etc.) zu tragen.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">IV. Subunternehmer</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Es ist SLT gestattet, Subunternehmer mit der Leistungserbringung zu beauftragen.</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">V. Vertretungsbefugnis</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Die Techniker sind nicht vertretungsbefugt.</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VI. Zutritt zum Objekt</h3>
                  <p className="text-muted-foreground">
                    Der Besteller hat dafür zu sorgen, dass der/die Techniker am Ausführungstermin Zutritt zum Objekt erhalten; andernfalls hat er den entstehenden Mehraufwand zu erstatten.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VII. Gewährleistung</h3>
                  <p className="text-muted-foreground mb-4">
                    Die Gewährleistungsrechte des Bestellers sind zunächst auf Nachbesserung beschränkt. Nach Fehlschlagen einer dem Besteller zumutbaren Anzahl von Nachbesserungsversuchen stehen dem Besteller die gesetzlichen Rechte zu, insbesondere das Recht auf Herabsetzung des Preises und Rückgängigmachung des Vertrages.
                  </p>
                  <p className="text-muted-foreground">
                    Der vorstehende Satz gilt nicht, falls SLT die Nachbesserung unberechtigt verweigert oder unzumutbar verzögert, dann stehen dem Besteller die gesetzlichen Rechte sofort zu.
                  </p>
                </section>
              </div>

              {/* C – Zusätzliche Mietbedingungen */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">C. Zusätzliche Mietbedingungen</h2>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">I. Kaution</h3>
                  <p className="text-muted-foreground">
                    SLT ist berechtigt, vor Überlassung der Mietsache eine Barkaution in Höhe von 50 % des sich aus dem Mietvertrag ergebenden voraussichtlichen Mietzinses vom Mieter zu verlangen, die Zug-um-Zug gegen Überlassung der Mietsache auszuhändigen ist. Die Barkaution ist von SLT nicht zu verzinsen. Die Barkaution ist von SLT nicht getrennt vom eigenen Vermögen anzulegen.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">II. Überlassung an Dritte und Auslandsnutzung, Rückgabe</h3>
                  <p className="text-muted-foreground mb-2">
                    a. Der Mieter darf die Mietsache nur mit ausdrücklicher Zustimmung von SLT Dritten entgeltlich oder unentgeltlich überlassen oder ins Ausland verbringen.
                  </p>
                  <p className="text-muted-foreground">
                    b. Wird nach Ablauf der Mietzeit der Gebrauch der Sache vom Mieter fortgesetzt, so verlängert sich auch ohne Widerspruch von SLT der Mietvertrag nicht.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">III. Entschädigung bei verspäteter Rückgabe, Vertragsstrafe</h3>
                  <p className="text-muted-foreground mb-4">
                    a. Gibt der Mieter die Mietsache nach Beendigung des Mietverhältnisses nicht zurück, so kann SLT für die Dauer der Vorenthaltung als Entschädigung die vereinbarte Miete oder die Miete verlangen, die für vergleichbare Sachen ortsüblich ist. Das Recht von SLT, einen höheren Schaden geltend zu machen, bleibt unberührt. Während der Dauer der Vorenthaltung ist der Mieter auch ohne Verschulden für den Schaden gegenüber SLT verantwortlich, der dadurch entsteht, dass die Mietsache verschlechtert wird, untergeht oder aus einem anderen Grund vom Mieter nicht herausgegeben werden kann.
                  </p>
                  <p className="text-muted-foreground">
                    b. Der Mieter hat an SLT neben der unter C.III.a. dieses Vertrages geregelten Entschädigung eine Vertragsstrafe zu zahlen. Die Vertragsstrafe beträgt pro Tag der Vorenthaltung 20 % des Tagesmietpreises. Der Tagesmietpreis ist ggf. rechnerisch zu ermitteln. Die Vertragsstrafe wird auf die Entschädigung nicht angerechnet.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">IV. Zurückbehaltungsrecht</h3>
                  <p className="text-muted-foreground">
                    Ein Zurückbehaltungsrecht an der Mietsache steht dem Mieter nach Ablauf der Mietzeit nicht zu.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">V. Pflichten des Mieters</h3>
                  <p className="text-muted-foreground mb-2">a. Der Mieter hat die Mietsache schonend zu behandeln. Eventuelle Hinweise von SLT in Bezug auf die Mietsache sind vom Mieter zu beachten. Die Mietsache darf nur von Fachpersonal aufgebaut und bedient werden.</p>
                  <p className="text-muted-foreground mb-2">b. Der Mieter ist verpflichtet, die Mietsache vor Beschädigung oder Verlust (insbesondere vor Witterungseinflüssen und Diebstahl) zu schützen und geeignete Maßnahmen zu ergreifen.</p>
                  <p className="text-muted-foreground mb-2">c. Zeigt sich im Laufe der Miete ein Mangel der gemieteten Sache, so hat der Mieter unverzüglich SLT hiervon in Kenntnis zu setzen.</p>
                  <p className="text-muted-foreground">d. Bei Anmietung von drahtlosen Mikrofonanlagen in den Bereichen III (VHF), IV und V (UHF) sowie von Betriebsfunkgeräten hat der Mieter sicherzustellen, dass der Einsatz der Anlagen nach den jeweils gültigen Bestimmungen der Bundesnetzagentur (BNetzA) erfolgt.</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VI. Haftung des Mieters</h3>
                  <p className="text-muted-foreground mb-2">
                    a. Der Mieter haftet für Verlust, Untergang oder Beschädigung der Mietsache (insbesondere Feuer- und Wasserschäden, Transportschäden, Schädigung der Mietsache während der Benutzung und Abhandenkommen der Mietsache), auch wenn ihn kein Verschulden trifft. Haftungszeitraum ist der Zeitpunkt der Übergabe der Mietsache bis zur Rückgabe der Mietsache.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    b. Bei Verlust der Mietsache hat der Mieter den Neuwert zu ersetzen, bei Beschädigung der Mietsache hat der Mieter den Neuwert zu ersetzen, wenn eine Reparatur unmöglich oder unwirtschaftlich wäre.
                  </p>
                  <p className="text-muted-foreground">
                    c. SLT muss sich einen Abzug neu für alt nicht auf seinen Anspruch anrechnen lassen. Die Geltendmachung eines weitergehenden Schadens bleibt SLT vorbehalten.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VII. Gewährleistung von SLT</h3>
                  <p className="text-muted-foreground mb-2">
                    a. SLT leistet Gewähr nach den gesetzlichen Vorschriften, soweit nachfolgend nichts anderes bestimmt wird oder individualvertraglich Garantiebestimmungen vereinbart worden sind.
                  </p>
                  <p className="text-muted-foreground">
                    b. Die verschuldensunabhängige Haftung von SLT für anfängliche Mängel der Mietsache bei Vertragsschluss wird ausgeschlossen. SLT haftet für anfängliche Mängel der Mietsache bei Vertragsschluss nur, wenn SLT den Mangel zu vertreten hatte oder den Mangel kannte. Der Mieter trägt in diesem Fall die Beweislast, dass SLT diesen anfänglichen Mangel zu vertreten hatte bzw. dass SLT dieser anfängliche Mangel bei Abschluss des Mietvertrages bekannt gewesen ist.
                  </p>
                </section>
              </div>

              {/* D – Zusätzliche Verkaufsbedingungen */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">D. Zusätzliche Verkaufsbedingungen</h2>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">I. Versand</h3>
                  <p className="text-muted-foreground mb-2">a. Der Versand der Ware erfolgt auf Gefahr und Rechnung des Käufers, es sei denn, es wird eine anderslautende Vereinbarung getroffen. Versicherungen gegen Schäden und Verlust werden von SLT auf ausdrücklichen Wunsch und auf Kosten des Käufers abgeschlossen.</p>
                  <p className="text-muted-foreground mb-2">b. Die Wahl der Versandart bleibt SLT überlassen.</p>
                  <p className="text-muted-foreground">c. Behälter und Kisten bleiben, soweit nichts anderes vereinbart ist, Eigentum von SLT und sind auf Anforderung nach ihrer Entladung auf Kosten von SLT zurückzusenden.</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">II. Eigentumsvorbehalt</h3>
                  <p className="text-muted-foreground mb-4">
                    a. Die verkaufte Ware bleibt im Eigentum von SLT bis zur vollständigen Bezahlung der Forderung von SLT.
                  </p>
                  <p className="text-muted-foreground">
                    b. SLT behält sich das Eigentum an den gelieferten Waren bis zur vollständigen Tilgung aller SLT aus der Geschäftsverbindung mit dem Käufer zustehenden Forderungen, gleich aus welchem Rechtsgrund, vor. Soweit nichts anderes individuell vereinbart worden ist, ist dem Käufer eine Veräußerung der Kaufsache bis zur vollständigen Zahlung des Kaufpreises an SLT nicht gestattet. Der Käufer tritt schon jetzt alle ihm aus der Weiterveräußerung zustehenden Forderungen mit Nebenrechten an SLT ab, unabhängig davon, ob der Käufer die Kaufsache im gewöhnlichen Geschäftsgang aufgrund einer individuellen Vereinbarung vor vollständiger Zahlung des Kaufpreises weiterveräußern darf oder die Kaufsache unter Verstoß gegen das Veräußerungsverbot vor vollständiger Zahlung des Kaufpreises verkauft. Die Abtretung nimmt SLT hiermit an. Die abgetretenen Forderungen dienen der Sicherung aller Ansprüche aus der Geschäftsverbindung. Der Käufer ist zum Einzug der abgetretenen Forderung berechtigt, solange SLT diese Ermächtigung nicht widerrufen hat. Die Einziehungsermächtigung erlischt auch ohne ausdrücklichen Widerruf, wenn der Käufer seine Zahlungen einstellt. Auf Verlangen von SLT hat der Käufer unverzüglich schriftlich mitzuteilen, an wen er die Ware veräußert hat und welche Forderungen ihm aus der Veräußerung zustehen sowie SLT auf seine Kosten öffentlich beglaubigte Urkunden über die Abtretung der Forderung auszustellen. Zu anderen Verfügungen über die im Vorbehaltseigentum von SLT stehenden Gegenständen oder über die an SLT abgetretenen Forderungen ist der Käufer nicht berechtigt. Pfändungen oder sonstige Rechtsbeeinträchtigungen der SLT ganz oder teilweise gehörenden Gegenstände bzw. Forderungen hat der Käufer SLT unverzüglich mitzuteilen. SLT ist jederzeit berechtigt, die Herausgabe der SLT gehörenden Waren zu verlangen, wenn der Käufer mit einer Zahlung in Verzug kommt oder sich seine Vermögenslage wesentlich verschlechtert. Übersteigt der Wert der bestellten Sicherheiten die Forderung von SLT insgesamt um mehr als 10 %, so wird SLT auf Verlangen des Käufers die über 10 % hinausgehenden Sicherungen nach Wahl von SLT freigeben.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">III. Rücktrittsrecht</h3>
                  <p className="text-muted-foreground">
                    SLT ist im Falle ausbleibender, nicht richtiger oder nicht rechtzeitiger Selbstbelieferung berechtigt, vom Vertrag zurückzutreten.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">IV. Gewährleistung, Untersuchungs- und Rügepflicht bei Neuware</h3>
                  <p className="text-muted-foreground">
                    SLT leistet Gewähr nach den gesetzlichen Vorschriften, soweit nachfolgend nichts anderes bestimmt wird. Bei Neuware gelten die §§ 377, 378 HGB mit der Maßgabe, dass die Rüge innerhalb von 2 Tagen zu erfolgen hat. Dies gilt nicht, wenn SLT den Mangel arglistig verschwiegen hat.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">V. Verjährungsfristen bei Neuware</h3>
                  <p className="text-muted-foreground">
                    Die Verjährungsfrist der Gewährleistungsrechte des Käufers beträgt 1 Jahr, außer es handelt sich um Ansprüche des Käufers wegen eines Mangels in den Fällen des § 438 Abs. 1 Nr. 2 BGB bzw. des § 634a Abs. 1 Nr. 2 BGB. Die Verjährungsfrist beginnt ab Ablieferung der Ware bzw. mit Übergabe an das Versandunternehmen.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VI. Angaben zu Eigenschaften von Neuware</h3>
                  <p className="text-muted-foreground">
                    Bei Neuware erfolgen alle Angaben von SLT über Eignung, Verarbeitung und Anwendung, technische Beratung und sonstigen Angaben nach bestem Gewissen, befreien den Käufer jedoch nicht von eigenen Prüfungen und Versuchen.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VII. Gewährleistungsrechte bei Neuware</h3>
                  <p className="text-muted-foreground mb-4">
                    Die Gewährleistungsrechte des Käufers sind bei Neuware zunächst nach Wahl von SLT auf Ersatzlieferung und Nachbesserung beschränkt. Es obliegt SLT, entweder nachzubessern oder eine Ersatzlieferung zu veranlassen. Beanstandete Ware darf nur mit Einverständnis von SLT zurückgesandt werden.
                  </p>
                  <p className="text-muted-foreground">
                    Nach Fehlschlagen einer dem Käufer zumutbaren Anzahl von Nachbesserungsversuchen stehen dem Käufer die gesetzlichen Rechte zu, insbesondere das Recht auf Herabsetzung des Preises und Rückgängigmachung des Vertrages. Der vorstehende Satz gilt nicht, falls SLT die Nachbesserung unberechtigt verweigert oder unzumutbar verzögert, dann stehen dem Käufer die gesetzlichen Rechte sofort zu.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">VIII. Gebrauchtware</h3>
                  <p className="text-muted-foreground">
                    Der Verkauf von Gebrauchtware erfolgt unter Ausschluss sämtlicher Sachmängelansprüche. Der Ausschluss gilt nicht im Falle des arglistigen Verschweigens eines Mangels durch SLT.
                  </p>
                </section>
              </div>

              {/* E – Beschallungsanlagen */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">E. Zusätzliche Bedingungen bei Gestellung von Beschallungsanlagen</h2>
                <p className="text-muted-foreground">
                  Es gehört weder zu den Haupt- noch zu den Nebenleistungspflichten von SLT, den Kunden über die rechtlichen Grenzen und Anforderungen im Hinblick auf Lärmemissionen zu informieren oder den Kunden in diesen Fragen zu beraten, soweit nichts Abweichendes im Auftrag geregelt ist. Ungeachtet dessen weist SLT darauf hin, dass diverse vor Lärmimmissionen schützende Vorschriften zu beachten sind. Im Übrigen wird sich SLT an etwaige diesbezügliche Anweisungen des Kunden halten.
                </p>
              </div>

              {/* F – WLAN */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">F. Zusätzliche Bedingungen bei der Bereitstellung eines WLAN-Zugangs</h2>
                <p className="text-muted-foreground mb-4">
                  Sofern SLT dem Kunden auftragsgemäß einen Internetzugang über WLAN zur Verfügung stellt, erfolgt die Nutzung des WLAN auf eigene Gefahr und auf eigenes Risiko des Kunden, insbesondere hinsichtlich der Möglichkeit von Zugriffen Dritter auf das Endgerät des Nutzers oder einer Infizierung mit schädlicher Software (z.&nbsp;B. Viren oder Trojaner). Der Kunde ist selbst verantwortlich für jegliche Sicherungsmaßnahmen (z.&nbsp;B. Verschlüsselung, Virenschutz, Firewall). Für über das WLAN übermittelte Daten, für darüber in Anspruch genommene kostenpflichtige Dienstleistungen sowie für darüber getätigte Rechtsgeschäfte ist der Kunde selbst verantwortlich; er trägt alle hieraus resultierenden Kosten.
                </p>
                <p className="text-muted-foreground mb-4">
                  Der Kunde ist verpflichtet, bei der Nutzung des WLAN das geltende Recht einzuhalten; insbesondere verpflichtet sich der Kunde:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>das WLAN weder zum Abruf noch zur Verbreitung von strafbaren, sittenwidrigen oder in sonstiger Weise rechtswidrigen Inhalten zu nutzen;</li>
                  <li>über das WLAN keine urheberrechtlich geschützten Werke widerrechtlich zu vervielfältigen, zu verbreiten, zugänglich zu machen oder in anderer Weise zu verwerten, etwa durch den Einsatz bzw. die Nutzung von Filesharing-Programmen oder Tauschbörsen;</li>
                  <li>die geltenden Jugendschutzvorschriften zu beachten;</li>
                  <li>keine belästigenden, verleumderischen oder bedrohenden Inhalte zu versenden oder zu verbreiten und das WLAN nicht zum Versand von Massen-Nachrichten (Spam) und/oder anderen Formen unzulässiger Werbung zu nutzen.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Der Kunde stellt SLT von sämtlichen Ansprüchen Dritter frei, die auf einem Verstoß gegen die vorstehenden Bedingungen oder auf einer rechtswidrigen Verwendung des WLAN durch den Kunden beruhen. Dies gilt insbesondere für Ansprüche, die sich aus datenschutzrechtlichen, urheberrechtlichen oder sonstigen rechtlichen Streitigkeiten im Zusammenhang mit der Verwendung des WLAN durch den Kunden ergeben sowie für die entsprechenden Kosten der Rechtsverfolgung oder Rechtsverteidigung. Erkennt der Kunde, dass eine solche Rechtsverletzung und/oder ein solcher Verstoß vorliegt oder droht, so hat er SLT hiervon unverzüglich zu unterrichten.
                </p>
                <p className="text-muted-foreground">
                  Stellt der Kunde den von SLT bereitgestellten WLAN-Anschluss Dritten zur Verfügung, so haftet der Kunde für sämtliche durch diesen Nutzer verursachten Verletzungen dieser Vereinbarung wie für eigene Verstöße.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AGB;
