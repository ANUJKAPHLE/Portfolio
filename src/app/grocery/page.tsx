import HRMHeader from "@/Components/ReUsableComp/HRMHeader";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import Research from "@/Components/Research/Research";

import groceryText from "@/texts/grocery.json";
import groceryProjectGoals from "@/texts/groceryProjectGoals.json";

const page = () => {
  return (
    <div>
      <div className="pt-24 px-[91px] justify-between ">
        <HRMHeader
          title={"Grocery works"}
          body={"Your Favorite Groceries, Just a Click Away"}
        />
        <div className="pt-20">
          <TextComponent text={groceryText} />
        </div>
        <ProjectGoalComponent
          className={""}
          heading={"Project Goals"}
          text={groceryProjectGoals}
        />
      </div>
      <Research />
    </div>
  );
};

export default page;
