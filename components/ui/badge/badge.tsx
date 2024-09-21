import Image, { StaticImageData } from "next/image";

interface BadgeProps {
  icon: StaticImageData;
  text: string;
  bgColor?: string;
  border?: boolean;
}

const Badge = ({ icon, bgColor, border, text }: BadgeProps) => {
  return (
    <div
      className={`flex items-center gap-2 border rounded-2xl py-1 px-3 border-primary-dark_grey w-fit ${
        border ? "border" : "border-none"
      } ${bgColor ? `bg-${bgColor}` : ""}`}
    >
      <p className="text-sm">{text}</p>
      <Image src={icon} alt="mark" width={12}></Image>
    </div>
  );
};

export default Badge;
