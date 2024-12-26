import { z } from "zod";
export const userSignupSchema = z.object({
  fullname: z.string().min(1, "Full Name is Required"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(1, "Role is Required"),
});

export type SignupProps = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginProps = z.infer<typeof userLoginSchema>;
