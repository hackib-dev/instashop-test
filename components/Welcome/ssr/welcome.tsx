import Image from "next/image";
import { OnboardingImage } from "@/assets";
import MarkIcon from "../../../assets/mark.png";
import Indicator from "../../../assets/indicator.png";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/page";
import { WelcomePageProps } from "../types";
import { useAppSelector } from "@/store/hooks";

const WelcomePage = ({ welcomeMessage, theme }: WelcomePageProps) => {
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
        <div className="w-full mb-11">
          <Button className="w-full rounded-[90px]  shadow-3xl shadow-primary-purple">
            Get Started
          </Button>
        </div>
        <div className="mb-3">
          <Image src={Indicator} alt="indicator" className="w-fit"></Image>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
