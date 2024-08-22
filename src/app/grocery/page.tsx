import Image from "next/image";

import HRMHeader from "@/Components/ReUsableComp/HRMHeader";
import WorkComponent from "@/Components/HRM/workComponent";
import TextComponent from "@/Components/HRM/TextComponent";
import ProjectGoalComponent from "@/Components/HRM/ProjectGoalComponent";
import Research from "@/Components/Research/Research";
import LogoComponent from "@/Components/Logo/LogoComponent";
import ResearchSynthesis from "@/Components/Research/ResearchSynthesis";
import LoginFlow from "@/Components/LoginFlow/LoginFlow";
import SetLocation from "@/Components/SetLocation/SetLocation";
import GroceryPickAndDrop from "@/Components/ReUsableComp/GroceryPickAndDrop";
import Order from "@/Components/Order/Order";
import ReviewAndFeedback from "@/Components/ReviewAndFeedback/ReviewAndFeedback";
import AppScreenDesign from "@/Components/ReviewAndFeedback/AppScreenDesign";

import groceryText from "@/texts/grocery.json";
import groceryProjectGoals from "@/texts/groceryProjectGoals.json";
import researchObjectives from "@/texts/researchObjectives.json";

import groceryHoddingBord from "@/assets/groceryHoddingBoard.jpg";
import homeDeliveryDark from "@/assets/home_delivery b.png";
import homeDeliveryLight from "@/assets/home_delivery.png";
import homePickupDark from "@/assets/home_pickup b.png";
import homePickupLight from "@/assets/home_pickup.png";

const page = () => {
  return (
    <div>
      <div className="pt-24 px-[91px] justify-between ">
        <HRMHeader
          title={"Grocery works"}
          body={"Your Favorite Groceries, Just a Click Away"}
        />
        <div className="pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <WorkComponent />
        </div>
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
      <ResearchSynthesis />
      <Image
        src={groceryHoddingBord}
        alt="hodding board"
        className="h-auto w-full px-4 sm:px-6 md:px-8 lg:px-9 my-16 sm:my-24 md:my-32 lg:my-20"
      />
      <LoginFlow />
      <SetLocation />
      <GroceryPickAndDrop
        heading={"Home Page Delivery"}
        text={
          "The Home Page Delivery of a grocery app is designed to provide a seamless and convenient shopping experience while prioritizing delivery options. Here’s a detailed description of what a typical homepage delivery layout would look like"
        }
        theme={["Dark theme", ""]}
        image={[homeDeliveryDark, homeDeliveryLight]}
        className={""}
      />
      <GroceryPickAndDrop
        heading={"Home Page Pickup"}
        text={
          "The Home Page Pickup feature of a grocery app is designed to provide a smooth and efficient shopping experience for users who prefer to order their groceries online and pick them up from a designated store location"
        }
        theme={["", "Dark theme"]}
        image={[homePickupLight, homePickupDark]}
        className={"bg-black text-white"}
      />
      <Order />
      <ReviewAndFeedback />
      <AppScreenDesign />
    </div>
  );
};

export default page;
