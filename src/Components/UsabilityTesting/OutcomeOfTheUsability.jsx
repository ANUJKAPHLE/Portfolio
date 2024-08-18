import React from "react";

const OutcomeOfTheUsability = () => {
  return (
    <div className=" bg-black text-white rounded-[40px] w-[650px] h-[2500px] mt-10 mb-9">
      <div className="pt-8 pl-12 ">
        <p className=" font-semibold text-[22px] leading-[43.2px]">
          Outcome of the Usability Study for HRM System
        </p>
        <p className="leading-[27px] mt-4">
          Outcome of the Usability Study for HRM System
        </p>
        <div className="w-[588px] h-full text-lg leading-[27px] pl-4 mt-3">
          <ol style={{ listStyle: "auto" }}>
            <li>
              Summary of Findings:
              <br />
              The usability study conducted from August 12-14, 2024, at XYZ
              Corporation Headquarters provided valuable insights into the HRM
              system’s performance. The study involved 8 participants, including
              HR managers, HR assistants, and regular employees. Key findings
              included:
              <br />
              - Dashboard Navigation: HR managers found the dashboard generally
              intuitive but reported delays when accessing specific features due
              to a cluttered layout. Participants struggled to quickly locate
              frequently used functions.
              <br />
              - Updating Employee Information:HR assistants encountered issues
              with navigation during the employee information update process.
              The system’s multi-step process was cumbersome, leading to delays
              and occasional errors.
              <br />
              - Processing Leave Requests: Both HR managers and assistants found
              the leave request process to be confusing. Unclear instructions
              and a non-intuitive approval workflow contributed to difficulties
              in task completion.
              <br />
              - Generating Payroll Reports:* Regular employees experienced
              challenges with the complex filtering options needed to generate
              payroll reports. They found the report generation process to be
              overly complicated and time-consuming.
              <br />- Performance Evaluations: Participants generally found the
              performance evaluation feature to be functional but noted that the
              form design could be more user-friendly, with better guidance on
              filling out evaluation criteria.
            </li>
            <li className="mt-5">
              Key Metrics:
              <br />
              - Task Success Rate:80% of tasks were completed successfully, with
              some tasks requiring assistance.
              <br />
              - Time on Task: The average time to complete tasks was longer than
              expected, particularly for updating employee information and
              generating payroll reports.
              <br />
              - Error Rate:Errors were noted in 25% of the tasks, mainly due to
              navigation issues and complex workflows.
              <br />
              - System Usability Scale (SUS): The system received an average SUS
              score of 68, indicating moderate usability.
              <br />- User Satisfaction Scores:Overall satisfaction was mixed,
              with participants rating their experience as 3 out of 5 on
              average, indicating room for improvement.
            </li>
            <li className="mt-5">
              Recommendations:
              <br />
              Based on the findings, the following recommendations were made:
              <br />
              - Dashboard Redesign: Simplify the dashboard layout to make
              frequently used features more accessible and reduce clutter.
              <br />
              - Streamline Employee Information Updates: Revise the update
              process to be more straightforward and reduce the number of steps
              required. Improve navigation to make it more intuitive.
              <br />
              - Improve Leave Request Workflow: Enhance instructions and
              redesign the approval workflow to make it clearer and more
              user-friendly.
              <br />
              - Simplify Report Generation:Redesign the report generation
              interface to make filtering options more intuitive and reduce
              complexity.
              <br />- Enhance Performance Evaluation Forms:Revise the form
              design to provide clearer guidance and make the evaluation process
              more user-friendly.
            </li>
            <li className="mt-5">
              Follow-Up Actions:
              <br />
              - Review with Development Team:The findings and recommendations
              were discussed with the HRM system’s development team to
              prioritize and address the identified issues.
              <br />
              - Implementation of Changes: The development team began
              implementing the recommended changes, focusing on redesigning the
              dashboard, streamlining processes, and simplifying interfaces.
              <br />- Iterative Testing: Plans were made for additional
              usability testing to validate the improvements and ensure that the
              changes effectively addressed the issues identified.
            </li>
            <li className="mt-5">
              Impact:
              <br />
              The usability study led to significant improvements in the HRM
              system, enhancing user satisfaction and efficiency. Users found
              the redesigned dashboard and simplified processes to be much more
              intuitive and time-efficient. The system updates resulted in
              smoother task completion and reduced errors, contributing to a
              more positive overall user experience. The iterative testing
              confirmed the effectiveness of the changes, leading to a higher
              SUS score and increased satisfaction ratings in follow-up
              assessments.
              <br />
              <br />
              The study demonstrated the importance of user feedback in refining
              and optimizing HRM systems, ensuring they meet the needs of their
              users effectively.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OutcomeOfTheUsability;
