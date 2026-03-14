import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  MapPin,
  Clock,
  ArrowRight,
  Upload,
  Briefcase,
  GraduationCap,
  Wrench,
  ChevronDown,
  FileText,
  X,
  Rocket,
} from "lucide-react";

import karriereHero from "@/assets/karriere-hero.png";
import iconFlexibleArbeitszeiten from "@/assets/benefits/flexible-arbeitszeiten.png";
import iconAltersvorsorge from "@/assets/benefits/altersvorsorge.png";
import iconLaptop from "@/assets/benefits/laptop.png";
import iconGetraenke from "@/assets/benefits/getraenke-fruechte.png";
import iconGrillplatz from "@/assets/benefits/grillplatz.png";
import iconWeiterbildung from "@/assets/benefits/weiterbildung.png";
import iconWeihnachtsfeier from "@/assets/benefits/weihnachtsfeier.png";
import iconArbeitskleidung from "@/assets/benefits/arbeitskleidung.png";
import iconBonussystem from "@/assets/benefits/bonussystem.png";
import iconFeedbackkultur from "@/assets/benefits/feedbackkultur.png";

const jobPositions = [
  {
    id: "ausbildung-bueromanagement",
    title: "Ausbildung zum Kaufmann / zur Kauffrau für Büromanagement (m/w/d)",
    location: "Krefeld oder Bonn",
    type: "Vollzeit",
    start: "Ausbildungsbeginn: 01.08.2026",
    icon: GraduationCap,
    isAzubi: true,
    description:
      "Du organisierst gerne, behältst den Überblick und möchtest in einem innovativen Tech-Unternehmen durchstarten? Dann ist diese Ausbildung genau das Richtige für dich.",
    tasks: [
      "Büroorganisation und Terminplanung",
      "Kundenkommunikation und -betreuung",
      "Rechnungswesen und Auftragsbearbeitung",
      "Unterstützung bei Projekten und Events",
      "Nutzung moderner KI-Tools zur Optimierung kaufmännischer Prozesse",
    ],
    requirements: [
      "Mittlere Reife oder (Fach-)Abitur",
      "Organisationstalent und Eigeninitiative",
      "Gute Deutsch- und Englischkenntnisse",
      "Sicherer Umgang mit MS Office",
      "Interesse an KI-gestützten Arbeitsmethoden und digitalen Tools",
    ],
  },
  {
    id: "ausbildung-veranstaltungstechnik",
    title: "Ausbildung zur Fachkraft für Veranstaltungstechnik (m/w/d)",
    location: "Krefeld",
    type: "Vollzeit",
    start: "Ausbildungsbeginn: 01.08.2026",
    subtitle: "Schwerpunkt: AV-Systemintegration",
    icon: Wrench,
    isAzubi: true,
    description:
      "Du bist technikbegeistert und möchtest lernen, wie professionelle AV-Systeme geplant, installiert und konfiguriert werden? Werde Teil unseres Teams!",
    tasks: [
      "Planung und Installation von AV-Systemen",
      "Konfiguration von Videokonferenz-Lösungen",
      "Technischer Support und Inbetriebnahme",
      "Mitarbeit bei Kundenprojekten vor Ort",
    ],
    requirements: [
      "Mittlere Reife oder (Fach-)Abitur",
      "Technisches Verständnis und handwerkliches Geschick",
      "Teamfähigkeit und Zuverlässigkeit",
      "Führerschein Klasse B von Vorteil",
    ],
  },
  {
    id: "medientechniker",
    title: "Medientechniker (m/w/d)",
    location: "Krefeld",
    type: "Vollzeit",
    start: "Arbeitsbeginn: ab sofort",
    subtitle: "Schwerpunkt Installation & Konfiguration",
    icon: Briefcase,
    isAzubi: false,
    description:
      "Du bist erfahren in der Medientechnik und möchtest hochwertige Konferenz- und Kollaborationslösungen für namhafte Kunden realisieren? Dann suchen wir genau dich!",
    tasks: [
      "Installation und Konfiguration von AV-/UC-Systemen",
      "Inbetriebnahme von Videokonferenzräumen",
      "Fehlerdiagnose und technischer Support",
      "Dokumentation und Kundeneinweisung",
    ],
    requirements: [
      "Abgeschlossene Ausbildung im Bereich Medientechnik oder vergleichbar",
      "Erfahrung mit Crestron, Extron, Shure, Sennheiser o.ä.",
      "Kenntnisse in Netzwerktechnik (IP, VLAN)",
      "Führerschein Klasse B erforderlich",
    ],
  },
];

const benefits = [
  { image: iconFlexibleArbeitszeiten, label: "Flexible Arbeitszeiten" },
  { image: iconAltersvorsorge, label: "Betriebliche Altersvorsorge" },
  { image: iconLaptop, label: "Eigener Laptop" },
  { image: iconGetraenke, label: "Küche mit Getränken & Obst" },
  { image: iconGrillplatz, label: "Grillplatz" },
  { image: iconWeiterbildung, label: "Weiterbildungen" },
  { image: iconWeihnachtsfeier, label: "Weihnachtsfeier" },
  { image: iconArbeitskleidung, label: "Arbeitskleidung" },
  { image: iconBonussystem, label: "Bonussystem" },
  { image: iconFeedbackkultur, label: "Offene Feedbackkultur" },
];

export default function Karriere() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: formAnimRef, isVisible: formVisible } = useScrollAnimation();

  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyingForJob, setApplyingForJob] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const isAzubiPosition = (position: string) => {
    const job = jobPositions.find((j) => j.title === position);
    return job?.isAzubi ?? false;
  };

  const openApplicationForm = (job: typeof jobPositions[0]) => {
    setApplyingForJob(job.id);
    setSelectedPosition(job.title);
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const closeApplicationForm = () => {
    setApplyingForJob(null);
    setSelectedPosition("");
    setCvFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Datei zu groß", description: "Maximale Dateigröße: 10 MB", variant: "destructive" });
        return;
      }
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowed.includes(file.type)) {
        toast({ title: "Ungültiges Format", description: "Bitte laden Sie eine PDF- oder Word-Datei hoch.", variant: "destructive" });
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string).trim();
    const lastName = (formData.get("lastName") as string).trim();
    const email = (formData.get("email") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const message = (formData.get("message") as string).trim();
    const startDate = (formData.get("startDate") as string).trim();
    const educationCompleted = (formData.get("educationCompleted") as string)?.trim() || null;
    const hasDriversLicense = (formData.get("hasDriversLicense") as string)?.trim() || null;
    const salaryExpectation = (formData.get("salaryExpectation") as string)?.trim() || null;

    if (!firstName || !lastName || !email || !selectedPosition) {
      toast({ title: "Pflichtfelder ausfüllen", description: "Bitte füllen Sie alle Pflichtfelder aus.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    try {
      let cvPath: string | null = null;

      if (cvFile) {
        const fileExt = cvFile.name.split(".").pop();
        const filePath = `${Date.now()}-${firstName}-${lastName}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("cv-uploads")
          .upload(filePath, cvFile);
        if (uploadError) throw uploadError;
        cvPath = filePath;
      }

      const { error } = await supabase.from("job_applications").insert({
        position: selectedPosition,
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        message: message || null,
        cv_file_path: cvPath,
        start_date: startDate || null,
        education_completed: educationCompleted,
        has_drivers_license: hasDriversLicense,
        salary_expectation: salaryExpectation,
      });

      if (error) throw error;

      // Send email notification to karriere@slt-tg.de
      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            type: "job-application",
            name: `${firstName} ${lastName}`,
            email,
            phone: phone || undefined,
            message: message || undefined,
            position: selectedPosition,
            firstName,
            lastName,
            startDate: startDate || undefined,
            educationCompleted: educationCompleted || undefined,
            hasDriversLicense: hasDriversLicense || undefined,
            salaryExpectation: salaryExpectation || undefined,
            hasCv: !!cvPath,
            cvFilePath: cvPath || undefined,
          },
        });
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
      }

      toast({ title: "Bewerbung gesendet! ✅", description: "Vielen Dank für Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen." });
      (e.target as HTMLFormElement).reset();
      setCvFile(null);
      closeApplicationForm();
    } catch (err) {
      console.error(err);
      toast({ title: "Fehler", description: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Karriere & Jobs – Jetzt bei SLT bewerben"
        description="Starte deine Karriere bei der SLT Technology Group. Offene Stellen in den Bereichen Medientechnik, AV-Systemintegration und Büromanagement in Krefeld und Bonn."
        keywords="Karriere, Jobs, Medientechniker, Ausbildung, SLT Technology Group, AV-Technik, Krefeld, Bonn"
        canonical="/karriere"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Karriere bei SLT Technology Group",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Offene Stellen",
            "itemListElement": jobPositions.map((job, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "JobPosting",
                "title": job.title,
                "hiringOrganization": { "@type": "Organization", "name": "SLT Technology Group GmbH & Co. KG", "sameAs": "https://www.slt-tg.de" },
                "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": job.location, "addressCountry": "DE" } },
                "employmentType": job.type === "Vollzeit" ? "FULL_TIME" : "FULL_TIME",
                "description": job.description
              }
            }))
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[100svh] flex flex-col">
        <img
          src={karriereHero}
          alt="Karriere bei der SLT Technology Group – offene Stellen in der Medientechnik und IT-Branche"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center lg:object-right-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40 sm:bg-gradient-to-r sm:from-primary/85 sm:via-primary/60 sm:to-transparent" />
        {/* Spacer for header */}
        <div className="h-20 lg:h-24 shrink-0" />
        {/* Content - vertically distributed */}
        <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-2">
          <div
            ref={heroRef}
            className={`relative z-10 max-w-xl scroll-hidden ${heroVisible ? "scroll-visible" : ""}`}
          >
            <Badge className="bg-accent/15 border border-accent/40 text-accent mb-3 sm:mb-5 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">
              Wir stellen ein 🚀
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 leading-tight text-primary-foreground">
              Starte mit uns durch.
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-primary-foreground/90 max-w-lg mb-4 sm:mb-6">
              Wir suchen stetig neue und technikbegeisterte Talente, die sich gemeinsam mit uns entwickeln möchten.
            </p>
            <Button
              size="lg"
              className="bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent group text-sm sm:text-base"
              onClick={() => document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })}
            >
              Offene Stellen ansehen
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Company Profile - below text, pushed to bottom */}
          <div ref={profileRef} className={`relative z-10 max-w-2xl scroll-hidden ${profileVisible ? "scroll-visible" : ""}`}>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-3 sm:p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/15 flex items-center justify-center shrink-0">
                  <Rocket className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-accent uppercase tracking-wider leading-none">Unternehmensprofil</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80 mt-0.5">
                    <span className="font-bold text-primary-foreground">SLT Technology Group</span> – Hochwertige Videokonferenzlösungen auf Enterprise-Niveau, deutschlandweit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section ref={jobsRef} id="positions" className={`py-12 sm:py-16 md:py-24 scroll-hidden ${jobsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">
            Offene Stellen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-10">
            Stellenmarkt
          </h2>
          <div className="space-y-4">
            {jobPositions.map((job, index) => {
              const Icon = job.icon;
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card
                    className={`card-hover overflow-hidden transition-all duration-300 ${
                      isExpanded ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    <button
                      className="w-full text-left"
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    >
                      <CardContent className="p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 leading-snug">
                              {job.title}
                            </h3>
                            {job.subtitle && (
                              <p className="text-sm text-accent font-medium mb-2">{job.subtitle}</p>
                            )}
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" /> {job.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" /> {job.type}
                              </span>
                              <span className="text-primary font-medium">{job.start}</span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardContent>
                    </button>

                    {isExpanded && (
                      <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 animate-fade-in-up border-t border-border pt-4 sm:pt-6">
                        <p className="text-muted-foreground mb-6">{job.description}</p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="font-bold text-foreground mb-3">Deine Aufgaben</h4>
                            <ul className="space-y-2">
                              {job.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-3">Das bringst du mit</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {applyingForJob !== job.id ? (
                          <Button
                            className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                            onClick={() => openApplicationForm(job)}
                          >
                            Jetzt auf diese Stelle bewerben
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        ) : (
                          <div ref={formSectionRef} className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="text-lg font-bold text-foreground">Bewerbung für diese Stelle</h4>
                              <button
                                type="button"
                                onClick={closeApplicationForm}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                              {/* Name */}
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="firstName" className="font-semibold">Vorname *</Label>
                                  <Input id="firstName" name="firstName" required placeholder="Max" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="lastName" className="font-semibold">Nachname *</Label>
                                  <Input id="lastName" name="lastName" required placeholder="Mustermann" />
                                </div>
                              </div>

                              {/* Contact */}
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="email" className="font-semibold">E-Mail *</Label>
                                  <Input id="email" name="email" type="email" required placeholder="max@beispiel.de" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="phone" className="font-semibold">Telefon</Label>
                                  <Input id="phone" name="phone" type="tel" placeholder="+49 123 456 789" />
                                </div>
                              </div>

                              {/* Education & Driver's License */}
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="educationCompleted" className="font-semibold">Höchster Bildungsabschluss *</Label>
                                  <select
                                    id="educationCompleted"
                                    name="educationCompleted"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                  >
                                    <option value="">Bitte auswählen...</option>
                                    <option value="Hauptschulabschluss">Hauptschulabschluss</option>
                                    <option value="Mittlere Reife">Mittlere Reife / Realschulabschluss</option>
                                    <option value="Fachabitur">Fachabitur</option>
                                    <option value="Abitur">Abitur</option>
                                    <option value="Ausbildung abgeschlossen">Abgeschlossene Berufsausbildung</option>
                                    <option value="Studium abgeschlossen">Abgeschlossenes Studium</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                  </select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="hasDriversLicense" className="font-semibold">Führerschein</Label>
                                  <select
                                    id="hasDriversLicense"
                                    name="hasDriversLicense"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                  >
                                    <option value="">Bitte auswählen...</option>
                                    <option value="Ja, Klasse B">Ja, Klasse B</option>
                                    <option value="Ja, andere Klasse">Ja, andere Klasse</option>
                                    <option value="In Ausbildung">In Ausbildung</option>
                                    <option value="Nein">Nein</option>
                                  </select>
                                </div>
                              </div>

                              {/* Salary (not for Azubi) */}
                              {!isAzubiPosition(selectedPosition) && (
                                <div className="space-y-2">
                                  <Label htmlFor="salaryExpectation" className="font-semibold">Gehaltsvorstellung (brutto/Jahr)</Label>
                                  <Input id="salaryExpectation" name="salaryExpectation" placeholder="z.B. 40.000 € – 45.000 €" />
                                </div>
                              )}

                              {/* Start date */}
                              <div className="space-y-2">
                                <Label htmlFor="startDate" className="font-semibold">Frühestmöglicher Eintrittstermin</Label>
                                <Input id="startDate" name="startDate" placeholder={job.isAzubi ? "z.B. 01.08.2026" : "z.B. ab sofort oder Datum"} />
                              </div>

                              {/* CV Upload */}
                              <div className="space-y-2">
                                <Label className="font-semibold">Lebenslauf hochladen (PDF/Word, max. 10 MB)</Label>
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                  className="hidden"
                                />
                                {cvFile ? (
                                  <div className="flex items-center gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5">
                                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-sm text-foreground flex-1 truncate">{cvFile.name}</span>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCvFile(null);
                                        if (fileInputRef.current) fileInputRef.current.value = "";
                                      }}
                                      className="text-muted-foreground hover:text-destructive transition-colors"
                                    >
                                      <X className="h-4 w-4" />
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full flex flex-col items-center gap-2 p-6 rounded-lg border-2 border-dashed border-input hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                                  >
                                    <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                      Klicken zum Hochladen
                                    </span>
                                    <span className="text-xs text-muted-foreground">PDF oder Word, max. 10 MB</span>
                                  </button>
                                )}
                              </div>

                              {/* Message */}
                              <div className="space-y-2">
                                <Label htmlFor="message" className="font-semibold">Anschreiben / Nachricht</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  rows={4}
                                  placeholder="Erzählen Sie uns, warum Sie bei der SLT Technology Group durchstarten möchten..."
                                />
                              </div>

                              <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground btn-glow group"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
                                {!isSubmitting && (
                                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                )}
                              </Button>

                              <p className="text-xs text-muted-foreground text-center">
                                Mit dem Absenden stimmen Sie unserer{" "}
                                <a href="/datenschutz" className="underline hover:text-primary transition-colors">
                                  Datenschutzerklärung
                                </a>{" "}
                                zu.
                              </p>
                            </form>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className={`py-12 sm:py-16 md:py-24 bg-secondary/30 scroll-hidden ${benefitsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">
            Wir möchten etwas zurückgeben
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-10">
            Das bieten wir unserem Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
                <div
                  key={benefit.label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <img src={benefit.image} alt={benefit.label} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
