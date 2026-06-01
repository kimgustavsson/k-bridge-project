"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  role: "student" | "university" | "other";
  message: string;
  // Honeypot field
  website?: string;
  // Time tracking for bot detection
  formStartTime: number;
}

export interface ContactFormResult {
  success: boolean;
  error?: string;
}

const ROLE_LABELS: Record<ContactFormData["role"], string> = {
  student: "Student or Family",
  university: "University / Institution",
  other: "Other Partner",
};

export async function sendContactMessage(
  data: ContactFormData,
): Promise<ContactFormResult> {
  // Bot detection: honeypot filled
  if (data.website) {
    // Silently pretend success — don't tell bots they failed
    return { success: true };
  }

  // Bot detection: submitted too fast (under 3 seconds)
  const elapsed = Date.now() - data.formStartTime;
  if (elapsed < 3000) {
    return { success: true };
  }

  // Basic field validation
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL_TO;
    if (!toEmail) {
      console.error("CONTACT_EMAIL_TO not set");
      return { success: false, error: "Server configuration error." };
    }

    const { error } = await resend.emails.send({
      // Use Resend's test domain during development.
      // Replace with verified domain in production: "K-BRIDGE Contact <contact@k-bridge.com>"
      from: "K-BRIDGE Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `[${ROLE_LABELS[data.role]}] New contact from ${data.name}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* --------------------------- email template --------------------------- */

function buildEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f5f5f5;">
      <div style="background: white; border-radius: 12px; overflow: hidden;">
        <div style="background: #1B2A4E; padding: 24px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Message</h1>
          <p style="color: #F5C518; margin: 4px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            ${ROLE_LABELS[data.role]}
          </p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #1B2A4E; font-weight: 600;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #10B981; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </td>
            </tr>
            ${
              data.phone
                ? `<tr>
                    <td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Phone</td>
                    <td style="padding: 8px 0; color: #1B2A4E;">${escapeHtml(data.phone)}</td>
                  </tr>`
                : ""
            }
            ${
              data.country
                ? `<tr>
                    <td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Country</td>
                    <td style="padding: 8px 0; color: #1B2A4E;">${escapeHtml(data.country)}</td>
                  </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 8px;">Message</p>
            <div style="color: #1B2A4E; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
          </div>
        </div>
        <div style="background: #f5f5f5; padding: 16px 24px; text-align: center;">
          <p style="color: #6B7280; font-size: 11px; margin: 0;">
            Sent from the K-BRIDGE contact form · Reply directly to respond to ${escapeHtml(data.name)}
          </p>
        </div>
      </div>
    </div>
  `;
}

/** Prevent HTML injection in email content */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
