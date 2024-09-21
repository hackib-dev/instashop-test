import ImgIcon from "../../assets/imgIcon.png";
import Image from "next/image";
import LoadIcon from "../../assets/load.png";

const ConfigureVariants = () => {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex  gap-2 items-center">
        <Image src={ImgIcon} alt="img-icon" width={50}></Image>
        <div>
          <p>Red - L - leather</p>
          <p className="text-primary-lightblack">₦20 • 20X</p>
        </div>
      </div>
      <Image src={LoadIcon} alt="loading" width={15} />
    </div>
  );
};

export default ConfigureVariants;
