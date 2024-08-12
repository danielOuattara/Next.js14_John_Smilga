import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: " product name must be at least 2 characters.",
    })
    .max(100, {
      message: "product name must be less than 100 characters.",
    }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    },
  ),
  featured: z.coerce.boolean(),
});

//------------------------

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  rawData: unknown,
): T {
  const result = schema.safeParse(rawData);

  if (!result.success) {
    const errors = result.error.errors.map((error) => `\n - ${error.message}`);
    throw new Error(errors.join(", "));
  }

  return result.data;
}
