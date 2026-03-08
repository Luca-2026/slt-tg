import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  ArrowLeft,
  ArrowRight,
  User,
  Building2,
  FileText,
  Upload,
  CheckCircle,
  X,
  File
} from "lucide-react";

const steps = [
  { id: 1, name: "Kontaktdaten", icon: User },
  { id: 2, name: "Projektrahmen", icon: Building2 },
  { id: 3, name: "Anforderungen", icon: FileText },
  { id: 4, name: "Unterlagen", icon: Upload },
  { id: 5, name: "Absenden", icon: CheckCircle },
];

const roomTypes = [
  { id: "boardroom", label: "Boardroom / Vorstandsraum" },
  { id: "konferenz", label: "Konferenzraum" },
  { id: "schulung", label: "Schulungsraum" },
  { id: "huddle", label: "Huddle Space / Besprechungsecke" },
  { id: "hybrid", label: "Hybrid-Arbeitsbereich" },
  { id: "other", label: "Sonstiges" },
];

const platforms = [
  { id: "teams", label: "Microsoft Teams" },
  { id: "zoom", label: "Zoom" },
  { id: "webex", label: "Cisco Webex" },
  { id: "meet", label: "Google Meet" },
  { id: "unsure", label: "Noch nicht festgelegt" },
  { id: "other", label: "Andere Plattform" },
];

const requirements = [
  { id: "video", label: "Videokonferenz-System" },
  { id: "display", label: "Großformat-Display / LED-Wall" },
  { id: "audio", label: "Professionelle Audioanlage" },
  { id: "steuerung", label: "Mediensteuerung" },
  { id: "akustik", label: "Akustikoptimierung" },
  { id: "beleuchtung", label: "Lichtsteuerung" },
  { id: "aufnahme", label: "Aufnahme / Streaming" },
  { id: "booking", label: "Raumbuchungssystem" },
];

const Projektanfrage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    // Step 1: Kontaktdaten
    company: "",
    contactName: "",
    email: "",
    phone: "",
    // Step 2: Projektrahmen
    roomType: "",
    roomCount: "",
    timeline: "",
    budget: "",
    platform: "",
    // Step 3: Anforderungen
    existingSetup: "",
    requirements: [] as string[],
    additionalInfo: "",
    // Step 5: Absenden
    dsgvo: false,
    callback: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleRequirementToggle = (reqId: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(reqId)
        ? prev.requirements.filter((r) => r !== reqId)
        : [...prev.requirements, reqId],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter((file) => {
        if (file.size > 50 * 1024 * 1024) {
          toast({
            title: "Datei zu groß",
            description: `${file.name} überschreitet 50 MB.`,
            variant: "destructive",
          });
          return false;
        }
        return true;
      });
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data:...;base64, prefix
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Convert files to base64 attachments
      const attachments = [];
      for (const file of files) {
        try {
          const base64 = await fileToBase64(file);
          attachments.push({ filename: file.name, content: base64 });
        } catch (e) {
          console.error("Error converting file:", file.name, e);
        }
      }

      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "project",
          name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          roomType: roomTypes.find(r => r.id === formData.roomType)?.label || formData.roomType,
          roomCount: formData.roomCount,
          timeline: formData.timeline,
          budget: formData.budget,
          platform: platforms.find(p => p.id === formData.platform)?.label || formData.platform,
          existingSetup: formData.existingSetup,
          requirements: formData.requirements.map(r => requirements.find(req => req.id === r)?.label || r),
          additionalInfo: formData.additionalInfo,
          attachments,
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
    } catch (error) {
      console.error("Error sending project request:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / 5) * 100;

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 lg:py-28 min-h-[80vh] flex items-center">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Vielen Dank für Ihre Anfrage!
              </h1>
               <p className="text-lg text-muted-foreground mb-8">
                 Ihre Projektanfrage ist bei uns eingegangen. Wir werden uns innerhalb 
                 von 24 Stunden bei Ihnen melden, um die nächsten Schritte zu besprechen.
               </p>

              <Card className="bg-card border-border text-left mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Zusammenfassung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Firma:</span>
                    <span className="font-medium">{formData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ansprechpartner:</span>
                    <span className="font-medium">{formData.contactName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Raumtyp:</span>
                    <span className="font-medium">
                      {roomTypes.find((r) => r.id === formData.roomType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Anzahl Räume:</span>
                    <span className="font-medium">{formData.roomCount || "Nicht angegeben"}</span>
                  </div>
                  {files.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hochgeladene Dateien:</span>
                      <span className="font-medium">{files.length} Datei(en)</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button asChild>
                <Link to="/">Zurück zur Startseite</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Projektanfrage – Medientechnik-Projekt starten"
        description="Starten Sie Ihr Medientechnik-Projekt: Anfrage für Fachplanung, Ausschreibung und Beratung in 5 Schritten. Kostenlose Erstberatung durch unseren AV-Consultant."
        keywords="Projektanfrage Medientechnik, AV-Fachplanung anfragen, Konferenzraum Beratung, Ausschreibung Videokonferenz"
        canonical="/projektanfrage"
      />
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Projektanfrage
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Starten Sie Ihr Projekt
            </h1>
            <p className="text-muted-foreground">
              In nur 5 Schritten zu Ihrer individuellen Anfrage – unverbindlich und kostenfrei.
            </p>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="py-6 bg-card border-y border-border sticky top-16 lg:top-20 z-40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Progress value={progress} className="h-2 mb-4" />
            <div className="hidden sm:flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 text-xs ${
                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <step.icon className="h-4 w-4" />
                  <span className={currentStep === step.id ? "font-medium" : ""}>
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="sm:hidden text-center text-sm text-muted-foreground">
              Schritt {currentStep} von 5: {steps[currentStep - 1].name}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Kontaktdaten */}
            {currentStep === 1 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Kontaktdaten</CardTitle>
                   <CardDescription>
                     Wie können wir Sie erreichen?
                   </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Ihre Firma"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Ansprechpartner *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      placeholder="Ihr Name"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ihre@email.de"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+49 123 456789"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Projektrahmen */}
            {currentStep === 2 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Projektrahmen</CardTitle>
                  <CardDescription>
                    Was planen Sie?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Raumtyp *</Label>
                    <RadioGroup
                      value={formData.roomType}
                      onValueChange={(value) => handleRadioChange("roomType", value)}
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      {roomTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="cursor-pointer font-normal">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomCount">Anzahl Räume</Label>
                      <Input
                        id="roomCount"
                        name="roomCount"
                        placeholder="z.B. 1, 5, 20+"
                        value={formData.roomCount}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Zeitrahmen</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        placeholder="z.B. Q2 2024"
                        value={formData.timeline}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budgetrahmen (optional)</Label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="z.B. 50.000 - 100.000 €"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>UC-Plattform</Label>
                    <RadioGroup
                      value={formData.platform}
                      onValueChange={(value) => handleRadioChange("platform", value)}
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      {platforms.map((platform) => (
                        <div key={platform.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={platform.id} id={platform.id} />
                          <Label htmlFor={platform.id} className="cursor-pointer font-normal">
                            {platform.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Anforderungen */}
            {currentStep === 3 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Anforderungen</CardTitle>
                  <CardDescription>
                    Was soll das System können?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="existingSetup">Bestehende Ausstattung</Label>
                    <Textarea
                      id="existingSetup"
                      name="existingSetup"
                      placeholder="Beschreiben Sie kurz, was aktuell vorhanden ist (Display, Kamera, Mikrofon etc.)"
                      rows={3}
                      value={formData.existingSetup}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Gewünschte Funktionen (Mehrfachauswahl möglich)</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {requirements.map((req) => (
                        <div key={req.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={req.id}
                            checked={formData.requirements.includes(req.id)}
                            onCheckedChange={() => handleRequirementToggle(req.id)}
                          />
                          <Label htmlFor={req.id} className="cursor-pointer font-normal">
                            {req.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Weitere Informationen</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Gibt es besondere Anforderungen oder Wünsche?"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Unterlagen */}
            {currentStep === 4 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Unterlagen hochladen</CardTitle>
                  <CardDescription>
                    Haben Sie Grundrisse, bestehende Planungen oder andere Dokumente? (optional)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="fileUpload"
                      multiple
                      accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-sm font-medium text-foreground mb-1">
                        Dateien hierher ziehen oder klicken
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DWG, DXF, JPG, PNG, DOC – max. 50 MB pro Datei
                      </p>
                    </label>
                  </div>

                  {files.length > 0 && (
                    <div className="space-y-2">
                      <Label>Hochgeladene Dateien</Label>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <File className="h-5 w-5 text-primary" />
                              <div>
                                <p className="text-sm font-medium">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground">
                    Die Dateien werden sicher übertragen und nur für die Bearbeitung 
                    Ihrer Anfrage verwendet.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Step 5: Absenden */}
            {currentStep === 5 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Anfrage absenden</CardTitle>
                  <CardDescription>
                    Fast geschafft! Bitte bestätigen Sie die Datenschutzerklärung.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-secondary rounded-lg space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Firma:</span>
                      <span className="font-medium">{formData.company || "–"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ansprechpartner:</span>
                      <span className="font-medium">{formData.contactName || "–"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">E-Mail:</span>
                      <span className="font-medium">{formData.email || "–"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Raumtyp:</span>
                      <span className="font-medium">
                        {roomTypes.find((r) => r.id === formData.roomType)?.label || "–"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dateien:</span>
                      <span className="font-medium">{files.length} Datei(en)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="dsgvo"
                        checked={formData.dsgvo}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("dsgvo", checked as boolean)
                        }
                      />
                      <Label htmlFor="dsgvo" className="text-sm font-normal leading-relaxed">
                        Ich habe die{" "}
                        <Link to="/datenschutz" className="text-primary hover:underline">
                          Datenschutzerklärung
                        </Link>{" "}
                         gelesen und stimme der Verarbeitung meiner Daten zu. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="callback"
                        checked={formData.callback}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("callback", checked as boolean)
                        }
                      />
                      <Label htmlFor="callback" className="text-sm font-normal">
                        Ich wünsche einen Rückruf zur Terminvereinbarung.
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück
              </Button>

              {currentStep < 5 ? (
                <Button onClick={nextStep}>
                  Weiter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.dsgvo || isSubmitting}
                  className="btn-glow"
                >
                  {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projektanfrage;
