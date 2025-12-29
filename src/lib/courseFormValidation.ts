import { z } from 'zod';

export const courseApplicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .transform(val => val.replace(/\D/g, ''))
    .refine(val => val.length === 10, "Please enter a valid 10-digit phone number"),
  currentRole: z
    .string()
    .optional(),
  experience: z
    .string()
    .optional(),
  linkedin: z
    .string()
    .optional(),
  motivation: z
    .string()
    .trim()
    .min(10, "Please tell us more (at least 10 characters)")
    .max(1000, "Please keep it under 1000 characters"),
});

export type CourseApplicationFormData = z.infer<typeof courseApplicationSchema>;

export const validateField = (
  fieldName: keyof CourseApplicationFormData,
  value: string
): string | null => {
  try {
    const fieldSchema = courseApplicationSchema.shape[fieldName];
    fieldSchema.parse(value);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors[0]?.message || "Invalid input";
    }
    return "Invalid input";
  }
};
