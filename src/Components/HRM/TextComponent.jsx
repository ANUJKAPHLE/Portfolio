import hrmText from "@/texts/hrmText.json";

const WorkComponent = () => {
  return (
    <div className="w-[1289px]">
      {Object.entries(hrmText).map(([key, value]) => (
        <div className="py-2" key={key}>
          <p className="font-bold text-[34px] leading-[51px]">{key}</p>
          <p className="text-[22px] py-2 leading-8 w-[1225px]">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
