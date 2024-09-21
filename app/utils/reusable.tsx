"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import BackArrow from "../../assets/backArroow.png";

interface NavProps {
  navText?: string;
  navIcon?: StaticImageData;
}

export const Nav = ({ navText, navIcon }: NavProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center ">
        <Image
          src={BackArrow}
          alt="back"
          onClick={handleBackClick}
          style={{ cursor: "pointer" }}
          height={14}
        />
        <p className="font-medium">{navText}</p>
      </div>
      {navIcon && (
        <div>
          <Image src={navIcon!} alt="hamburger" height={14} />
        </div>
      )}
    </div>
  );
};
