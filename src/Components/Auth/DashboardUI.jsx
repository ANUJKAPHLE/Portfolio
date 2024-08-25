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
      <h1 className="font-bold text-[38px] sm:text-[48px] md:text-[56px] lg:text-[38px] leading-[57px] text-center mt-20">
        Dashboard
      </h1>

      <Image
        src={dashboardUI}
        alt="dashboard"
        className="w-full h-auto px-4 sm:px-6 md:px-8 lg:px-[91px] mt-8 mb-20"
      />
      <div className="bg-black text-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-[91px]">
          <Image
            src={adminPage}
            alt="admin page"
            className="w-full h-auto px-4 sm:px-6 md:px-8 lg:px-36 pt-20"
          />
          <h1 className="font-bold text-[38px] sm:text-[48px] md:text-[56px] lg:text-[38px] leading-[57px] text-center mt-20">
            Add Personal Information
          </h1>
          <div className="px-4 sm:px-6 md:px-8 lg:px-36 pt-20">
            <Image
              src={companyDetails}
              alt="company details"
              className="w-full h-auto"
            />
            <Image
              src={employee}
              alt="employee"
              className="w-full h-auto mt-32"
            />
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-12">
              <Image
                src={KYC}
                alt="KYC from"
                className="w-full sm:w-2/5 h-auto pb-16"
              />
              <div className="w-full sm:w-1/2">
                <Image
                  src={secondForm}
                  alt="new employee form"
                  className="w-full h-auto "
                />
                <Image
                  src={vacancy}
                  alt="vacancy form"
                  className="w-full h-auto mt-20 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 sm:px-12 md:px-16 lg:px-[240px] pt-16 pb-24">
        <Image
          className="w-full h-auto shadow-lg"
          src={attendance}
          alt="attendance"
        />
        <Image
          src={addNewEmployee}
          alt="new employee form"
          className="w-full sm:w-3/5 h-auto mt-12 shadow-xl"
        />
      </div>
    </div>
  );
};

export default DashboardUI;
