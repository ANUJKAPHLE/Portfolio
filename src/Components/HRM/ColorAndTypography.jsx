import textData from "@/texts/colorAndTypography.json";

const ColorAndTypography = () => {
  return (
    <div className="py-24">
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
  );
};

export default ColorAndTypography;
