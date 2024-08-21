import work from "@/texts/work.json";

const WorkComponent = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 sm:gap-12 md:gap-[130px]">
      {Object.entries(work).map(([key, value]) => (
        <div className=" text-center" key={key}>
          <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px] leading-[42px]">
            {key}
          </h1>
          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-xl text-balance leading-[30px] sm:leading-[36px] md:leading-[42px]">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
