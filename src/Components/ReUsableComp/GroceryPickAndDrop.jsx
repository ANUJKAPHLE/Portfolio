import Image from "next/image";
import { twMerge } from "tailwind-merge";

import mbl from "@/assets/Mbl.png";

const GroceryPickAndDrop = ({ heading, text, theme, image, className }) => {
  return (
    <div className={twMerge("py-20 px-[91px] ", className)}>
      <div>
        <h1 className="leading-[42px] font-bold">{heading}</h1>
        <p className="text-lg leading-[27px] pt-3">{text}</p>
      </div>
      <div className="mt-24 flex justify-center gap-x-52 h-auto w-auto">
        <div className=" relative">
          <h1 className="bold leading-[42px] text-center mb-6">{theme[0]}</h1>
          <div className="w-[423px] h-auto relative">
            <div className="w-[445px] h-[885px] absolute top-0 left-0">
              <Image src={mbl} alt="mbl" className="w-full h-full" />
            </div>
            <div className="pl-5 pt-4">
              <Image
                fill={0}
                src={image[0]}
                alt="home delivery dark theme"
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-32">
          <h1 className="bold leading-[42px] text-center mb-6">{theme[1]}</h1>

          <div className="w-[423px] h-auto relative">
            <div className="w-[445px] h-[885px] absolute top-0 left-0">
              <Image src={mbl} alt="mbl" className="w-full h-full" />
            </div>
            <div className="pl-5 pt-4">
              <Image
                fill={0}
                src={image[1]}
                alt="home delivery dark theme"
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryPickAndDrop;
