"use client";
import React from "react";
import ContentStrategist from "@/Components/contentStrategist/ContentStrategist";
import Collaborate from "@/Components/Collab/Collaborate";

export default function Home() {
  return (
    <div>
      <div className="flex pt-24 px-28 justify-between">
        <div className=" w-[825px] h-[183px]">
          <p className="text-[32px] font-bold leading-[48px]">Hey There! 👋</p>
          <p className="pt-5 text-[40.88px] font-normal leading-[61.32px] ">
            Welcome to my portfolio! As a designer, I specialize in creating
            intuitive and visually appealing digital experiences
          </p>
        </div>
        <div>
          <ContentStrategist />
        </div>
      </div>
      <Collaborate />
    </div>
  );
}
