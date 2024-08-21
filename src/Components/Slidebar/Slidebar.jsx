import Image from "next/image";

import slideBar from "@/assets/slideBar.png";

const Slidebar = () => {
  return (
    <div className="bg-tertiary w-auto h-auto mx-4 sm:mx-6 md:mx-8 lg:mx-[95px] mt-14">
      <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-[29px] pl-4 sm:pl-6 md:pl-8 lg:pl-9 pt-8">
        Side bar
      </h1>
      <div className="flex justify-center items-center pt-5">
        <Image
          src={slideBar}
          alt="dashboard "
          className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Slidebar;
