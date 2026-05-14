import { z } from "zod";

export const EmailEschema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string({}).min(6, "Password must be at least 6 characters"),

    status: z.enum(["active", "inactive"]).default("active"),
  }),
});
