"use client";
import Image from "next/image";

import topIcon from "@/assets/top.png";

const ScrollToTop = () => {
  const isBrowser = () => typeof window !== "undefined";
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className=" bottom-4 right-4 left-0 px-[91px]  flex justify-end">
        <a href="" onClick={() => scrollToTop}>
          <Image src={topIcon} alt="back to top" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};

export default ScrollToTop;
