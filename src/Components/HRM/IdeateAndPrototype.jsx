import textData from "@/texts/ideateAndPrototype.json";

const IdeateAndPrototype = () => {
  return (
    <div className="pl-[91px]">
      <h1 className="font-bold leading-[42px]">Ideate & Prototype</h1>
      <div className="text-center pt-10">
        <p className="font-semibold text-[22px] leading-[43.2px] pb-9">
          How might we exercise
        </p>
      </div>
      <div className=" flex flex-wrap gap-[40px]">
        {Object.entries(textData).map(([key, value]) => (
          <div key={key}>
            {value.map((item, index) => (
              <div
                key={index}
                className="w-[189px] h-[187px] px-[18px] py-[12px] mt-5"
                style={{ backgroundColor: item.color }}
              >
                <p className="w-[157px] h-fit text-xs font-medium leading-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeateAndPrototype;
