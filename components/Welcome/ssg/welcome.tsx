"use client";

import Image from "next/image";
import { OnboardingImage } from "@/assets";
import MarkIcon from "../../../assets/mark.png";
import Indicator from "../../../assets/indicator.png";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/page";
import { WelcomePageProps } from "../types";
import { useRouter } from "next/navigation";

const Welcome = ({ welcomeMessage, theme }: WelcomePageProps) => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/signup");
  };
  return (
    <div className="bg-white">
      <Header />
      <div className="pt-12 flex justify-center flex-col items-center text-center px-8">
        <OnboardingImage />
        <div className="px-4 mt-6">
          <h4 className="text-4xl font-bold mb-2">{welcomeMessage}</h4>
          <p className="text-sm">{theme}</p>
        </div>
        <div className="flex flex-col border border-primary-purple bg-primary-light_purple px-4 py-3 rounded-xl gap-3 mt-6 mb-32 font-medium min-w-[296px] text-sm">
          <div className="flex gap-4">
            <Image src={MarkIcon} alt="mark" width={20} height={20} />
            <p> Reach Millions of Shoppers</p>
          </div>
          <div className="flex gap-4">
            <Image src={MarkIcon} alt="mark" width={20} height={20} />
            <p> Reach Millions of Shoppers</p>
          </div>
          <div className="flex gap-4">
            <Image src={MarkIcon} alt="mark" width={20} height={20} />
            <p> Reach Millions of Shoppers</p>
          </div>
          <div className="flex gap-4">
            <Image src={MarkIcon} alt="mark" width={20} height={20} />
            <p> Reach Millions of Shoppers</p>
          </div>
        </div>

        <div className="bg-white z-20 fixed left-0 right-0 bottom-0 w-full xl:max-w-sm px-5 flex flex-col items-center  mx-auto">
          <Button
            className="w-full rounded-[90px] shadow-3xl shadow-primary-purple mt-4 mb-11"
            type="submit"
            onClick={handleGetStarted}
            size="lg"
          >
            Get Started
          </Button>
          <div className="mb-3 text-center items-center">
            <Image src={Indicator} alt="indicator" className="w-fit"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
