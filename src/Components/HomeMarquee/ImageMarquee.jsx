import Marquee from "react-fast-marquee";
import Image from "next/image";
import firstImage from "@/assets/marquee/1.png";
import secondImage from "@/assets/marquee/2.png";
import thirdImage from "@/assets/marquee/3.png";
import fourthImage from "@/assets/marquee/4.png";
import fifthImage from "@/assets/marquee/5.png";

const ImageMarquee = () => {
  return (
    <div className="py-40">
      <Marquee speed={50} className=" w-auto" pauseOnHover={true}>
        <div className="flex gap-x-10 w-auto h-fit ">
          <div className="pl-10">
            <Image
              src={firstImage}
              alt="first image"
              className="h-[374px] w-[380px] object-cover"
            />
          </div>
          <Image
            src={secondImage}
            alt="second image"
            className="h-[374px] w-[380px] object-cover"
          />
          <Image
            src={thirdImage}
            alt="third image"
            className="h-[374px] w-[380px] object-cover"
          />
          <Image
            src={fourthImage}
            alt="fourth image"
            className="h-[374px] w-[380px] object-cover"
          />
          <Image
            src={fifthImage}
            alt="fifth image"
            className="h-[374px] w-[380px] object-cover"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
