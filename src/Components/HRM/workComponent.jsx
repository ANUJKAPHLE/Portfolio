import work from "@/texts/work.json";

const WorkComponent = () => {
  return (
    <div className="flex gap-[130px] ">
      {Object.entries(work).map(([key, value]) => (
        <div className="grid text-center" key={key}>
          <p className="font-bold text-[28px] ">{key}</p>
          <p className="font-medium text-xl text-balance">{String(value)}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
