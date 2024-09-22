import { BatteryIcon, NetworkIcon, WifiIcon } from "@/assets";
import { Nav } from "@/app/utils/reusable";
import { StaticImageData } from "next/image";

interface HeaderProps {
  navText?: string;
  navIcon?: StaticImageData;
}

const Header = ({ navText, navIcon }: HeaderProps) => {
  const currentTime = new Date();
  const formattedTime = `${currentTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`;

  return (
    <div className="w-full xl:max-w-sm bg-white fixed top-0 left-0 right-0 z-50 mx-auto">
      <div className="px-5 py-4 bg-white  ">
        <div className="flex gap-6 items-center justify-between mb-8">
          <p className="font-bold">{formattedTime}</p>
          <div className="flex gap-1">
            <NetworkIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {navText && <Nav navText={navText} navIcon={navIcon} />}
      </div>
    </div>
  );
};

export default Header;
