"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GroceryImage = ({ image, url, text, style }) => {
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
    <div
      className="relative h-fit w-[490px] mb-24 cursor-none"
      onMouseMove={(event) => handleHover(event, true)}
      onMouseLeave={(event) => handleHover(event, false)}
    >
      <a href={url} target="_blank" className="cursor-none">
        <Image
          src={image}
          alt=""
          fill={0}
          className="h-[490px] w-[490px] object-cover rounded-xl"
          style={style}
        />
      </a>
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
      <p className="text-[22px] leading-[43.2px] font-semibold mt-5">{text} </p>
    </div>
  );
};

export default GroceryImage;
