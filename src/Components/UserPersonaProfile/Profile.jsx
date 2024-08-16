import Image from "next/image";

const UserPersonaProfile = ({ imgName, text }) => {
  return (
    <div className="mt-24">
      <div className="bg-SecondaryBgColor text-white w-[623px] h-[1170px] rounded-[42px]">
        <div>
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
              <p className="text-[26px] leading-[39px] font-medium">
                {text.name}
              </p>
              <p className="text-lg font-light leading-[27px]">{text.age} </p>
            </div>
          </div>
          <div className="pl-12">
            <div>
              <h2 className="leading-[27px] mt-5">Background</h2>
              <p className="text-lg leading-[27px] mt-2 w-[550px]">
                {text.Background}
              </p>
            </div>
            <div>
              <h2 className="leading-[30px] mt-7">Needs & Goal</h2>
              <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-[550px]">
                {text["Needs & Goal"].map((item, index) => (
                  <li key={index} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="leading-[30px] mt-7">Pain Points</h2>
              <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-[550px]">
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
    </div>
  );
};

export default UserPersonaProfile;
