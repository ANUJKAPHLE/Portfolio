import WorkComponent from "@/Components/HRM/workComponent";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import Image from "next/image";
import macbook from "@/assets/Macbook.jpg";
import laptop from "@/assets/laptop.jpg";
import DesignProcess from "@/assets/DesignProcess.png";
import Timeline from "@/assets/Timeline.png";

const page = () => {
  return (
    <div>
      <div className="pt-24 px-28 justify-between">
        <div className="bg-black text-white w-[1322px] h-[251px] text-center py-16">
          <p className="text-[32px] font-semibold">SOFTNINE HRM</p>
          <p className="text-[56px] ">HRM System To Connect </p>
        </div>
        <div className="py-12 px-24">
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
      <ProjectGoalComponent />
      <div className="px-28">
        <div className="pt-14">
          <p className="font-bold text-[34px] leading-[51px]">Design Process</p>
          <Image src={DesignProcess} alt="design process" />
        </div>
        <div className="pt-14">
          <p className="font-bold text-[34px] leading-[51px]">
            Project Timeline
          </p>
          <Image src={Timeline} alt="timeline" />
        </div>
      </div>
    </div>
  );
};

export default page;
