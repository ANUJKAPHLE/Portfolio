"use client";
import { motion } from "framer-motion";

import ContentStrategist from "@/Components/contentStrategist/ContentStrategist";
import FeaturedWork from "@/Components/FeaturedWork/FeaturedWork";
import Button from "@/widgets/button/Button";
import ImageMarquee from "@/Components/HomeMarquee/ImageMarquee";

export default function Home() {
  const bio =
    " Welcome to my portfolio! As a designer, I specialize in creating intuitive and visually appealing digital experiences";

  return (
    <div className="pb-10">
      <div className="sm:flex pt-24 px-[116px] justify-between">
        <div className="sm:w-max md:w-auto lg:w-2/3">
          <p className="text-[32px] font-bold leading-[48px]">Hey There! 👋</p>
          <p className="pt-5 text-[32px] leading-[61.32px] mb-10">
            {bio.split(" ").map((item, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                {item}{" "}
              </motion.span>
            ))}
          </p>
        </div>
        <ContentStrategist />
      </div>
      <FeaturedWork className={"bg-black text-white px-[91px] mt-40 pt-16"} />
      <div className="flex justify-center items-center py-40">
        <div className="px-4 flex flex-col md:flex-row md:gap-72 md:px-[177px]">
          <h1 className="font-inter text-[48px] leading-[56px] md:text-[106.41px] md:leading-[128.7px]">
            Got a <br />
            PROJECT <br />
            IN MIND?
          </h1>
          <div className="py-12 md:py-36 space-y-6 md:space-x-24">
            <a href="mailto:Kaphleanuj@gmail.com">
              <button
                type="submit"
                className="bg-black text-white rounded-full px-4 py-3 w-full md:w-[389px] md:h-[122px] font-medium text-[24px] leading-[28px] md:text-[42px] md:leading-[49.5px]"
              >
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <ImageMarquee />
    </div>
  );
}
