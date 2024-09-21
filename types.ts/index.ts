import * as z from "zod";
import { store } from "@/store";
import { SignUpFormSchema } from "@/app/(pages)/signup/validation";
import { UserProfileFormSchema } from "@/app/(pages)/user-profile/validation";
import { StoreProfileFormSchema } from "@/app/(pages)/store-profile/validation";
import { CreateProductFormSchema } from "@/app/(pages)/create-product/validations";

export const GlobalDataSchema = z.object({
  cif: z.string(),
});

const ProductSchema = z.object({
  productTitle: z.string(),
  productDescription: z.string(),
  price: z.string(),
  oldPrice: z.string(),
  productCollection: z.string(),
  inventoryStocks: z.string(),
  productImage: z.string().nullable(),
  inventoryVariations: z.boolean(),
  selfShipping: z.boolean(),
  instaShopShipping: z.boolean(),
  shippingInventoryStocks: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
export type GlobalStateType = z.infer<typeof GlobalDataSchema>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;
export type UserProfileFormData = z.infer<typeof UserProfileFormSchema>;
export type StoreProfileFormData = z.infer<typeof StoreProfileFormSchema>;
export type CreateProductFormData = z.infer<typeof CreateProductFormSchema>;
