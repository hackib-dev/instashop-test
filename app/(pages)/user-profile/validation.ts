import * as z from "zod";

export const UserProfileFormSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  username: z.string().min(1, "Username is required"),
  phonenumber: z.string().refine((value) => /^\d{11}$/.test(value), {
    message: "Phone number must be 11 digits.",
  }),
  email: z.string().min(1, "Email is required."),
});
