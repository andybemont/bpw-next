import { Resend } from "resend";
import type { ContactFormInput } from "./contact-schema";

function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return null;
  }

  return { apiKey, to, from };
}

function formatDate(date: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) {
    return date;
  }
  const [, year, month, day] = match;
  return `${month}/${day}/${year.slice(-2)}`;
}

function displayValue(value?: string | null) {
  return value?.trim() || "—";
}

function buildInquiryText(data: ContactFormInput) {
  const lines = [
    "New wedding inquiry from bemontphoto.com",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${displayValue(data.phone)}`,
    `Wedding date: ${formatDate(data.date)}`,
    `Source: ${displayValue(data.reference)}`,
    "",
    "Message:",
    data.message,
  ];

  if (data.analyticsContext) {
    const ctx = data.analyticsContext;
    lines.push(
      "",
      "Attribution:",
      ctx.landingPage ? `Landing page: ${ctx.landingPage}` : "",
      ctx.referrer ? `Referrer: ${ctx.referrer}` : "",
      ctx.utmSource ? `UTM source: ${ctx.utmSource}` : "",
      ctx.utmMedium ? `UTM medium: ${ctx.utmMedium}` : "",
      ctx.utmCampaign ? `UTM campaign: ${ctx.utmCampaign}` : "",
    );
  }

  return lines.filter(Boolean).join("\n");
}

function buildInquiryHtml(data: ContactFormInput) {
  const attribution = data.analyticsContext;
  const attributionRows = attribution
    ? [
        attribution.landingPage
          ? `<tr><td style="padding:4px 12px 4px 0;color:#666;">Landing page</td><td>${escapeHtml(attribution.landingPage)}</td></tr>`
          : "",
        attribution.referrer
          ? `<tr><td style="padding:4px 12px 4px 0;color:#666;">Referrer</td><td>${escapeHtml(attribution.referrer)}</td></tr>`
          : "",
        attribution.utmSource
          ? `<tr><td style="padding:4px 12px 4px 0;color:#666;">UTM</td><td>${escapeHtml([attribution.utmSource, attribution.utmMedium, attribution.utmCampaign].filter(Boolean).join(" / "))}</td></tr>`
          : "",
      ].join("")
    : "";

  return `<!DOCTYPE html>
<html>
  <body style="font-family:Georgia,serif;color:#1a1a1a;line-height:1.5;">
    <h2 style="margin:0 0 16px;">New wedding inquiry</h2>
    <table style="border-collapse:collapse;margin-bottom:20px;">
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Name</td><td><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Phone</td><td>${escapeHtml(displayValue(data.phone))}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Wedding date</td><td>${escapeHtml(formatDate(data.date))}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Source</td><td>${escapeHtml(displayValue(data.reference))}</td></tr>
    </table>
    <p style="margin:0 0 8px;color:#666;">Message</p>
    <p style="margin:0 0 24px;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    ${attributionRows ? `<table style="border-collapse:collapse;border-top:1px solid #ddd;padding-top:12px;">${attributionRows}</table>` : ""}
  </body>
</html>`;
}

function buildAutoReplyText(name: string) {
  return `Hi there!

Thanks for reaching out to Bemont Photo! We received your message and will respond quickly. 

Looking forward to talking more!
Andy & Carly
Bemont Photo
https://www.bemontphoto.com`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmails(data: ContactFormInput) {
  const config = getContactConfig();
  if (!config) {
    throw new Error("Contact email is not configured.");
  }

  const resend = new Resend(config.apiKey);
  const subjectDate = formatDate(data.date);

  const inquiry = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: data.email,
    subject: `Wedding inquiry: ${data.name} — ${subjectDate}`,
    text: buildInquiryText(data),
    html: buildInquiryHtml(data),
  });

  if (inquiry.error) {
    throw new Error(inquiry.error.message);
  }

  const autoReply = await resend.emails.send({
    from: config.from,
    to: data.email,
    subject: "We got your message — Bemont Photo",
    text: buildAutoReplyText(data.name),
  });

  if (autoReply.error) {
    // Inquiry delivered — log auto-reply failure but don't fail the submission.
    console.error("Contact auto-reply failed:", autoReply.error.message);
  }

  return inquiry.data?.id;
}

export function isContactEmailConfigured() {
  return getContactConfig() !== null;
}
