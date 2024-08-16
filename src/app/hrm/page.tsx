import Image from "next/image";

import WorkComponent from "@/Components/HRM/workComponent";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import UserPersona from "@/Components/HRM/UserPersona";
import IdeateAndPrototype from "@/Components/HRM/IdeateAndPrototype";

import macbook from "@/assets/Macbook.jpg";
import laptop from "@/assets/laptop.jpg";
import DesignProcess from "@/assets/DesignProcess.png";
import Timeline from "@/assets/Timeline.png";

import projectGoal from "@/texts/projectGoal.json";
import research from "@/texts/research.json";

const page = () => {
  return (
    <div>
      <div className="pt-24 px-[91px] justify-between">
        <div className="bg-black text-white w-[1331px] h-[251px] text-center py-16">
          <p className="text-[32px] font-semibold leading-[48px]">
            SOFTNINE HRM
          </p>
          <p className="text-[40px] leading-[48.41px] pt-2 font-inter">
            HRM System To Connect
          </p>
        </div>
        <div className="py-20 px-24">
          <WorkComponent />
        </div>
        <TextComponent />
        <div className="flex justify-center space-x-4 py-28 gap-9">
          <div className="w-1/2">
            <Image
              src={macbook}
              className="rounded-3xl"
              alt="Image 1"
              loading="lazy"
              style={{ width: "637.98px", height: "641px", objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2">
            <Image
              src={laptop}
              className="rounded-3xl"
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
          <p className="font-bold text-[28px] leading-[42px]">Design Process</p>
          <Image src={DesignProcess} alt="design process" />
        </div>
        <div className="pt-14">
          <p className="font-bold text-[28px] leading-[42px]">
            Project Timeline
          </p>
          <Image src={Timeline} alt="timeline" className="pt-20 pb-32" />
        </div>
      </div>
      <ProjectGoalComponent heading={"Research"} text={research} />
      <UserPersona />
      <IdeateAndPrototype />
      <div className="mb-16" />
    </div>
  );
};

export default page;
