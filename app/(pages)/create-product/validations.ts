import * as z from "zod";

export const CreateProductFormSchema = z.object({
  productTitle: z.string(),
  productDescription: z.string(),
  price: z.string(),
  oldPrice: z.string(),
  productCollection: z.string(),
  inventoryStocks: z.string(),
  productImage: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Product Image is required",
    })
    .optional(),
  inventoryVariations: z.boolean(),
  selfShipping: z.boolean(),
  instaShopShipping: z.boolean(),
  shippingInventoryStocks: z.string(),
});
