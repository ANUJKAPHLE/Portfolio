"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assets/bg_Image.jpg";

const Profile = () => {
  const text =
    " Hello! I’m Anuj Kaphle, a UI/UX designer from Kathmandu with more than two years of professional experience. My work focuses on crafting intuitive and engaging user experiences.".split(
      " "
    );
  return (
    <div className=" flex relative w-full h-screen overflow-hidden pt-24 px-28 ">
      <div className="flex-1 pr-[570px] w-[743px] h-[130px] overflow-visible relative z-10 text-[22px] font-semibold leading-[43.2px] mt-5">
        {text.map((item, index) => (
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
      </div>
      <div className="w-[51.3%] pl-1 bg-image absolute top-0 right-0 z-0 pt-24">
        <Image src={bgImage} alt="" className="h-[461px] w-[665px]" />
      </div>
    </div>
  );
};

export default Profile;
