import Image from "next/image";
import bgImage from "@/assets/bg_Image.png";

const Profile = () => {
  return (
    <div className="flex justify-between pt-24 px-28 mb-56 ">
      <h1 className="text-[32px] w-3/4 mt-6 mb-4">
        Hello! I’m Anuj Kaphle, a UI/UX designer from Kathmandu with more than
        two years of professional experience. My work focuses on crafting
        intuitive and engaging user experiences.
      </h1>
      <div className="w-3/4 h-80 relative ">
        <Image
          src={bgImage}
          alt=""
          //   layout="fill"
          //   objectFit="cover"
          //   className=""
        />
      </div>
    </div>
  );
};

export default Profile;
