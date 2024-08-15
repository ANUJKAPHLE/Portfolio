import Image from "next/image";

import SujanPardhan from "@/assets/Sujan_Pradhan.png";

const UserPersonaProfile = () => {
  return (
    <div className="mt-24">
      <div className="bg-SecondaryBgColor text-white w-[623px] h-[1122px] rounded-[42px]">
        <div>
          <div className="p-[29px] flex gap-4">
            <Image
              src={SujanPardhan}
              className="rounded-full overflow-hidden w-[100px] h-[100px]"
              alt="profile"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="mt-4">
              <p className="text-[26px] leading-[39px] font-medium">
                Sujan Pradhan
              </p>
              <p className="text-lg font-light leading-[27px]">
                22 yrs. Student.
              </p>
            </div>
          </div>
          <div className="pl-12">
            <div>
              <h2 className="leading-[27px] mt-5">Background</h2>
              <p className="text-lg leading-[27px] mt-3 w-[550px]">
                Sujan Pradhan, a 22-year-old student, is currently pursuing his
                studies with a keen interest in data science. Although his
                practical experience in HR systems is limited, he is eager to
                apply his growing knowledge in data science to HR-related
                projects and technologies.
              </p>
            </div>
            <div>
              <h2 className="leading-[30px] mt-9">Needs & Goal</h2>
              <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-[550px]">
                <li>
                  Streamline Administrative Tasks: Simplify daily tasks such as
                  updating employee information and managing leave requests for
                  greater efficiency.
                </li>
                <li className="mt-3">
                  Improve Accuracy: Reduce errors in data entry and ensure all
                  employee records and reports are accurate and up-to-date.
                </li>
                <li className="mt-3">
                  Enhance Usability: Utilize a system that is easy to navigate
                  and reduces the need for constant assistance from colleagues.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="leading-[30px] mt-8">Pain Points</h2>
              <ul className="list-disc pl-5 text-lg leading-[27px] mt-3 w-[550px]">
                <li>
                  Frequent Errors: Encounters issues with frequent data entry
                  errors, causing inaccuracies in records and reports.
                </li>
                <li className="mt-3">
                  Time-Consuming Processes: Finds manual tasks and workflows
                  time-consuming and cumbersome, impacting overall productivity.
                </li>
                <li className="mt-3">
                  Time-Consuming Processes: Finds manual tasks and workflows
                  time-consuming and cumbersome, impacting overall productivity.
                </li>
                <li className="mt-3">
                  Limited Practical Experience: Lacks hands-on experience with
                  HR systems, making it challenging to apply theoretical
                  knowledge effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersonaProfile;
