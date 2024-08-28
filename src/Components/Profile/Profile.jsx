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
    <div className="flex relative w-full h-screen pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28">
      <div className="w-full flex-1 pr-0 lg:pr-[570px] z-10 text-[32px] font-semibold leading-[50px] mt-5">
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
      <div className="flex w-full lg:w-[51.3%] pl-10 absolute top-0 md:right-10 pt-24">
        <Image
          src={bgImage}
          alt=""
          className="h-auto lg:h-[461px] xl:h-auto w-full lg:w-[665px] xl:w-full"
        />
      </div>
    </div>
  );
};

export default Profile;
