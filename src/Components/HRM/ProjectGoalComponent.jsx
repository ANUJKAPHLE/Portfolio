const ProjectGoalComponent = ({ heading, text }) => {
  return (
    <div className="bg-black text-white px-[98px] py-[86px]">
      <h1 className="font-bold text-[34px] leading-[51px]">{heading}</h1>

      <div className="flex flex-wrap gap-x-[113px]  pl-2">
        {Object.entries(text).map(([key, value]) => (
          <div className="w-[45%]" key={key}>
            <p className="font-bold text-2xl leading-[43.2px] pt-11">{key}</p>
            <p className="text-lg leading-9 pt-3">{String(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoalComponent;
