import { twMerge } from "tailwind-merge";

const ProjectGoalComponent = ({ heading, text, className }) => {
  return (
    <div className={twMerge("py-10 sm:py-12 md:py-16 lg:py-[86px]", className)}>
      <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
        {heading}
      </h1>

      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[113px]">
        {Object.entries(text).map(([key, value]) => (
          <div className="w-full lg:w-[45%]" key={key}>
            <p className="font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[22px] leading-[43.2px] pt-10">
              {key}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-lg leading-[27px] sm:leading-[30px] md:leading-[33px] pt-3">
              {String(value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoalComponent;
