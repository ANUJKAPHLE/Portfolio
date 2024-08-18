const UsabilityStudyPlan = () => {
  return (
    <div className=" bg-black text-white rounded-[40px] w-[650px] h-[2100px] mt-10">
      <div className="pt-8 pl-12 ">
        <p className=" font-semibold text-[22px] leading-[43.2px]">
          Usability study plan
        </p>
        <div className="w-[573px] h-[1944px] text-lg leading-[27px] pl-4 mt-3">
          <ol style={{ listStyle: "auto" }}>
            <li>
              Study Objectives:
              <br />
              - Evaluate User-Friendliness and Efficiency: Assess how easily
              users can navigate and use the HRM system to complete essential HR
              tasks.
              <br />
              - Identify Usability Issues: Detect any problems or obstacles
              users face while interacting with the system.
              <br />- Provide Recommendations: Offer actionable suggestions for
              improving the system based on user feedback and observed issues.
            </li>
            <li className="mt-4">
              Scope:
              <br />
              The study focuses on key tasks that HR professionals and employees
              perform regularly, including:
              <br />
              - Logging into the HRM system.
              <br />
              - Updating employee contact and personal information.
              <br />
              - Processing and approving leave requests.
              <br />
              - Generating payroll reports.
              <br />- Conducting performance evaluations.
            </li>
            <li className="mt-4">
              Methodology:
              <br />
              Participants:
              <br />
              - HR Managers: 2 experienced HR managers from XYZ Corporation.
              <br />
              - HR Assistants: 2 HR assistants who support day-to-day HR
              operations.
              <br />- Regular Employees: 4 employees from various departments
              who use the system for self-service tasks.
            </li>
            <li className="mt-4">
              Participant Criteria:
              <br />
              HR Managers: Must have at least 5 years of experience in HR
              management.
              <br />
              -HR Assistants: Should have 1-3 years of experience in HR support
              roles.
              <br />
              -Regular Employees:Familiar with digital tools and basic HR tasks.
              <br />
              - Technical Proficiency: Participants will have varied levels of
              technical skills, from basic to intermediate.
              <br />
              -Availability: Participants must be available for scheduled
              sessions during the testing dates.
            </li>
            <li className="mt-4">
              Metrics to Measure:
              <br />
              - Task Success Rate: Percentage of tasks completed accurately by
              participants.
              <br />
              - Time on Task:Amount of time taken to complete each task.
              <br />
              - Error Rate: Frequency and type of errors made during tasks.
              <br />
              - System Usability Scale (SUS): Overall score reflecting users’
              perceptions of the system’s usability.
              <br />- User Satisfaction Scores: Ratings on the ease of
              completing tasks and overall experience.
            </li>
            <li className="mt-4">
              Analysis:
              <br />
              - Quantitative Analysis: Evaluate data on task success rates, time
              spent on tasks, error rates, and survey scores.
              <br />- Qualitative Analysis: Analyze participant feedback to
              identify common issues, themes, and suggestions for improvement.
            </li>
            <li className="mt-4">
              Reporting:
              <br />
              - Summary: Prepare a detailed report summarizing findings,
              supported by charts and graphs.
              <br />
              - Findings: Highlight key usability issues, areas of success, and
              specific aspects needing improvement.
              <br />- Recommendations: Provide actionable recommendations based
              on the analysis to enhance the HRM system’s usability and
              performance.
            </li>
            <li className="mt-4">
              Follow-Up:
              <br />
              - Review: Discuss the findings with the HRM system’s development
              team.
              <br />
              - Implementation: Address identified issues and implement
              recommended changes.
              <br />- Iterative Testing: Plan for further usability testing to
              validate improvements and ensure continued effectiveness.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default UsabilityStudyPlan;
