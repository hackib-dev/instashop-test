"use client";

import _ from "lodash";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Header from "@/components/header/page";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarkIcon from "../../../assets/mark2.png";
import CloseIcon from "../../../assets/closeIcon.png";
import Footer from "@/components/footer/page";
import Badge from "@/components/ui/badge/badge";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import Indicator from "../../../assets/indicator.png";
import { useForm, FormProvider } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import LoadIcon from "../../../assets/load.png";
import GirlImage from "../../../assets/girlImage.png";
import ProductDetailsComponent from "@/components/productDetails/page";
import { Checkbox } from "@/components/ui/checkbox";
import PlusIcon from "../../../assets/plusIcon.png";
import ImageIcon from "../../../assets/imaegIcon.png";
import ImgIcon from "../../../assets/imgIcon.png";
import ConfigureVariants from "@/components/configureVariant/page";
import { usePathname, useRouter } from "next/navigation";
import Hamburger from "../../../assets/hamburger.png";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { PRODUCT_ROUTE } from "@/app/config";

const ProductDetails = () => {
  const router = useRouter();

  const {
    product: {
      instaShopShipping,
      inventoryStocks,
      inventoryVariations,
      oldPrice,
      price,
      productCollection,
      productDescription,
      productImage,
      productTitle,
      selfShipping,
      shippingInventoryStocks,
    },
  } = useAppSelector((state) => state.productService);

  const methods = useForm({
    defaultValues: {
      productTitle: productTitle,
      productDescription: productDescription,
      price: price,
      oldPrice: oldPrice,
      productCollection: productCollection,
      inventoryStocks: inventoryStocks,
      productImage: productImage,
      inventoryVariations: inventoryVariations,
      selfShipping: selfShipping,
      instaShopShipping: instaShopShipping,
      shippingInventoryStocks: shippingInventoryStocks,
    },
  });

  const pathname = usePathname();
  const { toast } = useToast();

  const {
    user: { email },
  } = useAppSelector((state) => state.userState);

  const handleViewProducts = () => {
    const emailSession = sessionStorage.getItem("userEmail");
    console.log(emailSession);
    const sessionData = emailSession ? JSON.parse(emailSession) : null;
    console.log(sessionData);

    if (!sessionData?.email && !emailSession) {
      router.push("/signup");
      toast({
        variant: "destructive",
        title: "You are not in session!",
        description:
          "Kindly use a valid email address! Redirecting to Login Page...",
      });
    }

    if (sessionData && sessionData.email !== email) {
      router.push("/signup");
      sessionStorage.clear();
      toast({
        variant: "destructive",
        title: "You are not in session!",
        description:
          "Email does not match the current session. Unauthorized access!",
      });
      return;
    }

    if (sessionData && sessionData.email === email) {
      router.push("/product-preview");
    }
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Toaster />
      <Header navText="Product details" navIcon={Hamburger} />

      <div className="pt-28 px-5 flex justify-between items-center border-b border-primary-dark_grey pb-3">
        <Badge border icon={MarkIcon} text="Draft" />
        <p className="text-primary-purple text-sm font-medium">
          Preview product
        </p>
      </div>

      <div className="px-5">
        <div className="pt-5">
          <FormProvider {...methods}>
            <Accordion
              type="single"
              collapsible
              defaultValue="basic-details"
              className="relative"
            >
              <AccordionItem value="basic-details">
                <AccordionTrigger>Basic details</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ProductDetailsComponent
                    title="Product Title"
                    placeholder={productTitle}
                  />

                  <ProductDetailsComponent
                    title="Product Description"
                    placeholder={productDescription}
                  />

                  <div className="grid grid-cols-2 space-x-2">
                    <ProductDetailsComponent
                      title="Price"
                      placeholder={price}
                    />
                    <ProductDetailsComponent
                      title="Old Price"
                      placeholder={oldPrice}
                    />
                  </div>

                  <div className="text-sm placeholder:font-medium disabled:opacity-100 placeholder:text-black border border-primary-dark_grey py-6 rounded-xl px-3">
                    <p className="text-xs">Product collection</p>
                    <div className="flex gap-2">
                      <Badge
                        icon={CloseIcon}
                        text="Collection"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="Interests"
                        bgColor="bg-primary-light_grey"
                      />
                    </div>
                    <p className="text-primary-lightblack font-medium text-sm mt-3">
                      Search or create collection
                    </p>
                  </div>

                  <ProductDetailsComponent
                    title="Inventory stocks"
                    placeholder={inventoryStocks ? inventoryStocks : "50"}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

            <Accordion
              type="single"
              collapsible
              defaultValue="product-details"
              className="relative"
            >
              <AccordionItem value="product-details">
                <AccordionTrigger>Product Images</AccordionTrigger>
                <AccordionContent>
                  {productImage ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={productImage}
                            alt="Product Image"
                            width={80}
                            height={80}
                            className="rounded-xl"
                          />
                          <p>logo.Img</p>
                        </div>

                        <div className="flex gap-4 items-center">
                          <Image src={LoadIcon} alt="load" width={15}></Image>
                          <Switch id="image" checked disabled />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={productImage}
                            alt="Product Image"
                            width={80}
                            height={80}
                            className="rounded-xl"
                          />
                          <p>logo.Img</p>
                        </div>

                        <div className="flex gap-4 items-center">
                          <Image src={LoadIcon} alt="load" width={15}></Image>
                          <Switch id="image" checked disabled />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={productImage}
                            alt="Product Image"
                            width={80}
                            height={80}
                            className="rounded-xl"
                          />
                          <p>logo.Img</p>
                        </div>

                        <div className="flex gap-4 items-center">
                          <Image src={LoadIcon} alt="load" width={15}></Image>
                          <Switch id="image" checked disabled />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={productImage}
                            alt="Product Image"
                            width={80}
                            height={80}
                            className="rounded-xl"
                          />
                          <p>logo.Img</p>
                        </div>

                        <div className="flex gap-4 items-center">
                          <Image src={LoadIcon} alt="load" width={15}></Image>
                          <Switch id="image" checked disabled />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <Image
                              src={GirlImage}
                              alt="Product Image"
                              width={80}
                              height={80}
                              className="rounded-xl"
                            />
                            <p>logo.Img</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <Image src={LoadIcon} alt="load" width={15}></Image>
                            <Switch id="image" checked disabled />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <Image
                              src={GirlImage}
                              alt="Product Image"
                              width={80}
                              height={80}
                              className="rounded-xl"
                            />
                            <p>logo.Img</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <Image src={LoadIcon} alt="load" width={15}></Image>
                            <Switch id="image" checked disabled />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <Image
                              src={GirlImage}
                              alt="Product Image"
                              width={80}
                              height={80}
                              className="rounded-xl"
                            />
                            <p>logo.Img</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <Image src={LoadIcon} alt="load" width={15}></Image>
                            <Switch id="image" checked disabled />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <Image
                              src={GirlImage}
                              alt="Product Image"
                              width={80}
                              height={80}
                              className="rounded-xl"
                            />
                            <p>logo.Img</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <Image src={LoadIcon} alt="load" width={15}></Image>
                            <Switch id="image" checked disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <Button
                    className="text-sm rounded-xl bg-primary-light_grey text-primary-purple w-full mt-3"
                    type="button"
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
                </AccordionContent>
              </AccordionItem>{" "}
            </Accordion>
            <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

            <Accordion
              type="single"
              collapsible
              defaultValue="inventory-variations"
              className="relative"
            >
              <AccordionItem value="inventory-variations">
                <AccordionTrigger>Inventory Variations</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Checkbox checked={true} disabled />
                    <p className="pr-16 text-primary-lightblack">
                      This product is varible; has different colors, sizes,
                      weight, materials, etc.
                    </p>
                  </div>

                  <div className="text-sm placeholder:font-medium disabled:opacity-100 placeholder:text-black border border-primary-dark_grey py-2 rounded-xl px-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs">Option 1</p>
                        <p className="text-xs">Color</p>
                      </div>
                      <div>
                        <Image src={LoadIcon} alt="loading" width={15} />
                      </div>
                    </div>
                    <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

                    <div className="flex gap-2 mt-3">
                      <Badge
                        icon={CloseIcon}
                        text="Red"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="White"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="Black"
                        bgColor="bg-primary-light_grey"
                      />
                    </div>
                    <p className="text-primary-lightblack font-medium text-sm mt-3">
                      Enter values
                    </p>
                  </div>

                  <div className="text-sm placeholder:font-medium disabled:opacity-100 placeholder:text-black border border-primary-dark_grey py-2 rounded-xl px-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs">Option 2</p>
                        <p className="text-xs">Size</p>
                      </div>
                      <div>
                        <Image src={LoadIcon} alt="loading" width={15} />
                      </div>
                    </div>
                    <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

                    <div className="flex gap-2 mt-3">
                      <Badge
                        icon={CloseIcon}
                        text="Large"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="Small"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="XL"
                        bgColor="bg-primary-light_grey"
                      />
                    </div>
                    <p className="text-primary-lightblack font-medium text-sm mt-3">
                      Enter values
                    </p>
                  </div>

                  <div className="text-sm placeholder:font-medium disabled:opacity-100 placeholder:text-black border border-primary-dark_grey py-2 rounded-xl px-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs">Option 3</p>
                        <p className="text-xs">Size</p>
                      </div>
                      <div>
                        <Image src={LoadIcon} alt="loading" width={15} />
                      </div>
                    </div>
                    <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

                    <div className="flex gap-2 mt-3">
                      <Badge
                        icon={CloseIcon}
                        text="Large"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="Small"
                        bgColor="bg-primary-light_grey"
                      />

                      <Badge
                        icon={CloseIcon}
                        text="XL"
                        bgColor="bg-primary-light_grey"
                      />
                    </div>
                    <p className="text-primary-lightblack font-medium text-sm mt-3">
                      Enter values
                    </p>
                  </div>

                  <Button
                    className="text-sm rounded-xl bg-primary-light_grey text-primary-purple w-full"
                    type="button"
                  >
                    <span>
                      <Image
                        src={PlusIcon}
                        alt="image-icon"
                        width={16}
                        className="mr-2"
                      ></Image>
                    </span>
                    Add new option
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

            <Accordion
              type="single"
              collapsible
              defaultValue="configure"
              className="relative"
            >
              <AccordionItem value="configure">
                <AccordionTrigger>
                  Configure variant prices and stocks
                </AccordionTrigger>
                <AccordionContent className="space-y-5">
                  <ConfigureVariants />
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex border border-primary-dark_grey py-3 rounded-xl px-3 justify-between font-medium">
                      <p className="text-sm">20</p>
                      <p>₦</p>
                    </div>
                    <div className="flex border border-primary-dark_grey py-3 rounded-xl px-3 justify-between font-medium">
                      <p className="text-sm">20</p>
                      <p>Units</p>
                    </div>
                  </div>
                  <ConfigureVariants />
                  <ConfigureVariants />
                  <ConfigureVariants />
                  <ConfigureVariants />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

            <Accordion
              type="single"
              collapsible
              defaultValue="shipping"
              className="relative pb-32"
            >
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping</AccordionTrigger>
                <AccordionContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <p>Self shipping</p>
                    <Checkbox checked={true} disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <p>InstaShop shipping</p>
                    <Checkbox checked={true} disabled />
                  </div>

                  <ProductDetailsComponent
                    title="Inventory stocks"
                    placeholder={inventoryStocks ? inventoryStocks : "50"}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FormProvider>
        </div>
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
            onClick={handleViewProducts}
          >
            Save
          </Button>
        </div>

        <div className="mb-3 text-center items-center">
          <Image src={Indicator} alt="indicator" className="w-fit"></Image>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
