



// import { z } from "zod";

// export const signInSchema = z.object({
//   email: z.string().email("Enter a valid email"),
//   password: z.string().min(6, "Password is required"),
// });

// export const signUpSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Enter a valid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });



export const passwordRules = [
  {
    label: "At least 6 characters",
    test: (password: string) => password.length >= 6,
  },
  {
    label: "One uppercase letter",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: "One lowercase letter",
    test: (password: string) => /[a-z]/.test(password),
  },
];

export const validatePassword = (password: string) => {
    
  return passwordRules.every((rule) => rule.test(password));
};
