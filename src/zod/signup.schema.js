const { default: z } = require("zod");

export const SignupSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "Password must contain at least one special character",
    }),
  username: z
    .string()
    .min(1, "Username is required")
    .max(15, "Username must be at most 15 characters long"),
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(20, "Full name must be at most 20 characters long"),
});
