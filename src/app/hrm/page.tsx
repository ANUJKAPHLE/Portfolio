import Image from "next/image";

import HRMHeader from "@/Components/ReUsableComp/HRMHeader";
import WorkComponent from "@/Components/HRM/workComponent";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import UserPersona from "@/Components/HRM/UserPersona";
import IdeateAndPrototype from "@/Components/HRM/IdeateAndPrototype";
import ColorAndTypography from "@/Components/HRM/ColorAndTypography";
import UsabilityTesting from "@/Components/UsabilityTesting/UsabilityTestingComponent";
import Slidebar from "@/Components/Slidebar/Slidebar";
import SiteMap from "@/Components/SiteMap/SiteMap";
import UserFlow from "@/Components/UserFlow/UserFlow";
import Auth from "@/Components/Auth/Auth";
import DashboardUI from "@/Components/Auth/DashboardUI";

import macbook from "@/assets/Macbook.jpg";
import laptop from "@/assets/laptop.jpg";
import DesignProcess from "@/assets/DesignProcess.png";
import Timeline from "@/assets/Timeline.png";

import projectGoal from "@/texts/projectGoal.json";
import research from "@/texts/research.json";

const page = () => {
  return (
    <div>
      <div className="pt-24 px-[91px] justify-between ">
        <HRMHeader title={"SOFTNINE HRM"} body={"HRM System To Connect"} />
        <div className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <WorkComponent />
        </div>
        <TextComponent />
        <div className="flex flex-col md:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 py-28 gap-9 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="w-full sm:w-1/2">
            <Image
              src={macbook}
              className="rounded-3xl w-full h-auto"
              alt="Image 1"
              loading="lazy"
              style={{ width: "637.98px", height: "641px", objectFit: "cover" }}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src={laptop}
              className="rounded-3xl w-full h-auto"
              alt="Image 2"
              loading="lazy"
              style={{
                width: "634px",
                height: "641px",
                objectFit: "cover",
                objectPosition: "-20% 100%",
              }}
            />
          </div>
        </div>
      </div>
      <ProjectGoalComponent heading={"Project Goals icon"} text={projectGoal} />
      <div className="px-28 pb-8">
        <div className="pt-14">
          <p className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
            Design Process
          </p>
          <Image
            src={DesignProcess}
            alt="design process"
            className="w-full h-auto"
          />
        </div>
        <div className="pt-14">
          <p className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
            Project Timeline
          </p>
          <Image
            src={Timeline}
            alt="timeline"
            className="w-full h-auto pt-20 pb-32"
          />
        </div>
      </div>
      <ProjectGoalComponent heading={"Research"} text={research} />
      <UserPersona />
      <IdeateAndPrototype />
      <ColorAndTypography />
      <UsabilityTesting />
      <Slidebar />
      <SiteMap />
      <UserFlow />
      <Auth />
      <DashboardUI />
    </div>
  );
};

export default page;
