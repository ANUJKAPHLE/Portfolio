const InsightFromUsabilityStudy = () => {
  return (
    <div className=" bg-black text-white rounded-[40px] w-[650px] h-[1410px] mt-10 mb-9">
      <div className="pt-8 pl-12 ">
        <p className=" font-semibold text-[22px] leading-[43.2px]">
          Insight from Usability Study
        </p>

        <div className="w-[588px] h-full text-lg leading-[27px] pl-4 mt-5">
          <ol style={{ listStyle: "auto" }}>
            <li>
              Simplify and Streamline the User Interface
              <br />
              The HRM system’s dashboard previously featured numerous widgets
              and options that overwhelmed users. After simplifying the
              interface, the dashboard now highlights only the most frequently
              used features, such as employee records and leave requests, and
              groups secondary features under an expandable menu.
            </li>
            <li className="mt-5">
              Enhance Clarity and Guidance in Multi-Step Processes
              <br />
              Example:
              <br />
              In the previous HRM system, updating employee information required
              users to navigate through several screens with minimal
              instructions. The redesigned process now includes a clear,
              step-by-step wizard that guides users through each stage of the
              update.
            </li>
            <li className="mt-5">
              Optimize Task Workflows
              <br />
              The payroll report generation used to involve multiple steps and
              complex filtering options. The new design simplifies the workflow
              by consolidating filters into a single, user-friendly panel and
              allowing users to save frequently used filter settings.
            </li>
            <li className="mt-5">
              Redesign Forms and Features for User-Friendliness
              <br />
              The performance evaluation form used to be lengthy and had minimal
              guidance, leading to confusion. The updated form now includes
              clear instructions, a progress bar, and a streamlined layout with
              pre-filled fields and dropdown menus.
            </li>
            <li className="mt-5">
              Conduct Iterative Testing
              <br />
              After implementing the initial design improvements, the HRM system
              underwent additional usability testing to assess the effectiveness
              of the changes. Feedback from this round of testing revealed that
              users still had some issues with the report generation feature.
            </li>
            <li className="mt-5">
              Address Role-Specific Needs
              <br />
              HR managers and HR assistants had different needs for the leave
              request process. The system was updated to include role-specific
              views: HR managers now have a consolidated approval dashboard for
              quick decision-making, while HR assistants have an improved
              interface for processing requests with fewer steps and better
              organization. <br />
              <br />
              By applying these insights with specific examples, the HRM system
              becomes more user-friendly, efficient, and tailored to the needs
              of its diverse user base.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InsightFromUsabilityStudy;
