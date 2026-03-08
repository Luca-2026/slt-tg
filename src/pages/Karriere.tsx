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
  Coffee,
  Shield,
  Laptop,
  Apple,
  Flame,
  BookOpen,
  PartyPopper,
  Shirt,
  Trophy,
  MessageCircle,
  ChevronDown,
  FileText,
  X,
  Rocket,
} from "lucide-react";

import introRakete from "@/assets/intro-rakete.png";

const jobPositions = [
  {
    id: "ausbildung-bueromanagement",
    title: "Ausbildung zum Kaufmann / zur Kauffrau für Büromanagement (m/w/d)",
    location: "Krefeld oder Bonn",
    type: "Vollzeit",
    start: "Ausbildungsbeginn: 01.08.2026",
    icon: GraduationCap,
    description:
      "Du organisierst gerne, behältst den Überblick und möchtest in einem innovativen Tech-Unternehmen durchstarten? Dann ist diese Ausbildung genau das Richtige für dich.",
    tasks: [
      "Büroorganisation und Terminplanung",
      "Kundenkommunikation und -betreuung",
      "Rechnungswesen und Auftragsbearbeitung",
      "Unterstützung bei Projekten und Events",
    ],
    requirements: [
      "Mittlere Reife oder (Fach-)Abitur",
      "Organisationstalent und Eigeninitiative",
      "Gute Deutsch- und Englischkenntnisse",
      "Sicherer Umgang mit MS Office",
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
  { icon: Clock, label: "Flexible Arbeitszeiten" },
  { icon: Shield, label: "Betriebliche Altersvorsorge" },
  { icon: Laptop, label: "Eigener Laptop" },
  { icon: Apple, label: "Küche mit Getränken & Obst" },
  { icon: Flame, label: "Grillplatz" },
  { icon: BookOpen, label: "Weiterbildungen" },
  { icon: PartyPopper, label: "Weihnachtsfeier" },
  { icon: Shirt, label: "Arbeitskleidung" },
  { icon: Trophy, label: "Bonussystem" },
  { icon: MessageCircle, label: "Offene Feedbackkultur" },
];

export default function Karriere() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: formAnimRef, isVisible: formVisible } = useScrollAnimation();

  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToForm = (position?: string) => {
    if (position) setSelectedPosition(position);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
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
      });

      if (error) throw error;

      toast({ title: "Bewerbung gesendet! ✅", description: "Vielen Dank für Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen." });
      (e.target as HTMLFormElement).reset();
      setCvFile(null);
      setSelectedPosition("");
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
        title="Karriere | SLT Technology Group – Jetzt bewerben"
        description="Starte deine Karriere bei der SLT Technology Group. Offene Stellen in den Bereichen Medientechnik, AV-Systemintegration und Büromanagement."
        keywords="Karriere, Jobs, Medientechniker, Ausbildung, SLT Technology Group, AV-Technik, Krefeld, Bonn"
        canonical="https://slt-tg.de/karriere"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(204_100%_35%_/_0.4),_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(33_100%_50%_/_0.1),_transparent_60%)]" />
        <div
          ref={heroRef}
          className={`section-container relative z-10 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10 scroll-hidden ${heroVisible ? "scroll-visible" : ""}`}
        >
          <div>
            <Badge className="bg-accent text-accent-foreground mb-6 text-sm px-4 py-1.5">
              Wir stellen ein 🚀
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Starte mit uns durch.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8">
              Wir suchen stetig neue und technikbegeisterte Talente, die sich gemeinsam mit uns entwickeln möchten.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow group"
              onClick={() => scrollToForm()}
            >
              Jetzt bewerben
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={introRakete}
              alt="SLT Rakete"
              className="w-48 md:w-64 lg:w-80 drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section ref={profileRef} className={`py-16 md:py-24 bg-secondary/30 scroll-hidden ${profileVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Unternehmensprofil
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Wir als Arbeitgeber
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">SLT Technology Group</h3>
                <p className="text-muted-foreground">
                  Unter der Marke SLT Technology Group planen und installieren wir hochwertige und individuelle Videokonferenzlösungen auf Enterprise-Niveau für unsere Kunden.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-accent/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">SLT-Rental</h3>
                <p className="text-muted-foreground">
                  Unter der Marke SLT-Rental vermieten wir Baumaschinen, Anhänger sowie Eventbedarf und setzen dabei auf ein einzigartig-digitales Vermietkonzept mit eigener Onlineplattform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section ref={jobsRef} id="positions" className={`py-16 md:py-24 scroll-hidden ${jobsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Offene Stellen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
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
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
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
                      <div className="px-6 md:px-8 pb-8 animate-fade-in-up border-t border-border pt-6">
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
                        <Button
                          className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                          onClick={() => scrollToForm(job.title)}
                        >
                          Jetzt auf diese Stelle bewerben
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
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
      <section ref={benefitsRef} className={`py-16 md:py-24 bg-secondary/30 scroll-hidden ${benefitsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Wir möchten etwas zurückgeben
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Das bieten wir unserem Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  className="scroll-hidden flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formSectionRef} className="py-16 md:py-24" id="bewerbung">
        <div ref={formAnimRef} className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-10 scroll-hidden">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Bewerbungsformular
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jetzt bewerben
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wähle eine Stelle aus und sende uns deine Bewerbung. Wir freuen uns darauf, dich kennenzulernen!
            </p>
          </div>

          <Card className="scroll-hidden border-primary/10 shadow-lg">
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Position select */}
                <div className="space-y-2">
                  <Label htmlFor="position" className="font-semibold">
                    Stelle auswählen *
                  </Label>
                  <select
                    id="position"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Bitte Stelle auswählen...</option>
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Initiativbewerbung">Initiativbewerbung</option>
                  </select>
                </div>

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

                {/* Start date */}
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="font-semibold">Frühestmöglicher Eintrittstermin</Label>
                  <Input id="startDate" name="startDate" placeholder="z.B. 01.08.2026 oder ab sofort" />
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
                      className="w-full flex flex-col items-center gap-2 p-8 rounded-lg border-2 border-dashed border-input hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
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
                    rows={5}
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
                  zu. Ihre Daten werden ausschließlich für den Bewerbungsprozess verwendet.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
