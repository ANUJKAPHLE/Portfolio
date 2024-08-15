const ProjectGoalComponent = ({ heading, text }) => {
  return (
    <div className="bg-black text-white px-[98px] py-[86px]">
      <h1 className="font-bold text-[28px] leading-[42px]">{heading}</h1>

      <div className="flex flex-wrap gap-x-[113px]">
        {Object.entries(text).map(([key, value]) => (
          <div className="w-[45%]" key={key}>
            <p className="font-bold text-[22px] leading-[43.2px] pt-10">
              {key}
            </p>
            <p className="text-lg leading-[27px] pt-3">{String(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoalComponent;
