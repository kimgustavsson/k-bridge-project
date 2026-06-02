"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NewsletterFormData {
  email: string;
  // Honeypot
  website?: string;
  // Time tracking
  formStartTime: number;
}

export interface NewsletterFormResult {
  success: boolean;
  error?: string;
}

export async function subscribeToNewsletter(
  data: NewsletterFormData,
): Promise<NewsletterFormResult> {
  // Bot detection: honeypot
  if (data.website) {
    return { success: true };
  }

  // Bot detection: submitted too fast
  const elapsed = Date.now() - data.formStartTime;
  if (elapsed < 2000) {
    return { success: true };
  }

  // Email format validation
  if (!data.email || !isValidEmail(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL_TO;
    if (!toEmail) {
      console.error("CONTACT_EMAIL_TO not set");
      return { success: false, error: "Server configuration error." };
    }

    const { error } = await resend.emails.send({
      // Replace with verified domain once available
      from: "K-BRIDGE Newsletter <newsletter@kbridgeedu.com>",
      to: [toEmail],
      replyTo: data.email,
      subject: `[Newsletter] New subscriber: ${data.email}`,
      html: buildEmailHtml(data.email),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to subscribe. Please try again.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(email: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f5f5f5;">
      <div style="background: white; border-radius: 12px; overflow: hidden;">
        <div style="background: #1B2A4E; padding: 24px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Newsletter Subscription</h1>
          <p style="color: #F5C518; margin: 4px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            K-BRIDGE Newsletter
          </p>
        </div>
        <div style="padding: 24px;">
          <p style="color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 8px;">
            Subscriber Email
          </p>
          <p style="margin: 0;">
            <a href="mailto:${escapeHtml(email)}" style="color: #10B981; text-decoration: none; font-weight: 600; font-size: 16px;">
              ${escapeHtml(email)}
            </a>
          </p>
          <p style="margin-top: 20px; color: #6B7280; font-size: 13px; line-height: 1.5;">
            This user signed up via the footer newsletter form. Consider adding them to your mailing list.
          </p>
        </div>
        <div style="background: #f5f5f5; padding: 16px 24px; text-align: center;">
          <p style="color: #6B7280; font-size: 11px; margin: 0;">
            Sent from the K-BRIDGE newsletter form
          </p>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
