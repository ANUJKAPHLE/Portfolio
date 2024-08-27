import FeaturedImage from "@/Components/ReUsableComp/FeaturedImage";

import featuresWorkLaptop from "@/assets/featuresWorkLaptop.png";
import featuresWorkGrocery from "@/assets/featuresWorkGrocery.png";
import featuresWorkDoctor from "@/assets/featuresWorkDoctor.png";
import featuresWorkScene from "@/assets/featuresWorkScene.png";

const FeaturedWork = ({ className }) => {
  return (
    <div className={className}>
      <p className="font-bold text-[40.01px] leading-[60.01px] pl-[60px]">
        Featured Work
      </p>
      <div className="flex flex-wrap gap-x-36 pb-32 justify-center items-center">
        <a href="/hrm" target="_blank">
          <FeaturedImage
            image={featuresWorkLaptop}
            subHeading={"Softnine HRM System"}
            text={
              "HRM is an advanced(HRM) software that enables organizations to"
            }
            imageWidth="550px"
            imageHeight="359px"
            positionLeft="-30px"
            positionTop="-10px"
          />
        </a>
        <a href="/grocery" target="_blank">
          <FeaturedImage
            image={featuresWorkGrocery}
            subHeading={"Grocery works"}
            text={
              "Grocery Works is an innovative mobile application designed to revolutionize the way users shop for groceries."
            }
            imageWidth="348px"
            imageHeight="390px"
            positionLeft="30px"
            positionTop="18px"
          />
        </a>
        <a
          href="https://www.behance.net/gallery/120770647/Doctor-help-app-case-study"
          target="_blank"
        >
          <FeaturedImage
            image={featuresWorkDoctor}
            subHeading={"Doctor Help"}
            text={
              "The doctor help app is about appointment booking and doctor sometime"
            }
            imageWidth="254.84px"
            imageHeight="376.6px"
            positionLeft="90px"
            positionTop="-10px"
          />
        </a>
        <a
          href="https://www.figma.com/proto/UY9Mh4EVxzzYmFNL5KVJTD/case-1?page-id=0%3A1&node-id=1-124&starting-point-node-id=1%3A124&t=rPgfBouB7cyyxiU8-1"
          target="_blank"
        >
          <FeaturedImage
            image={featuresWorkScene}
            subHeading={"Website"}
            text={
              "Arhant IT Solution is a technology company focused on providing a range of digital solutions"
            }
            imageWidth="566px"
            imageHeight="424px"
            positionLeft="-30px"
            positionTop="-10px"
          />
        </a>
      </div>
    </div>
  );
};

export default FeaturedWork;
