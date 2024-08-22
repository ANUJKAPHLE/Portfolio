import Image from "next/image";

import appScreenDesign1 from "@/assets/AppScreenDesign1.png";
import appScreenDesign2 from "@/assets/AppScreenDesign2.png";
import appScreenDesign3 from "@/assets/AppScreenDesign3.png";
import appScreenDesign4 from "@/assets/AppScreenDesign4.png";
import appScreenDesign5 from "@/assets/AppScreenDesign5.png";

const AppScreenDesign = () => {
  return (
    <div className="px-[91px] pt-12 h-[3200px] sm:h-[2400px] md:h-[3000px] lg:h-[3454px] xl:h-[3900px]">
      <h1 className="font-bold leading-[42px]">70+ App Screen Design</h1>

      <div className=" flex justify-center w-auto h-auto">
        <div className="relative">
          <Image
            src={appScreenDesign1}
            alt="app screen design 1"
            className="h-auto w-auto"
          />
          <div className="absolute top-[600px] left-0 w-full h-full sm:top-[450px] md:top-[470px] lg:top-[500px] xl:top-[600px] 2xl:top-[700px]">
            <Image
              src={appScreenDesign2}
              alt="app screen design 2"
              className="h-max w-max"
            />
            <div className="absolute top-[600px] left-0 w-full h-full sm:top-[450px] md:top-[470px] lg:top-[500px] xl:top-[600px] 2xl:top-[700px]">
              <Image
                src={appScreenDesign3}
                alt="app screen design 3"
                className="h-auto w-auto"
              />
              <div className="absolute top-[600px] left-0 w-full h-full sm:top-[450px] md:top-[470px] lg:top-[500px] xl:top-[600px] 2xl:top-[700px]">
                <Image
                  src={appScreenDesign4}
                  alt="app screen design 4"
                  className="h-max w-max"
                />
                <div className="absolute top-[600px] left-0 w-full h-full sm:top-[450px] md:top-[470px] lg:top-[500px] xl:top-[600px] 2xl:top-[700px]">
                  <Image
                    src={appScreenDesign5}
                    alt="app screen design 5"
                    className="h-max w-max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreenDesign;
