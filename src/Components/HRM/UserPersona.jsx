import UserPersonaProfile from "@/Components/UserPersonaProfile/Profile";

import SujanPradhan from "@/assets/Sujan_Pradhan.png";
import SabinDhakal from "@/assets/Sabin_Dhakal.png";

import SujanPradhanText from "@/texts/sujanPardhan.json";
import SabinDhakalText from "@/texts/sabinDhakal.json";

const UserPersona = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pb-28">
      <div>
        <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
          User Persona
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-lg leading-7 mt-5 w-full">
          For our HRM system project, we developed two user personas to guide
          our design and development process. These personas represent typical
          users of the system and help ensure our solutions meet their needs
          effectively.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-7 gap-8 sm:gap-16 object-center justify-center">
        <UserPersonaProfile imgName={SujanPradhan} text={SujanPradhanText} />
        <UserPersonaProfile imgName={SabinDhakal} text={SabinDhakalText} />
      </div>
    </div>
  );
};

export default UserPersona;
