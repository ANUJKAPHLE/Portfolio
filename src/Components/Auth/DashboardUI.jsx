import Image from "next/image";

import dashboardUI from "@/assets/dashboardUI.png";
import adminPage from "@/assets/adminPage.png";
import companyDetails from "@/assets/companyDetails.png";
import employee from "@/assets/employee.png";
import KYC from "@/assets/KYC.png";
import secondForm from "@/assets/secondForm.png";
import vacancy from "@/assets/vacancy.png";
import attendance from "@/assets/Attendance.png";
import addNewEmployee from "@/assets/addNewEmployee.png";

const DashboardUI = () => {
  return (
    <div className="pb-10">
      <h1 className="font-bold text-[38px] leading-[57px] text-center mt-20">
        Dashboard
      </h1>

      <Image
        src={dashboardUI}
        alt="dashboard"
        className="px-[91px] mt-8 mb-20"
      />
      <div className="px-[91px]">
        <div className=" bg-black text-white">
          <Image src={adminPage} alt="admin page" className="px-36 pt-20" />
          <h1 className="font-bold text-[38px] leading-[57px] text-center mt-20">
            Add Personal Information
          </h1>
          <div className="px-36 pt-20">
            <Image src={companyDetails} alt="company details" />
            <Image src={employee} alt="employee" className="mt-32" />
            <div className="flex gap-12 mt-12">
              <Image src={KYC} alt="KYC from" className="w-2/5" />
              <div className="w-1/2">
                <Image src={secondForm} alt="new employee form" />
                <Image src={vacancy} alt="vacancy form" className="mt-20" />
              </div>
            </div>
            <Image className="mt-24" src={attendance} alt="attendance " />
            <Image
              src={addNewEmployee}
              alt="new employee form"
              className="mt-12 w-3/5 pb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
