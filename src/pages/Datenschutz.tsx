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
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-20">
        <div className="section-container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 lg:mb-6">
              Rechtliches
            </Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">Datenschutzerklärung</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 lg:mb-10">Datenschutzerklärung nach DS-GVO – Stand: März 2026</p>

            <div className="max-w-none space-y-8 lg:space-y-10">

              {/* 1. Datenschutz auf einen Blick */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">1. Datenschutz auf einen Blick</h2>

                <h3 className="text-lg font-semibold text-foreground mb-3">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                  entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Datenerfassung auf dieser Website</h3>

                <h4 className="text-base font-semibold text-foreground mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-muted-foreground mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 
                  „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>

                <h4 className="text-base font-semibold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, 
                  die Sie in ein Kontaktformular, Projektanfrageformular oder Bewerbungsformular eingeben.
                </p>
                <p className="text-muted-foreground mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                  Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                  Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h4 className="text-base font-semibold text-foreground mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Bearbeitung Ihrer Anfragen, zur Abwicklung von Bewerbungsverfahren oder 
                  zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="text-base font-semibold text-foreground mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                  Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung 
                  erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen 
                  die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              {/* 2. Hosting */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">2. Hosting</h2>
                <p className="text-muted-foreground mb-4">
                  Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Serverprofis</h3>
                <p className="text-muted-foreground mb-4">
                  Unsere Website wird auf Servern der Serverprofis GmbH & Co. KG, Gebhardtstraße 9, 90762 Fürth, Deutschland, gehostet. 
                  Die Domain lautet slt-tg.de. Beim Besuch unserer Website werden automatisch Daten (z.&nbsp;B. IP-Adresse, Browsertyp, Zugriffszeit) 
                  durch die Server des Hosting-Anbieters erfasst und in sogenannten Server-Logfiles gespeichert.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Verwendung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst 
                  zuverlässigen Darstellung unserer Website. Die Daten werden ausschließlich auf Servern in Deutschland verarbeitet.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit Serverprofis geschlossen. 
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Serverprofis:{" "}
                  <a href="https://www.serverprofis.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.serverprofis.de/datenschutz
                  </a>.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Supabase (Backend-Dienste)</h3>
                <p className="text-muted-foreground mb-4">
                  Für die Verarbeitung von Formulardaten (Kontaktanfragen, Projektanfragen, Bewerbungen) nutzen wir Supabase, Inc., 
                  970 Toa Payoh North #07-04, Singapore 318992. Supabase verarbeitet die über Formulare übermittelten Daten auf Servern 
                  in der EU (Frankfurt am Main). Details entnehmen Sie der Datenschutzerklärung von Supabase:{" "}
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    supabase.com/privacy
                  </a>.
                </p>
              </section>

              {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                <h3 className="text-lg font-semibold text-foreground mb-3">Datenschutz</h3>
                <p className="text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten 
                  vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken 
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">SLT Technology Group GmbH & Co. KG</strong><br />
                  Anrather Straße 291<br />
                  47807 Krefeld<br /><br />
                  Persönlich haftende Gesellschafterin: SLT Management GmbH<br />
                  Geschäftsführer: Benedikt Nöchel<br /><br />
                  Telefon: +49 (0) 2151 - 417 99 02<br />
                  E-Mail:{" "}
                  <a href="mailto:info@slt-tg.de" className="text-primary hover:underline">info@slt-tg.de</a>
                </p>
                <p className="text-muted-foreground mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und 
                  Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Speicherdauer</h3>
                <p className="text-muted-foreground mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen 
                  Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder 
                  eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen 
                  Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); 
                  im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                <p className="text-muted-foreground mb-4">
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von 
                  Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO 
                  verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät 
                  (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von 
                  § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. 
                  Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, 
                  auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten 
                  Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Empfänger von personenbezogenen Daten</h3>
                <p className="text-muted-foreground mb-4">
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine 
                  Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann 
                  an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet 
                  sind, wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige 
                  Rechtsgrundlage die Datenweitergabe erlaubt.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-muted-foreground mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte 
                  Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                <p className="text-muted-foreground mb-4 text-sm font-medium">
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, 
                  aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten 
                  Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Wenn Sie Widerspruch einlegen, 
                  werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige 
                  Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient 
                  der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-muted-foreground mb-4">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere 
                  in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. 
                  Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die für uns zuständige Aufsichtsbehörde ist:<br />
                  Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
                  Kavalleriestraße 2–4, 40213 Düsseldorf<br />
                  <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.ldi.nrw.de
                  </a>
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Recht auf Datenübertragbarkeit</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, 
                  an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte 
                  Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Auskunft, Berichtigung und Löschung</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
                  gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein 
                  Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten 
                  können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                  Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-2 mb-4">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-muted-foreground mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, 
                  die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Widerspruch gegen Werbe-E-Mails</h3>
                <p className="text-muted-foreground mb-4">
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter 
                  Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche 
                  Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
              </section>

              {/* 4. Datenerfassung auf dieser Website */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">4. Datenerfassung auf dieser Website</h2>

                <h3 className="text-lg font-semibold text-foreground mb-3">Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. 
                  Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                  Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem 
                  Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter 
                  Funktionen oder zur Optimierung der Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                  gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der 
                  Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
                </p>
                <p className="text-muted-foreground mb-4">
                  Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die 
                  Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung 
                  ist jederzeit widerrufbar.
                </p>
                <p className="text-muted-foreground mb-4">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall 
                  erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies 
                  beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Cookie-Einwilligung</h3>
                <p className="text-muted-foreground mb-4">
                  Unsere Website nutzt eine eigene Cookie-Consent-Lösung, um Ihre Einwilligung zur Speicherung bestimmter Cookies in Ihrem 
                  Browser einzuholen und diese datenschutzkonform zu dokumentieren. Wenn Sie unsere Website betreten, wird ein Cookie in Ihrem 
                  Browser gespeichert, in dem die von Ihnen erteilten Einwilligungen oder der Widerruf dieser Einwilligungen gespeichert werden.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern bzw. das Cookie selbst löschen oder der Zweck 
                  für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt. Der Einsatz erfolgt, um die 
                  gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen (Art. 6 Abs. 1 lit. c DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Server-Log-Dateien</h3>
                <p className="text-muted-foreground mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf 
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                  Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien erfasst werden.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Kontaktformular</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen 
                  dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung 
                  eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht 
                  die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="text-muted-foreground mb-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung 
                  zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere 
                  Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Projektanfrageformular</h3>
                <p className="text-muted-foreground mb-4">
                  Über unser Projektanfrageformular können Sie uns detaillierte Informationen zu Ihrem Medientechnik-Projekt übermitteln. 
                  Dabei werden folgende Daten erhoben: Firma, Ansprechpartner, E-Mail, Telefon, Projektdetails (Raumtyp, Anzahl, Zeitrahmen, Budget, 
                  UC-Plattform, Anforderungen) sowie optional hochgeladene Dokumente (Grundrisse, Planungen etc.). Diese Daten werden ausschließlich 
                  zur Bearbeitung Ihrer Projektanfrage verwendet.
                </p>
                <p className="text-muted-foreground mb-4">
                  Hochgeladene Dokumente werden über einen verschlüsselten Kanal an unsere E-Mail-Adresse übermittelt und nicht dauerhaft 
                  auf unseren Servern gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
                  personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. 
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung 
                  eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht 
                  die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              {/* 5. E-Mail-Versand */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">5. E-Mail-Versand</h2>

                <h3 className="text-lg font-semibold text-foreground mb-3">Resend (Transaktionale E-Mails)</h3>
                <p className="text-muted-foreground mb-4">
                  Für den Versand von Bestätigungs-E-Mails im Zusammenhang mit Kontaktanfragen, Projektanfragen und Bewerbungen nutzen wir 
                  den Dienst Resend (Resend, Inc., San Francisco, CA, USA). Wenn Sie ein Formular auf unserer Website absenden, erhalten Sie 
                  eine automatische Eingangsbestätigung per E-Mail. Hierfür wird Ihre E-Mail-Adresse an Resend übermittelt.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Nutzung von Resend erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, 
                  den Eingang Ihrer Anfrage zu bestätigen und eine zuverlässige Kommunikation sicherzustellen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Resend:{" "}
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    resend.com/legal/privacy-policy
                  </a>.
                </p>
              </section>

              {/* 6. Plugins und Tools */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 lg:mb-6">6. Plugins und Tools</h2>

                <h3 className="text-lg font-semibold text-foreground mb-3">Google Fonts (lokales Hosting)</h3>
                <p className="text-muted-foreground mb-4">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. 
                  Die Google Fonts (Montserrat) werden über ein externes CDN geladen. Dabei kann Ihre IP-Adresse an den CDN-Anbieter übermittelt werden. 
                  Es erfolgt keine weitergehende Zusammenführung der Daten mit anderen Diensten von Google.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes 
                  Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt 
                  wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                </p>
                <p className="text-muted-foreground mb-4">
                  Weitere Informationen zu Google Fonts finden Sie unter{" "}
                  <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    developers.google.com/fonts/faq
                  </a>{" "}
                  und in der Datenschutzerklärung von Google:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    policies.google.com/privacy
                  </a>.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Google Maps</h3>
                <p className="text-muted-foreground mb-4">
                  Diese Seite nutzt ggf. den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), 
                  Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, 
                  Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA 
                  übertragen und dort gespeichert.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer 
                  leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne 
                  von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung 
                  ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                </p>
                <p className="text-muted-foreground mb-4">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    policies.google.com/privacy
                  </a>.
                </p>
              </section>

              {/* 7. Bewerberdaten */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">7. Umgang mit Bewerberdaten</h2>
                <p className="text-muted-foreground mb-4">
                  Wir bieten Ihnen die Möglichkeit, sich bei uns über ein Online-Bewerbungsformular zu bewerben. Im Folgenden informieren wir 
                  Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, 
                  dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren 
                  gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich behandelt werden.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Umfang und Zweck der Datenerhebung</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten 
                  (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer, Bildungsabschluss, Führerschein, Gehaltsvorstellung, Eintrittstermin, 
                  Lebenslauf, Anschreiben), soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. 
                  Rechtsgrundlage hierfür ist § 26 BDSG (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO 
                  (allgemeine Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. 
                  Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an Personen weitergegeben, 
                  die an der Bearbeitung Ihrer Bewerbung beteiligt sind.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Speicherung der Bewerbungsunterlagen</h3>
                <p className="text-muted-foreground mb-4">
                  Hochgeladene Lebensläufe werden verschlüsselt in einem geschützten Cloud-Speicher abgelegt und ausschließlich zur 
                  Bearbeitung Ihrer Bewerbung verwendet. Sofern die Bewerbung nicht zu einer Einstellung führt, werden die Daten spätestens 
                  6 Monate nach Abschluss des Bewerbungsverfahrens automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten 
                  Interessen des Verantwortlichen entgegenstehen. Sonstiges berechtigtes Interesse ist z.&nbsp;B. die Beweispflicht in einem 
                  Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">E-Mail-Benachrichtigung bei Bewerbungen</h3>
                <p className="text-muted-foreground mb-4">
                  Bei Eingang Ihrer Bewerbung wird automatisch eine Benachrichtigungs-E-Mail an unser Personalteam (karriere@slt-tg.de) 
                  gesendet. Ihre Bewerbungsunterlagen (inkl. Lebenslauf) werden dieser E-Mail als Anhang beigefügt. 
                  Sie erhalten gleichzeitig eine Bestätigungs-E-Mail über den Eingang Ihrer Bewerbung. Für den E-Mail-Versand wird 
                  der Dienst Resend verwendet (siehe Abschnitt 5).
                </p>
              </section>

              {/* 8. Änderung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">8. Änderung unserer Datenschutzbestimmungen</h2>
                <p className="text-muted-foreground mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen 
                  entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.&nbsp;B. bei der Einführung 
                  neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </section>

              {/* 9. Fragen */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">9. Fragen zum Datenschutz</h2>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die 
                  für den Datenschutz verantwortliche Person in unserer Organisation:
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">SLT Technology Group GmbH & Co. KG</strong><br />
                  Herr Benedikt Nöchel<br />
                  Anrather Straße 291<br />
                  DE-47807 Krefeld<br />
                  E-Mail:{" "}
                  <a href="mailto:datenschutz@slt-tg.de" className="text-primary hover:underline">
                    datenschutz@slt-tg.de
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
