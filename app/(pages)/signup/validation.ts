import * as z from "zod";

export const SignUpFormSchema = z.object({
  email: z.string(),
});
