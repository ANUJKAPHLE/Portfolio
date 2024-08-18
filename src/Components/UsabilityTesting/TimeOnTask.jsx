import React from "react";

const TimeOnTask = () => {
  return (
    <div className=" bg-black text-white rounded-[40px] w-[650px] h-[1014px] mt-10">
      <div className="pt-8 pl-16 ">
        <p className="font-semibold text-[22px] leading-[43.2px]">
          Time on Task Example
        </p>
        <div className="w-[561px] h-[891px]">
          <p className="leading-[27px] mt-3">
            Time on task measures the amount of time it takes for participants
            to complete a specific task. It provides insights into the
            efficiency of the system and can help identify tasks that may be too
            time-consuming or complicated.
            <br />
            Example:
            <br />
            Task: Updating Employee Information
          </p>
          Procedure:
          <ol
            className="pl-6 text-[18px] leading-[27px]"
            style={{ listStyle: "auto" }}
          >
            <li>
              Scenario: The participant is asked to update the contact
              information for a specific employee in the HRM system.
            </li>
            <li>
              Steps:
              <ul className="pl-6 pr-3" style={{ listStyle: "initial" }}>
                <li>Log in to the HRM system.</li>
                <li>Navigate to the employee records section.</li>
                <li>Search for the specific employee.</li>
                <li>
                  Update the contact information (e.g., phone number and
                  address).
                </li>
                <li>Save the changes.</li>
                <li> Log out of the system.</li>
              </ul>
            </li>
          </ol>
          <p className="leading-[27px]">
            Success Criteria: The participant completes all steps accurately.
            <br />
            Participant Results:
          </p>
          <ul
            className="pl-6 text-[18px] leading-[27px]"
            style={{ listStyle: "inside" }}
          >
            <li>Participant 1: 3 minutes 20 seconds </li>
            <li>Participant 2: 2 minutes 45 seconds </li>
            <li>Participant 3: 4 minutes 10 seconds </li>
            <li>Participant 4: 3 minutes 5 seconds </li>
            <li>Participant 5: 3 minutes 50 seconds </li>
            <li>Participant 6: 2 minutes 30 seconds </li>
            <li>Participant7: 4 minutes </li>
            <li>Participant 8: 3 minutes</li>
          </ul>
          <p className="leading-[27px]">Calculation:</p>
          <ul
            className="pl-6 text-[18px] leading-[27px]"
            style={{ listStyle: "inside" }}
          >
            <li>Total Participants: 8</li>
            <li>
              Individual Times: 200 seconds, 165 seconds, 250 seconds, 185
              seconds, 230 seconds, 150 seconds, 240 seconds, 180 seconds
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeOnTask;
