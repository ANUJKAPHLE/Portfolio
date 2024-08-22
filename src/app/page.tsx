"use client";
import React from "react";
import ContentStrategist from "@/Components/contentStrategist/ContentStrategist";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
