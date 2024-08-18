import Image from "next/image";

import Dashboard from "@/assets/dashboardSize.jpg";
import DashboardLight from "@/assets/dashboardLight.jpg";
import DashboardLightIcon from "@/assets/dashboardLightIcon.jpg";
import DashboardDark from "@/assets/dashboardDark.jpg";
import DashboardDarkIcon from "@/assets/dashboardDarkIcon.jpg";

const Slidebar = () => {
  return (
    <div className="bg-tertiary w-auto h-[679px] mx-[95px] mt-14">
      <h1 className="text-[26px] font-bold leading-[29px] pl-9 pt-8">
        Side bar
      </h1>
      <div className="flex pl-32 pt-16 gap-80 items-center">
        <Image
          src={Dashboard}
          alt="dashboard "
          className="w-[201.19px] h-[471.99px] rounded-xl"
        />
        <div className="flex gap-20">
          <div className="flex gap-5">
            <Image
              src={DashboardLight}
              alt="dashboard light "
              className="w-[140px] h-[441px] rounded-lg"
            />
            <Image
              src={DashboardLightIcon}
              alt="dashboard light icon"
              className="w-[40.62px] h-[441px] rounded-lg"
            />
          </div>
          <div className="flex gap-5">
            <Image
              src={DashboardDark}
              alt="dashboard dark "
              className="w-[140px] h-[441px] rounded-lg"
            />
            <Image
              src={DashboardDarkIcon}
              alt="dashboard darl icon"
              className="w-[40.62px] h-[441px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
