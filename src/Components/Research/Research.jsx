import Image from "next/image";

import testImage from "@/assets/1.jpg";
import testImage2 from "@/assets/2.jpg";
import testImage3 from "@/assets/3.jpg";

const Research = () => {
  return (
    <div className="bg-black text-white pt-20 px-6 md:px-12 lg:px-[91px] justify-between">
      <h1 className="font-bold leading-[42px]">Research</h1>
      <p className="text-lg leading-[27px] pt-3">
        Effective research will inform the development of features that resonate
        with users, such as personalization, easy navigation, and eco-conscious
        choices. It will also guide strategic decisions on how to market the
        app, reduce environmental impacts, and adapt to evolving consumer
        trends.
      </p>
      <div className="w-auto flex flex-wrap gap-x-64 h-fit  mt-40">
        <div className="h-fit w-[490px] mb-24">
          <Image
            src={testImage}
            alt=""
            className="h-[490px] w-[490px] object-cover rounded-xl "
            style={{ objectPosition: "38% 50%" }}
          />
          <p className="text-[22px] leading-[43.2px] font-semibold mt-5">
            Consumer Behaviour During Online Grocery Shopping
          </p>
        </div>
        <div className="h-fit w-[490px]">
          <Image
            src={testImage2}
            alt=""
            className="h-[490px] w-[490px] object-cover rounded-xl "
            style={{ objectPosition: "38% 50%" }}
          />
          <p className="text-[22px] leading-[43.2px] font-semibold mt-5">
            Effects of E-Commerce on Greenhouse Gas Emissions
          </p>
        </div>
        <div className="h-fit w-[490px]">
          <Image
            src={testImage3}
            alt=""
            className="h-[490px] w-[490px] object-cover rounded-xl "
            style={{ objectPosition: "1% 50%" }}
          />
          <p className="text-[22px] leading-[43.2px] font-semibold mt-5">
            Marketing research on Mobile apps: past, present and future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
