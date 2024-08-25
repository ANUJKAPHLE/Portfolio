import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedImage = ({
  image,
  subHeading,
  text,
  imageWidth,
  imageHeight,
  positionLeft,
  positionTop,
}) => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.15 },
  };

  return (
    <div className="w-fit mt-20">
      <div className="bg-white text-black h-[650px] w-full max-w-[541px] p-6 sm:p-12 rounded-[40px]">
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
          className="relative"
          style={{
            height: imageHeight,
            width: imageWidth,
            top: positionTop,
            left: positionLeft,
          }}
        >
          <Image
            src={image}
            alt=" "
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </motion.div>
        <div className="pt-6 sm:pt-12">
          <h1 className="text-[22px] sm:text-[27px] font-medium leading-[33px] sm:leading-[40.5px]">
            {subHeading}
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] mt-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
