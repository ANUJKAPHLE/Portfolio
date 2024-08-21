const ProjectGoalComponent = ({ heading, text }) => {
  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[98px] py-10 sm:py-12 md:py-16 lg:py-[86px]">
      <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[42px]">
        {heading}
      </h1>

      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[113px]">
        {Object.entries(text).map(([key, value]) => (
          <div className="w-full lg:w-[45%]" key={key}>
            <p className="font-bold text-[22px] sm:text-[24px] md:text-[26px] leading-[43.2px] pt-10">
              {key}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-[27px] sm:leading-[30px] md:leading-[33px] pt-3">
              {String(value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoalComponent;
