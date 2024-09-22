"use client";

import _ from "lodash";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreateProductFormData } from "@/types.ts";
import { CreateProductFormSchema } from "./validations";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";
import StoreLogo from "../../../assets/storeLogo.png";
import Hamburger from "../../../assets/hamburger.png";
import MarkIcon from "../../../assets/mark2.png";
import Badge from "@/components/ui/badge/badge";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import ImageIcon from "../../../assets/imaegIcon.png";
import { Checkbox } from "@/components/ui/checkbox";
import Indicator from "../../../assets/indicator.png";
import { setProduct } from "@/store/slice/productService/productService";
import { useAppDispatch } from "@/store/hooks";
import { sessionStorageName } from "@/app/config";
import { saveImageToSession } from "@/app/utils/constants";

const StoreProfile = () => {
  const form = useForm<CreateProductFormData>({
    resolver: zodResolver(CreateProductFormSchema),
    defaultValues: {
      productTitle: "",
      productDescription: "",
      price: "",
      oldPrice: "",
      productCollection: "",
      inventoryStocks: "",
      productImage: undefined,
      inventoryVariations: false,
      selfShipping: false,
      instaShopShipping: false,
      shippingInventoryStocks: "",
    },
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
      form.setValue("productImage", file);
    }
  };

  const onSubmit = async (data: CreateProductFormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    const base64Image = await saveImageToSession(selectedImage);

    const productDataToSave = {
      ...data,
      productImage: base64Image,
    };

    sessionStorage.setItem(
      sessionStorageName,
      JSON.stringify(productDataToSave)
    );

    dispatch(setProduct(productDataToSave));

    router.push("/product-details");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Create a product" navIcon={Hamburger} />

      <div className="pt-28 px-5 flex justify-between items-center border-b border-primary-dark_grey pb-3">
        <Badge border icon={MarkIcon} text="Draft" />
        <p className="text-primary-purple text-sm font-medium">
          Preveiw product
        </p>
      </div>
      <div className="px-5">
        <div className="pt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Accordion
                type="single"
                collapsible
                defaultValue="basic-details"
                className="relative"
              >
                <AccordionItem value="basic-details">
                  <AccordionTrigger>Basic details</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="productTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                              placeholder="Product Title"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="productDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                              placeholder="Product Description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 space-x-2">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                                placeholder="Price"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="oldPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                                placeholder="Old price"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="productCollection"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                              placeholder="Product collection"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="inventoryStocks"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                              placeholder="Inventory stocks"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />
              <div className="space-y-4 pb-32">
                <Accordion
                  type="single"
                  collapsible
                  className="relative"
                  defaultValue="product-details"
                >
                  <AccordionItem value="product-details">
                    <AccordionTrigger>Product images</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="productImage"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormControl>
                                <div>
                                  <Button
                                    className="text-sm rounded-xl bg-primary-light_grey text-primary-purple w-full"
                                    type="button"
                                    onClick={handleClick}
                                  >
                                    Add image
                                    <span>
                                      <Image
                                        src={ImageIcon}
                                        alt="image-icon"
                                        width={16}
                                        className="ml-2"
                                      ></Image>
                                    </span>
                                  </Button>
                                  <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleImageChange}
                                    ref={inputRef}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="inventory-variations"
                  className="relative"
                >
                  <AccordionItem value="inventory-variations">
                    <AccordionTrigger>Inventory variations</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="inventoryVariations"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center gap-3">
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                                <p className="pr-16 text-primary-lightblack">
                                  This product is varible; has different colors,
                                  sizes, weight, materials, etc.
                                </p>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="shipping"
                  className="relative"
                >
                  <AccordionItem value="shipping">
                    <AccordionTrigger>Shipping</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="selfShipping"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center justify-between">
                                <p>Self shipping</p>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="instaShopShipping"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center justify-between">
                                <p>InstaShop shipping</p>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="shippingInventoryStocks"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                                placeholder="Inventory stocks"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-white z-20 fixed left-0 right-0 bottom-0 w-full xl:max-w-sm px-5 flex flex-col items-center border-t border-primary-grey mx-auto">
                <div className="flex gap-4  w-full">
                  <Button
                    className="w-full rounded-[90px] bg-white border border-primary-purple text-primary-purple mt-4 mb-11"
                    type="button"
                    size="lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-full rounded-[90px] shadow-3xl shadow-primary-purple mt-4 mb-11"
                    type="submit"
                    size="lg"
                  >
                    Save
                  </Button>
                </div>

                <div className="mb-3 text-center items-center">
                  <Image
                    src={Indicator}
                    alt="indicator"
                    className="w-fit"
                  ></Image>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;
