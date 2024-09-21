import * as z from "zod";

export const StoreProfileFormSchema = z.object({
  storeName: z.string(),
  storeTagName: z.string(),
  storePhonenumber: z.string(),
  storeEmail: z.string(),
  category: z.string(),
});
