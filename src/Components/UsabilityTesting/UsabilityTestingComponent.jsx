import StudyOverview from "./StudyOverivew";
import TimeOnTask from "./TimeOnTask";
import UsabilityStudyPlan from "./UsabilityStudyPlan";

const UsabilityTestingComponent = () => {
  return (
    <div className="pl-[86px]">
      <h1 className="text-[28px] leading-[42px] font-bold mt-12 mb-20">
        Usability testing
      </h1>
      <StudyOverview />
      <TimeOnTask />
      <UsabilityStudyPlan />
    </div>
  );
};

export default UsabilityTestingComponent;
