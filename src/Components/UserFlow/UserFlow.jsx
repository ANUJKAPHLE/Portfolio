import Image from "next/image";
import userFlow from "@/assets/userflow.jpeg";

const UserFlow = () => {
  return (
    <div className="bg-black text-white text-center items-center absloute pb-16">
      <h1 className="leading-[42px] font-bold pt-14">User Flow</h1>
      <div style={{ display: "ruby" }}>
        <Image src={userFlow} className="mt-24 pl-36" alt="user flow" />
      </div>
    </div>
  );
};

export default UserFlow;
