"use client";

import _ from "lodash";
import Header from "@/components/header/page";
import Hamburger from "../../../assets/hamburger.png";
import Footer from "@/components/footer/page";
import ProductImage from "../../../assets/productImage.png";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import ForwardIcon from "../../../assets/forward.png";
import LikeIcon from "../../../assets/like.png";
import Badge from "@/components/ui/badge/badge";
import Rating from "../../../assets/rating.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import StoreLogo from "../../../assets/storeLogo2.png";
import StoreFooter from "../../../assets/storeFooter.png";
import { useToast } from "@/hooks/use-toast";

const ProductPreview = () => {
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

  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePublish = () => {
    toast({
      variant: "default",
      title: "Successful!",
      description: "Your product has been published successfully",
    });
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Product preview" navIcon={Hamburger} />
      <div className="pt-24">
        <Image
          src={productImage ? productImage : ProductImage}
          alt="product-image"
          width={500}
          height={500}
          className="w-full"
        />

        <div className="px-5 pb-32">
          <div className="mb-3">
            <div className="grid grid-cols-3 place-items-center gap-9 py-3">
              <p className="text-sm col-span-2 font-medium">
                Gucci bag - the epitome of luxury and sophistication
              </p>
              <div className="flex gap-2">
                <Image src={ForwardIcon} alt="forward" width={40} />
                <Image src={LikeIcon} alt="like" width={40} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <p className="font-medium text-xl">₦18.0</p>
                <p className="text-xs text-primary-dark_grey font-medium">
                  ₦28.0
                </p>
                <Badge
                  text="25% OFF"
                  bgColor="primary-purple"
                  textColor="text-white"
                />
              </div>
              <Image src={Rating} alt="rating" width={130} />
            </div>
          </div>

          <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

          <div className="py-3 space-y-4">
            <p className="text-sm col-span-2 font-medium">Select variants</p>
            <p className="text-xs text-primary-lightblack font-medium">
              Size: SMALL
            </p>
            <div className="grid grid-cols-6 gap-1">
              <Badge text="Filter" bgColor={"black"} textColor="text-white" />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
            </div>

            <p className="text-xs text-primary-lightblack font-medium">
              Color: White
            </p>
            <div className="grid grid-cols-6 gap-1">
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
              <Badge text="Filter" bgColor={"primary-light_grey"} />
            </div>
          </div>
          <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

          <Accordion
            type="single"
            collapsible
            defaultValue="description"
            className="relative"
          >
            <AccordionItem value="description">
              <AccordionTrigger>Product description</AccordionTrigger>
              <AccordionContent>
                <p>
                  {isExpanded
                    ? `Wholesale and drop shipping are both welcomed. For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive. For drop shipping,we could send the goods to your customers directly and won't leave information about us if you'd like to. How can track my parcel? You can track your parcel on the following website using your tracking number: www.17track.net/en (Copied to the browser to open) What can I do when purchase protection time is running out? If your purchase protection time is running out, please contact us and we can help you to extend it. So your money will not go to my account.`
                    : `Wholesale and drop shipping are both welcomed. For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive...`}
                </p>
                <p
                  onClick={toggleReadMore}
                  className="text-primary-purple font-medium  mt-2 cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <hr className="-mx-[20px] bg-primary-dark_grey h-4/5" />

          <Accordion
            type="single"
            collapsible
            defaultValue="vendor"
            className="relative"
          >
            <AccordionItem value="vendor">
              <AccordionTrigger>About this vendor</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src={StoreLogo} width={70} alt="store-logo"></Image>
                    <div>
                      <p>Gucci Store</p>
                      <Image
                        src={StoreFooter}
                        width={150}
                        alt="store-logo"
                      ></Image>
                    </div>
                  </div>
                  <p>Follow</p>
                </div>
                <div className="mt-3 space-y-3">
                  <p className="text-sm">
                    Vendor description: You can track your parcel on the
                    following website using your tracking number: www.17tra...
                  </p>
                  <div className="grid grid-cols-3 ">
                    <Badge
                      text="Quality goods"
                      bgColor={"primary-light_grey"}
                    />
                    <Badge text="Nice designs" bgColor={"primary-light_grey"} />
                    <Badge
                      text="Quality goods"
                      bgColor={"primary-light_grey"}
                    />
                  </div>

                  <div className="grid grid-cols-3 ">
                    <Badge text="Nice designs" bgColor={"primary-light_grey"} />
                    <Badge
                      text="Quality goods"
                      bgColor={"primary-light_grey"}
                    />
                    <Badge text="Nice designs" bgColor={"primary-light_grey"} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer footerText="Publish" onClick={handlePublish} />
    </div>
  );
};

export default ProductPreview;
