import hrmText from "@/texts/hrmText.json";

const WorkComponent = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      {Object.entries(hrmText).map(([key, value]) => (
        <div className="py-2" key={key}>
          <p className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
            {key}
          </p>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] py-2 leading-[27px] sm:leading-[30px] md:leading-[33px] w-full">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
