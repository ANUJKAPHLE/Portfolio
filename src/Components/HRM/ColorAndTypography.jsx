import textData from "@/texts/colorAndTypography.json";

const ColorAndTypography = () => {
  return (
    <div>
      <div className="py-24">
        <div>
          <h1 className="font-bold text-center leading-[42px] pb-9">
            Color & Typography
          </h1>
          <div className="pl-[86px] w-[1332px] h-[628px] gap-x-[150px] grid grid-cols-4 ">
            {Object.entries(textData).map(([key, value]) => (
              <div className="mt-8" key={key}>
                <div
                  className="w-[253px] h-[180px] rounded"
                  style={{ backgroundColor: key }}
                />
                <div className="text-xl leading-8 mt-1">
                  <p className="font-semibold">{value[0]}</p>
                  <p className="text-secondaryTextColor ">{value[1]}</p>
                  <p className="text-secondaryTextColor ">{key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-[89px] flex gap-44 text-center text-white font- mb-12">
        <div
          className="h-[360px] w-[557px] pt-[113px] rounded-[22px]"
          style={{ backgroundColor: "#DC4E4E" }}
        >
          <span className="text-[78px] leading-[117px] text-1stroke font-medium">
            Poppins
          </span>
        </div>
        <div
          className="h-[360px] w-[557px] pt-[121px] rounded-[22px]"
          style={{ backgroundColor: "#08368E" }}
        >
          <span className="text-[78px] leading-[117px] text-2stroke font-medium">
            Montserrat
          </span>
        </div>
      </div>
    </div>
  );
};

export default ColorAndTypography;
