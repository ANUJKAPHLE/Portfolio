import StudyOverview from "./StudyOverivew";
import TimeOnTask from "./TimeOnTask";
import UsabilityStudyPlan from "./UsabilityStudyPlan";
import OutcomeOfTheUsability from "./OutcomeOfTheUsability";

const UsabilityTestingComponent = () => {
  return (
    <div className="pl-[86px]">
      <h1 className="text-[28px] leading-[42px] font-bold mt-12 mb-20">
        Usability testing
      </h1>
      <StudyOverview />
      <div className="flex gap-10">
        <div>
          <TimeOnTask />
          <OutcomeOfTheUsability />
        </div>
        <div>
          <UsabilityStudyPlan />
        </div>
      </div>
    </div>
  );
};

export default UsabilityTestingComponent;
