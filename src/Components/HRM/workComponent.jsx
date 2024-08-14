import work from "@/texts/work.json";

const WorkComponent = () => {
  return (
    <div className="flex gap-[130px] ">
      {Object.entries(work).map(([key, value]) => (
        <div className="grid text-center" key={key}>
          <h1 className="font-bold text-[28px] leading-[42px] ">{key}</h1>
          <p className="font-medium text-xl text-balance leading-[30px]">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
