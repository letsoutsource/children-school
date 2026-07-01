import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().min(1, "Subject / Reason is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export const admissionFormSchema = z.object({
  name: z.string().min(2, "Parent/Guardian name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 characters"),
  message: z.string().optional().or(z.literal("")),
});
