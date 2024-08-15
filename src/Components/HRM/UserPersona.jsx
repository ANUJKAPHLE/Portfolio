import UserPersonaProfile from "./UserPersona/UserPersonaProfile";

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
      <div className="flex gap-16">
        <UserPersonaProfile />
        <UserPersonaProfile />
      </div>
    </div>
  );
};

export default UserPersona;
