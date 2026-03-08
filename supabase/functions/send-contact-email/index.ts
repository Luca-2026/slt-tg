import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

interface Attachment {
  filename: string;
  content: string; // base64
}

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
  cvFilePath?: string;
  // Attachments (base64)
  attachments?: Attachment[];
}

// Email footer with company info
const emailFooter = `
  <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #00507d;">
    <table style="width: 100%;">
      <tr>
        <td style="vertical-align: top;">
          <p style="margin: 0; font-size: 14px; font-weight: bold; color: #00507d;">SLT Technology Group GmbH & Co. KG</p>
          <p style="margin: 4px 0 0; font-size: 12px; color: #666;">Anrather Straße 291 · 47807 Krefeld</p>
          <p style="margin: 2px 0 0; font-size: 12px; color: #666;">Tel: +49 (0) 2151 - 417 99 02</p>
          <p style="margin: 2px 0 0; font-size: 12px; color: #666;">E-Mail: info@slt-tg.de · Web: www.slt-tg.de</p>
        </td>
      </tr>
    </table>
  </div>
`;

// Branded email wrapper
function wrapEmail(content: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #00507d, #006da0); padding: 24px 30px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold;">SLT Technology Group</h2>
      </div>
      <div style="padding: 30px;">
        ${content}
        ${emailFooter}
      </div>
    </div>
  `;
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

    // Prepare attachments array for Resend
    const resendAttachments: Array<{ filename: string; content: Buffer }> = [];

    // If there's a CV file in storage, download it
    if (data.cvFilePath) {
      try {
        const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
        const { data: fileData, error: downloadError } = await supabaseAdmin.storage
          .from("cv-uploads")
          .download(data.cvFilePath);
        if (!downloadError && fileData) {
          const arrayBuffer = await fileData.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          resendAttachments.push({
            filename: data.cvFilePath.replace(/^\d+-/, ""),
            content: buffer as unknown as Buffer,
          });
        } else {
          console.error("Error downloading CV:", downloadError);
        }
      } catch (e) {
        console.error("Error fetching CV from storage:", e);
      }
    }

    // Add base64-encoded attachments (from project request form)
    if (data.attachments?.length) {
      for (const att of data.attachments) {
        try {
          const binaryStr = atob(att.content);
          const bytes = new Uint8Array(binaryStr.length);
          for (let i = 0; i < binaryStr.length; i++) {
            bytes[i] = binaryStr.charCodeAt(i);
          }
          resendAttachments.push({
            filename: att.filename,
            content: bytes as unknown as Buffer,
          });
        } catch (e) {
          console.error("Error processing attachment:", att.filename, e);
        }
      }
    }

    let subject: string;
    let htmlContent: string;
    let toAddress: string;
    let confirmationSubject: string;
    let confirmationHtml: string;

    if (data.type === "job-application") {
      toAddress = "karriere@slt-tg.de";
      subject = `Neue Bewerbung: ${data.position || "Offene Stelle"} – ${data.firstName} ${data.lastName}`;
      htmlContent = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Neue Bewerbung eingegangen</h1>
        
        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Position</h3>
        <p style="color: #333; font-size: 15px; font-weight: bold;">${data.position || "-"}</p>

        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Kontaktdaten</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666; width: 180px;">Name:</td><td style="padding: 6px 0;"><strong>${data.firstName} ${data.lastName}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">E-Mail:</td><td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #00507d;">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefon:</td><td style="padding: 6px 0;">${data.phone || "-"}</td></tr>
        </table>

        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666; width: 180px;">Bildungsabschluss:</td><td style="padding: 6px 0;">${data.educationCompleted || "-"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Führerschein:</td><td style="padding: 6px 0;">${data.hasDriversLicense || "-"}</td></tr>
          ${data.salaryExpectation ? `<tr><td style="padding: 6px 0; color: #666;">Gehaltsvorstellung:</td><td style="padding: 6px 0;">${data.salaryExpectation}</td></tr>` : ""}
          <tr><td style="padding: 6px 0; color: #666;">Eintrittstermin:</td><td style="padding: 6px 0;">${data.startDate || "-"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Lebenslauf:</td><td style="padding: 6px 0;">${data.hasCv ? "✅ Im Anhang" : "❌ Nicht hochgeladen"}</td></tr>
        </table>

        ${data.message ? `
          <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Anschreiben / Nachricht</h3>
          <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</p>
        ` : ""}
      `);

      // Confirmation email for applicant
      confirmationSubject = `Ihre Bewerbung bei der SLT Technology Group – ${data.position}`;
      confirmationHtml = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Vielen Dank für Ihre Bewerbung!</h1>
        
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Sehr geehrte/r ${data.firstName} ${data.lastName},
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          vielen Dank für Ihr Interesse an der Position <strong>${data.position}</strong> bei der SLT Technology Group. 
          Wir haben Ihre Bewerbung erhalten und werden diese sorgfältig prüfen.
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Unser Team wird sich zeitnah bei Ihnen melden. Bei Rückfragen erreichen Sie uns jederzeit unter 
          <a href="mailto:karriere@slt-tg.de" style="color: #00507d;">karriere@slt-tg.de</a> oder telefonisch unter 
          <a href="tel:+4921514179902" style="color: #00507d;">+49 (0) 2151 - 417 99 02</a>.
        </p>

        <div style="margin-top: 24px; padding: 20px; background: #f0f7fc; border-left: 4px solid #00507d; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #00507d;">Ihre Bewerbung im Überblick:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #666;">Position:</td><td style="padding: 4px 0; font-weight: 500;">${data.position}</td></tr>
            <tr><td style="padding: 4px 0; color: #666;">Eintrittstermin:</td><td style="padding: 4px 0;">${data.startDate || "Nicht angegeben"}</td></tr>
            <tr><td style="padding: 4px 0; color: #666;">Lebenslauf:</td><td style="padding: 4px 0;">${data.hasCv ? "Hochgeladen ✅" : "Nicht beigefügt"}</td></tr>
          </table>
        </div>

        <p style="color: #333; font-size: 15px; line-height: 1.6; margin-top: 24px;">
          Wir freuen uns darauf, Sie kennenzulernen!
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Mit freundlichen Grüßen,<br>
          <strong>Ihr Team der SLT Technology Group</strong>
        </p>
      `);

    } else if (data.type === "project") {
      toAddress = "info@slt-tg.de";
      subject = `Neue Projektanfrage von ${data.company || data.name}`;
      
      const requirementsList = data.requirements?.length 
        ? data.requirements.map(r => `<li style="padding: 2px 0;">${r}</li>`).join("") 
        : "<li>Keine angegeben</li>";

      htmlContent = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Neue Projektanfrage</h1>
        
        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Kontaktdaten</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666;">Firma:</td><td style="padding: 6px 0;"><strong>${data.company || "-"}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Ansprechpartner:</td><td style="padding: 6px 0;"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">E-Mail:</td><td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #00507d;">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefon:</td><td style="padding: 6px 0;">${data.phone || "-"}</td></tr>
        </table>

        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Projektrahmen</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666;">Raumtyp:</td><td style="padding: 6px 0;"><strong>${data.roomType || "-"}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Anzahl Räume:</td><td style="padding: 6px 0;">${data.roomCount || "-"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Zeitrahmen:</td><td style="padding: 6px 0;">${data.timeline || "-"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Budget:</td><td style="padding: 6px 0;">${data.budget || "-"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">UC-Plattform:</td><td style="padding: 6px 0;">${data.platform || "-"}</td></tr>
        </table>

        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Anforderungen</h3>
        <ul style="color: #333; padding-left: 20px;">${requirementsList}</ul>

        ${data.existingSetup ? `
          <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Bestehende Ausstattung</h3>
          <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.existingSetup}</p>
        ` : ""}

        ${data.additionalInfo ? `
          <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Weitere Informationen</h3>
          <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.additionalInfo}</p>
        ` : ""}

        ${resendAttachments.length > 0 ? `
          <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Anhänge</h3>
          <p style="color: #333;">${resendAttachments.length} Datei(en) im Anhang beigefügt.</p>
        ` : ""}
      `);

      // Confirmation email for project requester
      confirmationSubject = "Ihre Projektanfrage bei der SLT Technology Group";
      confirmationHtml = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Vielen Dank für Ihre Projektanfrage!</h1>
        
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Sehr geehrte/r ${data.name},
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          vielen Dank für Ihre Projektanfrage${data.company ? ` im Namen von <strong>${data.company}</strong>` : ""}. 
          Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden, 
          um die nächsten Schritte zu besprechen.
        </p>

        <div style="margin-top: 24px; padding: 20px; background: #f0f7fc; border-left: 4px solid #00507d; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #00507d;">Ihre Anfrage im Überblick:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #666;">Raumtyp:</td><td style="padding: 4px 0; font-weight: 500;">${data.roomType || "-"}</td></tr>
            <tr><td style="padding: 4px 0; color: #666;">Anzahl Räume:</td><td style="padding: 4px 0;">${data.roomCount || "-"}</td></tr>
            <tr><td style="padding: 4px 0; color: #666;">Zeitrahmen:</td><td style="padding: 4px 0;">${data.timeline || "-"}</td></tr>
            <tr><td style="padding: 4px 0; color: #666;">UC-Plattform:</td><td style="padding: 4px 0;">${data.platform || "-"}</td></tr>
          </table>
        </div>

        <p style="color: #333; font-size: 15px; line-height: 1.6; margin-top: 24px;">
          Bei Rückfragen erreichen Sie uns jederzeit unter 
          <a href="mailto:info@slt-tg.de" style="color: #00507d;">info@slt-tg.de</a> oder telefonisch unter 
          <a href="tel:+4921514179902" style="color: #00507d;">+49 (0) 2151 - 417 99 02</a>.
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Mit freundlichen Grüßen,<br>
          <strong>Ihr Team der SLT Technology Group</strong>
        </p>
      `);

    } else {
      toAddress = "info@slt-tg.de";
      subject = `Neue Kontaktanfrage von ${data.name}`;
      htmlContent = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Neue Kontaktanfrage</h1>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 6px 0; color: #666;">Name:</td><td style="padding: 6px 0;"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">E-Mail:</td><td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #00507d;">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefon:</td><td style="padding: 6px 0;">${data.phone || "-"}</td></tr>
        </table>

        <h3 style="color: #ff8e02; margin-top: 20px; margin-bottom: 8px;">Nachricht</h3>
        <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message || "Keine Nachricht"}</p>
      `);

      // Confirmation email for contact
      confirmationSubject = "Ihre Nachricht an die SLT Technology Group";
      confirmationHtml = wrapEmail(`
        <h1 style="color: #00507d; font-size: 22px; margin-top: 0;">Vielen Dank für Ihre Nachricht!</h1>
        
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Sehr geehrte/r ${data.name},
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erhalten und werden uns 
          schnellstmöglich bei Ihnen melden.
        </p>

        <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-radius: 5px;">
          <p style="margin: 0 0 4px; font-weight: bold; color: #333;">Ihre Nachricht:</p>
          <p style="margin: 0; color: #555; white-space: pre-wrap;">${data.message || "–"}</p>
        </div>

        <p style="color: #333; font-size: 15px; line-height: 1.6; margin-top: 24px;">
          Bei dringenden Anliegen erreichen Sie uns telefonisch unter 
          <a href="tel:+4921514179902" style="color: #00507d;">+49 (0) 2151 - 417 99 02</a>.
        </p>
        <p style="color: #333; font-size: 15px; line-height: 1.6;">
          Mit freundlichen Grüßen,<br>
          <strong>Ihr Team der SLT Technology Group</strong>
        </p>
      `);
    }

    console.log(`Sending notification email to ${toAddress}`);

    // Send notification email to SLT (with attachments)
    const notificationPayload: any = {
      from: "SLT Technology Group <noreply@slt-tg.de>",
      to: [toAddress],
      reply_to: data.email,
      subject,
      html: htmlContent,
    };
    if (resendAttachments.length > 0) {
      notificationPayload.attachments = resendAttachments;
    }
    const emailResponse = await resend.emails.send(notificationPayload);
    console.log("Notification email sent:", emailResponse);

    // Send confirmation email to the sender
    console.log(`Sending confirmation email to ${data.email}`);
    try {
      const confirmResponse = await resend.emails.send({
        from: "SLT Technology Group <onboarding@resend.dev>",
        to: [data.email],
        subject: confirmationSubject!,
        html: confirmationHtml!,
      });
      console.log("Confirmation email sent:", confirmResponse);
    } catch (confirmError) {
      console.error("Error sending confirmation email:", confirmError);
      // Don't fail the whole request if confirmation fails
    }

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
