import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, FileText, Upload, X } from "lucide-react";
import type { JobPosition } from "@/data/jobs";

interface Props {
  job: JobPosition;
}

export function JobApplicationForm({ job }: Props) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "Datei zu groß", description: "Maximale Dateigröße: 10 MB", variant: "destructive" });
      return;
    }
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      toast({
        title: "Ungültiges Format",
        description: "Bitte laden Sie eine PDF- oder Word-Datei hoch.",
        variant: "destructive",
      });
      return;
    }
    setCvFile(file);
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

    if (!firstName || !lastName || !email) {
      toast({
        title: "Pflichtfelder ausfüllen",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
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
        position: job.title,
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

      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            type: "job-application",
            name: `${firstName} ${lastName}`,
            email,
            phone: phone || undefined,
            message: message || undefined,
            position: job.title,
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

      toast({
        title: "Bewerbung gesendet! ✅",
        description: "Vielen Dank für Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen.",
      });
      (e.target as HTMLFormElement).reset();
      setCvFile(null);
    } catch (err) {
      console.error(err);
      toast({
        title: "Fehler",
        description: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="font-semibold">Vorname *</Label>
          <Input id="firstName" name="firstName" required placeholder="Max" autoComplete="given-name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="font-semibold">Nachname *</Label>
          <Input id="lastName" name="lastName" required placeholder="Mustermann" autoComplete="family-name" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold">E-Mail *</Label>
          <Input id="email" name="email" type="email" required placeholder="max@beispiel.de" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-semibold">Telefon</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+49 123 456 789" autoComplete="tel" />
        </div>
      </div>

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

      {!job.isAzubi && (
        <div className="space-y-2">
          <Label htmlFor="salaryExpectation" className="font-semibold">Gehaltsvorstellung (brutto/Jahr)</Label>
          <Input id="salaryExpectation" name="salaryExpectation" placeholder="z. B. 45.000 € – 52.000 €" />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="startDate" className="font-semibold">Frühestmöglicher Eintrittstermin</Label>
        <Input
          id="startDate"
          name="startDate"
          placeholder={job.isAzubi ? "z. B. 01.08.2026" : "z. B. ab sofort oder Datum"}
        />
      </div>

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
              aria-label="Datei entfernen"
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
        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Mit dem Absenden stimmen Sie unserer{" "}
        <a href="/datenschutz" className="underline hover:text-primary transition-colors">
          Datenschutzerklärung
        </a>{" "}
        zu. Ihre Bewerbung geht direkt an karriere@slt-tg.de.
      </p>
    </form>
  );
}
