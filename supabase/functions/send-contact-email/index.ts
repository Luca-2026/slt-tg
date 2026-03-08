import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactEmailRequest {
  type: "contact" | "project" | "job-application";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  roomType?: string;
  roomCount?: string;
  timeline?: string;
  budget?: string;
  platform?: string;
  existingSetup?: string;
  requirements?: string[];
  additionalInfo?: string;
  // Job application fields
  position?: string;
  firstName?: string;
  lastName?: string;
  startDate?: string;
  educationCompleted?: string;
  hasDriversLicense?: string;
  salaryExpectation?: string;
  hasCv?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received form data:", { type: data.type, email: data.email, name: data.name });

    if (!data.email || !data.name) {
      return new Response(
        JSON.stringify({ error: "Name und E-Mail sind erforderlich" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    let subject: string;
    let htmlContent: string;
    let toAddress: string;

    if (data.type === "job-application") {
      toAddress = "karriere@slt-tg.de";
      subject = `Neue Bewerbung: ${data.position || "Offene Stelle"} – ${data.firstName} ${data.lastName}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00507d; border-bottom: 2px solid #ff8e02; padding-bottom: 10px;">
            Neue Bewerbung eingegangen
          </h1>
          
          <h2 style="color: #333; margin-top: 20px;">Position</h2>
          <p style="color: #333; font-size: 16px; font-weight: bold;">${data.position || "-"}</p>

          <h2 style="color: #333; margin-top: 20px;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Name:</td><td style="padding: 8px 0;"><strong>${data.firstName} ${data.lastName}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon:</td><td style="padding: 8px 0;">${data.phone || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Bildungsabschluss:</td><td style="padding: 8px 0;">${data.educationCompleted || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Führerschein:</td><td style="padding: 8px 0;">${data.hasDriversLicense || "-"}</td></tr>
            ${data.salaryExpectation ? `<tr><td style="padding: 8px 0; color: #666;">Gehaltsvorstellung:</td><td style="padding: 8px 0;">${data.salaryExpectation}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Eintrittstermin:</td><td style="padding: 8px 0;">${data.startDate || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Lebenslauf:</td><td style="padding: 8px 0;">${data.hasCv ? "✅ Hochgeladen" : "❌ Nicht hochgeladen"}</td></tr>
          </table>

          ${data.message ? `
            <h2 style="color: #333; margin-top: 20px;">Anschreiben / Nachricht</h2>
            <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</p>
          ` : ""}

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">Diese Bewerbung wurde über das Karriere-Formular auf slt-tg.de gesendet.</p>
        </div>
      `;
    } else if (data.type === "project") {
      toAddress = "info@slt-tg.de";
      subject = `Neue Projektanfrage von ${data.company || data.name}`;
      
      const requirementsList = data.requirements?.length 
        ? data.requirements.map(r => `<li>${r}</li>`).join("") 
        : "<li>Keine angegeben</li>";

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00507d; border-bottom: 2px solid #ff8e02; padding-bottom: 10px;">
            Neue Projektanfrage
          </h1>
          
          <h2 style="color: #333; margin-top: 20px;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Firma:</td><td style="padding: 8px 0;"><strong>${data.company || "-"}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Ansprechpartner:</td><td style="padding: 8px 0;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon:</td><td style="padding: 8px 0;">${data.phone || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Projektrahmen</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Raumtyp:</td><td style="padding: 8px 0;"><strong>${data.roomType || "-"}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Anzahl Räume:</td><td style="padding: 8px 0;">${data.roomCount || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Zeitrahmen:</td><td style="padding: 8px 0;">${data.timeline || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Budget:</td><td style="padding: 8px 0;">${data.budget || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">UC-Plattform:</td><td style="padding: 8px 0;">${data.platform || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Anforderungen</h2>
          <ul style="color: #333;">${requirementsList}</ul>

          ${data.existingSetup ? `
            <h2 style="color: #333; margin-top: 20px;">Bestehende Ausstattung</h2>
            <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.existingSetup}</p>
          ` : ""}

          ${data.additionalInfo ? `
            <h2 style="color: #333; margin-top: 20px;">Weitere Informationen</h2>
            <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.additionalInfo}</p>
          ` : ""}

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">Diese Anfrage wurde über das Projektanfrage-Formular auf slt-tg.de gesendet.</p>
        </div>
      `;
    } else {
      toAddress = "info@slt-tg.de";
      subject = `Neue Kontaktanfrage von ${data.name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00507d; border-bottom: 2px solid #ff8e02; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #666;">Name:</td><td style="padding: 8px 0;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon:</td><td style="padding: 8px 0;">${data.phone || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Nachricht</h2>
          <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message || "Keine Nachricht"}</p>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">Diese Nachricht wurde über das Kontaktformular auf slt-tg.de gesendet.</p>
        </div>
      `;
    }

    console.log(`Sending email to ${toAddress}`);
    
    const emailResponse = await resend.emails.send({
      from: "SLT Technology Group <onboarding@resend.dev>",
      to: [toAddress],
      reply_to: data.email,
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
