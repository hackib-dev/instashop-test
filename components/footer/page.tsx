import Image from "next/image";
import { Button } from "../ui/button";
import Indicator from "../../assets/indicator.png";

interface FooterProps {
  footerText: string;
  onClick?: () => void;
}

const Footer = ({ footerText, onClick }: FooterProps) => {
  return (
    <div className="bg-white z-20 fixed left-0 right-0 bottom-0 max-w-sm px-5 flex flex-col items-center border-t border-primary-grey mx-auto">
      <Button
        className="w-full rounded-[90px] shadow-3xl shadow-primary-purple mt-4 mb-11"
        type="submit"
        onClick={onClick}
        size="lg"
      >
        {footerText}
      </Button>
      <div className="mb-3 text-center items-center">
        <Image src={Indicator} alt="indicator" className="w-fit"></Image>
      </div>
    </div>
  );
};

export default Footer;
