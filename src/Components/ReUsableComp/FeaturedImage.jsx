import React from "react";
import Image from "next/image";
import { useState } from "react";
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

  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleHover = (event, hover) => {
    setIsHovered(hover);
    if (hover) {
      const rect = event.currentTarget.getBoundingClientRect();
      setButtonPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };
  return (
    <div className="relative cursor-none overflow-hidden">
      <div
        className=" h-fit w-fit"
        onMouseMove={(event) => handleHover(event, true)}
        onMouseLeave={(event) => handleHover(event, false)}
      >
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
        {isHovered && (
          <motion.div
            className="absolute bg-black text-white w-24 h-24 p-[26px] rounded-full ring-2 ring-black"
            style={{ top: buttonPosition.y, left: buttonPosition.x }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Read More
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FeaturedImage;
