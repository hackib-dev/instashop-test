"use client";

import _ from "lodash";
import Header from "@/components/header/page";
import Hamburger from "../../../assets/hamburger.png";
import Footer from "@/components/footer/page";

const ProductPreview = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Product preview" navIcon={Hamburger} />
      <Footer footerText="Publish" />
    </div>
  );
};

export default ProductPreview;
