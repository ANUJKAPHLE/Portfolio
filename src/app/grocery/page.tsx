import HRMHeader from "@/Components/ReUsableComp/HRMHeader";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import Research from "@/Components/Research/Research";
import LogoComponent from "@/Components/Logo/LogoComponent";

import groceryText from "@/texts/grocery.json";
import groceryProjectGoals from "@/texts/groceryProjectGoals.json";
import researchObjectives from "@/texts/researchObjectives.json";

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
      <LogoComponent />
      <div className="pt-8 justify-between ">
        <ProjectGoalComponent
          className={
            "bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[98px]"
          }
          heading={"Research Objectives"}
          text={researchObjectives}
        />
      </div>
    </div>
  );
};

export default page;
