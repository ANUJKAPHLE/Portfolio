import WorkComponent from "@/Components/HRM/workComponent";
import TextComponent from "@/Components/HRM/TextComponent";

const page = () => {
  return (
    <div className="pt-24 px-28 justify-between">
      <div className="bg-black text-white w-[1322px] h-[251px] text-center py-16">
        <p className="text-[32px] font-semibold">SOFTNINE HRM</p>
        <p className="text-[56px] ">HRM System To Connect </p>
      </div>
      <div className="py-12 px-24">
        <WorkComponent />
      </div>
      <TextComponent />
    </div>
  );
};

export default page;
