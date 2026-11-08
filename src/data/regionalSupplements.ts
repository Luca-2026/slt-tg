/** Approved additive editorial scope, 08.11.2026. Original city JSON is immutable.
 * Grounding: existing solutionPages, pillar pages and city requirements; no new local facts.
 */
export const regionalSupplements: Record<string, { title: string; text: string }> = {
  "/medientechnik/essen": {
    title: "Bestehende Technik beim Flächenwechsel prüfen",
    text: "Bei einem Flächenwechsel sollten vorhandene Displays, Anschlüsse und Bedienkonzepte gemeinsam geprüft werden. Entscheidend ist, ob sie zur neuen Raumaufteilung und zur vorgesehenen Nutzung passen. Eine Bestandsaufnahme hilft, Weiterverwendung und notwendige Ergänzungen voneinander abzugrenzen. Dabei sind Betrachtungsabstände ebenso relevant wie die Verbindung zur vorhandenen IT. Ein technisch funktionsfähiges Gerät ist nicht automatisch die passende Lösung für einen anders geschnittenen Raum; Raumkonzept und Ausstattung werden deshalb zusammen betrachtet.",
  },
  "/medientechnik/duisburg": {
    title: "Bild, Ton und Nutzung zusammenführen",
    text: "Für einen Besprechungs- oder Schulungsbereich ist zunächst wichtig, welche Inhalte dargestellt und welche Personen eingebunden werden sollen. Präsentationen, Tabellen und zugeschaltete Gesprächspartner stellen unterschiedliche Anforderungen an Displays und Audio. Vorhandene Anschlüsse und Leitungswege bilden dabei den Ausgangspunkt. Die technische Auswahl sollte sich an den tatsächlichen Nutzungspositionen orientieren. Auch der Wechsel zwischen interner Präsentation und hybridem Gespräch gehört in die Betrachtung, damit Komponenten nicht isoliert geplant werden.",
  },
  "/medientechnik/moenchengladbach": {
    title: "Modernisierung anhand des Bestands planen",
    text: "Eine Modernisierung beginnt nicht zwingend mit dem Austausch aller Geräte. Zunächst lässt sich erfassen, welche Displays, Signalwege und Bedienmöglichkeiten bereits vorhanden sind. Danach wird geprüft, ob sie die vorgesehenen Funktionen unterstützen. Raumtiefe und typische Dokumente beeinflussen die erforderliche Bildgröße; Mikrofonpositionen müssen zur Sitzordnung passen. Mit dieser Einordnung können notwendige Ergänzungen von weiter nutzbaren Komponenten getrennt werden. Netzwerkanschlüsse und die Anbindung an Unternehmensgeräte gehören ebenfalls zur Bestandsbetrachtung.",
  },
  "/konferenztechnik/bonn": {
    title: "Standardräume im realen Meeting testen",
    text: "Ein Raumstandard sollte die üblichen Besprechungen abbilden, nicht nur eine Liste von Geräten. Dazu gehören die gewählte Konferenzplattform, typische Präsentationsinhalte und die tatsächlich genutzten Sitzplätze. In einem Referenzraum lassen sich Kameraansicht, Sprachaufnahme und Bedienung gemeinsam beurteilen. Auch der Anschluss eines Gastnotebooks kann relevant sein. Die Ergebnisse helfen, notwendige Anpassungen vor einer Übertragung auf weitere Räume festzuhalten. Bestehende IT-Vorgaben bleiben dabei die Grundlage für das technische Konzept.",
  },
  "/konferenztechnik/essen": {
    title: "Raumtypen vor der Serienausstattung unterscheiden",
    text: "Bei mehreren Konferenzräumen lohnt sich eine Einteilung nach Nutzung und Geometrie. Ein kleiner Besprechungsraum und ein großer Boardroom können dieselbe Bedienlogik nutzen, benötigen aber nicht dieselben Mikrofone oder Displays. Deshalb sollten Raumtiefe, Sitzordnung und Präsentationsinhalte vor der Geräteauswahl erfasst werden. Für die Übertragung eines Standards sind dokumentierte Anschlüsse und Einstellungen hilfreich. Eine gemeinsame Prüfung mit der IT zeigt außerdem, welche Vorgaben an jedem weiteren Standort berücksichtigt werden müssen.",
  },
  "/konferenztechnik/duisburg": {
    title: "Besprechung und Schulung getrennt bewerten",
    text: "Eine Besprechung am Tisch und eine Schulung mit Vortrag haben unterschiedliche Sprecherpositionen. Das beeinflusst Mikrofonabdeckung, Lautsprecheranordnung und Kameraperspektive. Hinzu kommen die üblichen Inhalte auf dem Display: Kleine Tabellen müssen auch von den hinteren Plätzen lesbar sein. Für die Planung ist deshalb der konkrete Ablauf wichtiger als eine pauschale Ausstattungsliste. Präsentation, Gespräch und gegebenenfalls zugeschaltete Teilnehmende werden gemeinsam betrachtet. Vorhandene Kabelwege und Plattformvorgaben begrenzen die technisch sinnvollen Varianten.",
  },
  "/konferenztechnik/moenchengladbach": {
    title: "Bedienung zwischen Räumen nachvollziehbar halten",
    text: "Wenn Mitarbeitende zwischen mehreren Räumen wechseln, ist ein wiedererkennbarer Ablauf hilfreich. Quellenwahl, Konferenzstart und Lautstärkeregelung sollten sich an den benötigten Funktionen orientieren. Unterschiede in Raumgröße und vorhandener Ausstattung müssen trotzdem berücksichtigt werden. Ein Test mit den üblichen Endgeräten zeigt, welche Schritte im Alltag tatsächlich notwendig sind. Daraus lassen sich Anforderungen an Steuerung und Anschlüsse ableiten. Die technische Dokumentation bildet anschließend die Grundlage für Betreuung und spätere Änderungen am Raum.",
  },
  "/videokonferenz/krefeld": {
    title: "Aufnahme aus Sicht der Gegenseite prüfen",
    text: "Bei einer Videokonferenz zählt nicht nur der Eindruck im eigenen Raum. Die zugeschalteten Personen müssen Sprache verstehen und die relevanten Gesprächspartner sehen können. Ein gemeinsamer Test mit einer entfernten Person macht Aufnahme und Wiedergabe nachvollziehbar. Unterschiedliche Sitzpositionen sollten dabei einbezogen werden. Auch Präsentationsinhalte und der Wechsel zwischen Sprecherbild und geteiltem Dokument gehören zum Ablauf. Auf dieser Grundlage lassen sich Kamera, Mikrofon und Display passend zum tatsächlichen Meetingkonzept bewerten.",
  },
  "/videokonferenz/bonn": {
    title: "Raumkonto oder eigenes Notebook klären",
    text: "Ein festes Raumsystem und eine Konferenz über das eigene Notebook sind unterschiedliche Betriebsmodelle. Die Wahl beeinflusst Anmeldung, verfügbare Anschlüsse und die Nutzung von Kamera und Audio. Für die Planung sollten deshalb die übliche Plattform und der Umgang mit Gästen bekannt sein. Die vorhandene IT entscheidet mit, welche Geräte und Zugänge zulässig sind. Erst im Zusammenspiel dieser Vorgaben lässt sich beurteilen, welche Ausstattung den vorgesehenen Ablauf unterstützt und welche Bestandstechnik geeignet bleibt.",
  },
  "/videokonferenz/essen": {
    title: "Plattformvorgaben mit Gastnutzung abstimmen",
    text: "Ein vorgegebenes Raumsystem beantwortet noch nicht jede Frage zur Zusammenarbeit mit externen Personen. Relevant ist auch, ob andere Plattformen über ein Gastnotebook genutzt werden sollen und wie dieses die Raumkamera und Audio erreicht. Die vorgesehenen Anschlüsse müssen zum Betriebsmodell passen. Für interne Meetings stehen dagegen Raumkonten und die Einbindung in die Geräteverwaltung im Vordergrund. Beide Szenarien sollten vor der Auswahl getrennt betrachtet und anschließend mit typischen Besprechungen im Raum geprüft werden.",
  },
  "/videokonferenz/duisburg": {
    title: "Sitzordnung und Sprachaufnahme abstimmen",
    text: "Die Mikrofonplanung orientiert sich daran, wo Teilnehmende sitzen und ob sich diese Anordnung verändert. Bei langen Tischen oder wechselnden Schulungspositionen ist eine andere Abdeckung nötig als in einer kleinen Gesprächsrunde. Die Kamera sollte die relevanten Personen ebenfalls aus geeigneten Perspektiven erfassen. Ein Testgespräch mit einer entfernten Person hilft, diese Anforderungen gemeinsam zu beurteilen. Bestehende Lautsprecher, Raumakustik und Plattformanschlüsse werden dabei einbezogen, statt nur die Bildqualität eines einzelnen Geräts zu vergleichen.",
  },
  "/videokonferenz/moenchengladbach": {
    title: "Hybridbetrieb als vollständigen Ablauf betrachten",
    text: "Für ein hybrides Meeting gehören Verbindung, Sprachübertragung und Inhaltsfreigabe zusammen. Vor der Geräteauswahl ist zu klären, ob die Konferenz vom Raum oder vom Notebook gesteuert wird. Danach lassen sich notwendige Kamera- und Audioanschlüsse bestimmen. Auch Gastgeräte und die vorhandene Netzwerkumgebung spielen eine Rolle. Ein durchgehender Test vom Start bis zum Sitzungsende zeigt, ob diese Schnittstellen zum geplanten Ablauf passen. Die übliche Sitzordnung bleibt die Grundlage für Bildausschnitt und Mikrofonabdeckung.",
  },
  "/it-netzwerk/krefeld": {
    title: "AV-Endgeräte in die Netzplanung aufnehmen",
    text: "Displays, Konferenzsysteme und Präsentationslösungen sollten bei der Netzwerkplanung als konkrete Endgeräte erfasst werden. Benötigte Anschlüsse, vorhandene Switches und die gewünschte Verwaltung bestimmen die technische Einbindung. Auch die Trennung von Gastzugängen und internen Systemen ist dabei relevant. Sicherheitsvorgaben dürfen notwendige Kommunikation zwischen Komponenten nicht unbeabsichtigt verhindern. Deshalb werden Funktionen und Verbindungen gemeinsam mit der zuständigen IT betrachtet. Eine Bestandsaufnahme schafft die Grundlage für nachvollziehbare Erweiterungen, statt vorhandene Netzwerkdosen pauschal als ausreichend anzusehen.",
  },
  "/it-netzwerk/koeln": {
    title: "Neue Flächen mit dem IT-Bestand abgleichen",
    text: "Beim Ausbau einer Fläche werden Anschlussbedarf und vorhandene Infrastruktur gemeinsam betrachtet. Raumtechnik, Arbeitsplätze und WLAN benötigen nicht automatisch dieselben Verbindungen oder Zugriffsrechte. Hilfreich ist deshalb eine Übersicht der vorgesehenen Geräte und ihrer Funktionen. Darauf aufbauend lassen sich Verkabelung, Netzwerksegmente und Zuständigkeiten abstimmen. Für drahtlose Systeme sind auch die tatsächlich genutzten Bereiche relevant. Ein späterer Betrieb wird nachvollziehbarer, wenn Anschlüsse und Konfigurationsstände dokumentiert sind und Änderungen mit der IT abgestimmt werden.",
  },
  "/it-netzwerk/bonn": {
    title: "Zugänge und Geräteverwaltung zusammendenken",
    text: "Ein Netzwerkkonzept muss sowohl die vorgesehenen Endgeräte als auch deren Verwaltung berücksichtigen. Raumkonten, Gastgeräte und fest installierte Systeme können unterschiedliche Zugriffsanforderungen haben. Welche Verbindungen benötigt werden, ergibt sich aus den tatsächlichen Funktionen und der bestehenden Sicherheitsarchitektur. Diese Abstimmung sollte vor der Installation erfolgen. Für WLAN gehören Nutzungsflächen und bauliche Bedingungen in die Planung. Dokumentierte Geräte und Einstellungen erleichtern anschließend die Einordnung von Störungen und die Abstimmung geplanter Änderungen mit der internen IT.",
  },
  "/it-netzwerk/essen": {
    title: "Netzwerkänderungen beim Umzug erfassen",
    text: "Ein neuer Grundriss verändert häufig die Positionen von Arbeitsplätzen, Besprechungsräumen und drahtlosen Endgeräten. Vorhandene Netzwerkkomponenten sollten deshalb anhand der neuen Nutzung bewertet werden. Relevant sind Anschlussbedarf, Kabelwege und die Einbindung in die bestehende Verwaltung. Für WLAN ist die tatsächlich erforderliche Abdeckung zu prüfen, statt Access Points nur aus dem alten Plan zu übernehmen. Gemeinsam mit der IT lassen sich erforderliche Anpassungen und weiter nutzbare Infrastruktur trennen. Dokumentierte Anschlüsse unterstützen den späteren Betrieb.",
  },
  "/it-netzwerk/duisburg": {
    title: "Nutzungsflächen vor der WLAN-Auslegung bestimmen",
    text: "Für die WLAN-Planung ist zunächst zu klären, in welchen Bereichen welche Endgeräte eingesetzt werden. Gebäudestruktur und Montagebedingungen beeinflussen die geeigneten Positionen von Access Points. Die vorhandene Verkabelung und Netzwerkverwaltung bilden weitere Rahmenbedingungen. Ein Site Survey liefert Informationen zur tatsächlichen Abdeckung; darauf können Anpassungen des Konzepts aufbauen. Bei mehreren Bereichen sollten Gastzugänge und interne Nutzung ebenfalls unterschieden werden. Die endgültige Auslegung richtet sich nach den erfassten Anforderungen und dem Bestand, nicht allein nach der Gebäudegröße.",
  },
  "/it-netzwerk/moenchengladbach": {
    title: "Anschlüsse und Zuständigkeiten dokumentieren",
    text: "Eine Erweiterung der IT-Infrastruktur sollte die späteren Verantwortlichkeiten von Anfang an berücksichtigen. Welche Geräte betreut die interne IT, welche Systeme gehören zur Raumtechnik und welche Verbindungen sind dafür erforderlich? Eine Übersicht von Anschlüssen, Netzwerksegmenten und Konfigurationsständen hilft, diese Fragen nachvollziehbar zu beantworten. Bei drahtlosen Komponenten kommen die vorgesehenen Nutzungsflächen hinzu. Bestehende Sicherheitsregeln bleiben der Rahmen für die technische Einbindung. So können Änderungen geplant werden, ohne Netzwerk und AV-Ausstattung als voneinander unabhängige Bereiche zu behandeln.",
  },
  "/digital-signage/krefeld": {
    title: "Inhalte und Ausspielung vor der Gerätewahl klären",
    text: "Ein Digital-Signage-Konzept beginnt mit den Informationen, die gezeigt werden sollen. Texttafeln, Bilder und wechselnde Hinweise stellen unterschiedliche Anforderungen an Lesbarkeit und Bildschirmformat. Ebenso wichtig ist, wer Inhalte bereitstellt und welche Displays gemeinsam bespielt werden. Diese Zuständigkeiten beeinflussen die Auswahl der Inhaltsverwaltung. Montageort und Netzwerkanschluss müssen zum Betrieb passen. Vorhandene Displays können geprüft werden, sollten aber nicht ohne Bewertung von Betrachtungsabstand und Nutzung übernommen werden. Die Hardwareauswahl folgt damit dem tatsächlichen Informationsbedarf.",
  },
  "/digital-signage/koeln": {
    title: "Empfangsinformationen sinnvoll strukturieren",
    text: "Für einen Empfangsbereich ist wichtig, welche Informationen Besuchende aus welcher Entfernung lesen sollen. Eine kurze Begrüßung und eine detaillierte Übersicht brauchen unterschiedliche Darstellung. Bildschirmposition und Format sollten deshalb anhand typischer Inhalte bewertet werden. Außerdem muss feststehen, wer Aktualisierungen übernimmt und wie diese an die Geräte verteilt werden. Die Netzwerkumgebung und vorhandene Anschlüsse gehören zu diesem Konzept. Ein Test mit realen Inhaltsbeispielen hilft, Lesbarkeit und Ausspielung vor der endgültigen Einrichtung gemeinsam zu beurteilen.",
  },
  "/digital-signage/bonn": {
    title: "Aktualisierung und Verantwortlichkeiten festlegen",
    text: "Informationsdisplays benötigen nicht nur einen passenden Montageort, sondern auch einen nachvollziehbaren Weg für neue Inhalte. Vor der Einrichtung ist zu klären, welche Personen die Informationen pflegen und welche Geräte dieselben Inhalte zeigen sollen. Daraus ergeben sich Anforderungen an Verwaltung und Ausspielung. Für die Darstellung sind Betrachtungsabstand und Textumfang relevant. Bestehende Netzwerkanschlüsse und Sicherheitsvorgaben bilden den technischen Rahmen. Diese Fragen sollten zusammen beantwortet werden, damit ein Display nicht ohne abgestimmtes Inhalts- und Betriebskonzept installiert wird.",
  },
  "/digital-signage/essen": {
    title: "Displays bei Neubezug passend einordnen",
    text: "Beim Neubezug einer Fläche lässt sich die Position von Informationsdisplays an den tatsächlichen Wegen der Nutzenden ausrichten. Dabei zählt, welche Inhalte am Empfang oder in internen Bereichen benötigt werden. Vorhandene Bildschirme sollten hinsichtlich Format, Anschlüssen und Lesbarkeit geprüft werden. Die Inhaltsverwaltung muss zur geplanten Verteilung und zu den Zuständigkeiten passen. Auch Netzwerkzugang und Betreuung gehören zur Einordnung. So wird entschieden, ob ein bestehendes Gerät sinnvoll weiterverwendet werden kann oder eine Ergänzung erforderlich ist.",
  },
  "/digital-signage/duisburg": {
    title: "Informationen an den Nutzungskontext anpassen",
    text: "Eine Informationsfläche im Empfang erfüllt andere Aufgaben als ein Display für interne Hinweise. Inhalt, Textgröße und Betrachtungsabstand sollten deshalb zusammen festgelegt werden. Auch die Häufigkeit von Aktualisierungen und die verantwortlichen Personen beeinflussen das Konzept. Welche Bildschirme gemeinsam oder getrennt bespielt werden, ist vor der technischen Auswahl zu klären. Montagebedingungen und vorhandene Netzwerkverbindungen bilden den Rahmen der Umsetzung. Die Ausspielung lässt sich anschließend mit typischen Inhalten prüfen, bevor weitere Geräte nach demselben Konzept eingerichtet werden.",
  },
  "/digital-signage/moenchengladbach": {
    title: "Darstellung und Verwaltung aufeinander abstimmen",
    text: "Bei mehreren Informationsdisplays ist zu unterscheiden, welche Hinweise überall gelten und welche nur an einer bestimmten Fläche benötigt werden. Diese Einteilung hilft, Zuständigkeiten und Inhaltsverteilung festzulegen. Die Geräteauswahl orientiert sich an Format, Betrachtungsabstand und den vorgesehenen Inhalten. Bestehende Anschlüsse und Netzwerkregeln werden dabei berücksichtigt. Für den späteren Betrieb sind nachvollziehbare Aktualisierungswege wichtig. Ein gemeinsamer Test mit den üblichen Texten und Bildern zeigt, ob Darstellung und Verwaltung zum geplanten Einsatz der Displays passen.",
  },
};