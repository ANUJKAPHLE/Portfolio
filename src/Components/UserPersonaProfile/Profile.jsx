import Image from "next/image";

const UserPersonaProfile = ({ imgName, text }) => {
  return (
    <div className="mt-24">
      <div className="bg-SecondaryBgColor text-white w-full sm:w-[623px] h-auto rounded-[42px] p-4 sm:p-6 md:p-8">
        <div className="p-[29px] flex gap-4">
          <Image
            src={imgName}
            className="rounded-full overflow-hidden"
            alt="profile"
            style={{
              height: "100px",
              width: "100px",
              objectFit: "cover",
            }}
          />
          <div className="mt-4">
            <p className="md:text-[26px] sm:text-[30px] leading-[39px] font-medium">
              {text.name}
            </p>
            <p className="md:text-lg sm:text-xl font-light leading-[27px]">
              {text.age}
            </p>
          </div>
        </div>
        <div className="pl-12">
          <div>
            <h2 className="leading-[27px] mt-5 text-[20px] ">Background</h2>
            <p className="text-lg leading-[27px] mt-2 w-full">
              {text.Background}
            </p>
          </div>
          <div>
            <h2 className="leading-[30px] mt-7 text-[20px]">Needs & Goal</h2>
            <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-full">
              {text["Needs & Goal"].map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="leading-[30px] mt-7 text-[20px]">Pain Points</h2>
            <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-full">
              {text["Pain Points"].map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersonaProfile;
