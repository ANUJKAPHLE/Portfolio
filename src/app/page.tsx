"use client";
import React from "react";
import ContentStrategist from "@/Components/contentStrategist/ContentStrategist";

export default function Home() {
  return (
    <div className="flex pt-24 px-28 justify-between">
      <div className="text-4xl w-7/12">
        <p className="font-bold">Hey There! 👋</p>
        <p className="pt-5 ">
          Welcome to my portfolio! As a designer, I specialize in creating
          intuitive and visually appealing digital experiences
        </p>
      </div>
      <div>
        <ContentStrategist />
      </div>
    </div>
  );
}
