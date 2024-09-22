import * as z from "zod";

export const UserProfileFormSchema = z.object({
  fullname: z.string(),
  username: z.string(),
  phonenumber: z.string(),
  email: z.string(),
});
