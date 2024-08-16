import UserPersonaProfile from "@/Components/UserPersonaProfile/Profile";

import SujanPradhan from "@/assets/Sujan_Pradhan.png";
import SabinDhakal from "@/assets/Sabin_Dhakal.png";

import SujanPradhanText from "@/texts/sujanPardhan.json";
import SabinDhakalText from "@/texts/sabinDhakal.json";

const UserPersona = () => {
  return (
    <div className="pt-20 px-[100px] pb-96">
      <div>
        <h1 className="font-bold leading-[42px]">User Persona</h1>
        <p className="text-lg leading-7 mt-5 w-[1108px] h-[54px]">
          For our HRM system project, we developed two user personas to guide
          our design and development process. These personas represent typical
          users of the system and help ensure our solutions meet their needs
          effectively.
        </p>
      </div>
      <div className="flex mt-7 gap-16">
        <UserPersonaProfile imgName={SujanPradhan} text={SujanPradhanText} />
        <UserPersonaProfile imgName={SabinDhakal} text={SabinDhakalText} />
      </div>
    </div>
  );
};

export default UserPersona;
