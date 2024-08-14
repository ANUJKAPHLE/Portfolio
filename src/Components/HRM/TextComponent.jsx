import hrmText from "@/texts/hrmText.json";

const WorkComponent = () => {
  return (
    <div className="w-[1289px]">
      {Object.entries(hrmText).map(([key, value]) => (
        <div className="py-2" key={key}>
          <p className="font-bold text-[28px] leading-[42px]">{key}</p>
          <p className="text-[18px] py-2 leading-[27px] w-[1225px]">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
