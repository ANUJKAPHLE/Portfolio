"use client";

import ContentStrategist from "@/Components/contentStrategist/ContentStrategist";
import FeaturedWork from "@/Components/FeaturedWork/FeaturedWork";
import Button from "@/widgets/button/Button";
import ImageMarquee from "@/Components/HomeMarquee/ImageMarquee";

export default function Home() {
  return (
    <div className="pb-10">
      <div className="sm:flex pt-24 px-[116px] justify-between">
        <div className="sm:w-max md:w-auto">
          <p className="text-[32px] font-bold leading-[48px]">Hey There! 👋</p>
          <p className="pt-5 text-[40.88px] leading-[61.32px] ">
            Welcome to my portfolio! As a designer, I specialize in creating
            intuitive and visually appealing digital experiences
          </p>
        </div>
        <ContentStrategist />
      </div>
      <FeaturedWork className={"bg-black text-white px-[91px] mt-40 pt-16"} />
      <div className="flex justify-center items-center">
        <div className=" px-[177px] mt-10 flex gap-72">
          <h1 className="font-inter text-[106.41px] leading-[128.7px]">
            Got a <br /> IN MIND? <br />
            PROJECT
          </h1>
          <div className="py-36 space-x-24">
            <a href="mailto:Kaphleanuj@gmail.com">
              <Button
                type="submit"
                className="bg-black text-white rounded-full px-7 py-[13px] w-[389px] h-[122px] font-medium text-[33px] leading-[49.5px]"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </div>
      <ImageMarquee />
    </div>
  );
}
