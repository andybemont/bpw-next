import { z } from "zod";

export const REFERENCE_OPTIONS = [
  "Social Media",
  "Zola",
  "The Knot",
  "Wedding Wire",
  "Google/Web Search",
  "Word of Mouth",
  "Other",
] as const;

const analyticsContextSchema = z
  .object({
    landingPage: z.string().max(500).optional(),
    referrer: z.string().max(2000).optional(),
    utmSource: z.string().max(200).optional(),
    utmMedium: z.string().max(200).optional(),
    utmCampaign: z.string().max(200).optional(),
    utmContent: z.string().max(200).optional(),
    utmTerm: z.string().max(200).optional(),
    firstVisitAt: z.string().max(50).optional(),
  })
  .optional();

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .transform((value) => value || undefined),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a wedding date."),
  reference: z
    .union([z.enum(REFERENCE_OPTIONS), z.literal("")])
    .optional()
    .transform((value) => (value ? value : undefined)),
  message: z
    .string()
    .trim()
    .min(10, "Please write a short message (at least 10 characters).")
    .max(5000, "Message is too long."),
  website: z.string().optional().default(""),
  turnstileToken: z.string().min(1, "Please complete the verification check."),
  formLoadedAt: z.number().int().positive(),
  analyticsContext: analyticsContextSchema,
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<
  Record<keyof ContactFormInput, string>
>;

export function formatContactFieldErrors(
  error: z.ZodError,
): ContactFormFieldErrors {
  const fieldErrors: ContactFormFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !fieldErrors[field as keyof ContactFormInput]) {
      fieldErrors[field as keyof ContactFormInput] = issue.message;
    }
  }
  return fieldErrors;
}
