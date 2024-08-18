const StudyOverivew = () => {
  return (
    <div className="h-[1138px] pr-[86px]">
      <div className=" bg-black text-white rounded-[40px] flex">
        <div className="pt-8 pl-16 pb-32 w-1/2">
          <p className="font-semibold text-[22px] leading-[43.2px]">
            Study overview
            <br />
            Objective
          </p>
          <p className="leading-[27px] w-[489px] mt-3">
            The primary objective of this usability testing study is to evaluate
            the user-friendliness, efficiency, and overall experience of the
            Human Resource Management (HRM) system. The study aims to identify
            any usability issues, gather user feedback, and provide actionable
            insights to improve the system's design and functionality.
          </p>
          <p className="text-[24px] leading-[36px] font-semibold mt-8">
            Study facilitators
          </p>
          <p className="leading-[27px] mt-4 w-[555px]">
            The usability testing study was facilitated by a team of experienced
            usability professionals. Lead facilitator Suzan Pradhan, an expert
            in UX design with over 5 years of experience, will oversee the
            study.
          </p>
          <p className="text-[24px] leading-[36px] font-semibold mt-8">
            Date and location
          </p>
          <p className="leading-[27px] mt-4 w-[489px]">
            The usability testing study for the HRM system wasconducted from
            August 12-14, 2022, at Soft nine office , located at New baneshwor,
            Kathmandu
          </p>
          <p className="text-[24px] leading-[36px] font-semibold mt-8">
            Participants
          </p>
          <p className="leading-[27px] mt-4 w-[555px]">
            For this usability testing study, we will recruit eight
            participants: two HR managers, two HR assistants, and four regular
            employees, ensuring a balanced mix of experience levels and
            technical proficiency. Participants will perform essential HR tasks,
            including logging in, navigating the dashboard, updating employee
            information, processing leave requests, managing payroll, and
            conducting performance evaluations. We will collect data through
            observations, think-aloud protocols, surveys, and interviews.
          </p>
        </div>
        <div className="pt-8 pl-9 w-1/2 h-[864px]">
          <p className="font-semibold text-[22px] leading-[43.2px]">
            Key Performance Indicators (KPI’s)
            <br />
            Task success rate
          </p>
          <p className="leading-[27px] w-[619px] mt-3">
            Task success rate measures the percentage of tasks that users
            complete successfully without any assistance or errors. It is a key
            indicator of the system's usability and effectiveness.
          </p>
          <p className="text-[24px] leading-[43.2px] font-semibold mt-8">
            Task: Approving a Leave Request
          </p>
          <div className="w-[619px] h-[864px]">
            <p className="leading-[27px] mt-4">
              Procedure:
              <br />
              1. Scenario: The participant is given a scenario where an employee
              has submitted a leave request, and the participant needs to review
              and approve or reject it using the HRM system.
              <br /> 2. Steps:
              <br />- Log in to the HRM system.
              <br />- Navigate to the leave requests section.
              <br />- Select the leave request to review.
              <br /> - Approve or reject the leave request.
              <br />- Log out of the system.
            </p>
            <p className="leading-[27px] mt-6">
              Success Criteria: The participant completes all steps accurately
              and within a reasonable time frame without any help or errors.
            </p>
            <p className="leading-[27px] mt-6">
              Participant Results:
              <br />- Participant 1: Successfully completed the task.
              <br />- Participant 2: Successfully completed the task.
              <br />- Participant 3: Made an error (selected the wrong leave
              request initially) but corrected it without assistance.
              <br />- Participant 4: Successfully completed the task.
              <br />- Participant 5: Required assistance to find the leave
              requests section.
              <br />- Participant 6: Successfully completed the task.
              <br />- Participant 7: Made an error (approved the leave without
              reviewing details) and did not correct it.
              <br />- Participant 8: Successfully completed the task.
            </p>
            <p className="leading-[27px] mt-6">
              Calculation:
              <br />- Total Participants: 8
              <br />- Tasks Successfully Completed Without Assistance or Errors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyOverivew;
