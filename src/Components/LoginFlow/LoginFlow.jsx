"use client";
import GroceryImage from "@/Components/ReUsableComp/GroceryImage";

import LoginFlow1 from "@/assets/loginFlow1.png";
import LoginFlow2 from "@/assets/loginFlow2.png";
import LoginFlow3 from "@/assets/loginFlow3.png";
import LoginFlow4 from "@/assets/loginFlow4.png";
import LoginFlow5 from "@/assets/loginFlow5.png";
import LoginFlow6 from "@/assets/loginFlow6.png";
import LoginFlow7 from "@/assets/loginFlow7.png";
import LoginFlow8 from "@/assets/loginFlow8.png";
import LoginFlow9 from "@/assets/loginFlow9.png";
import LoginFlow10 from "@/assets/loginFlow10.png";

const LoginFlow = () => {
  return (
    <div className="bg-black text-white pt-20 px-6 md:px-12 lg:px-[91px] justify-between">
      <h1>Login flow</h1>
      <p className="text-lg leading-[27px] pt-3">
        The login flow for your grocery app is designed to be intuitive, fast,
        and secure, ensuring users can access the app with minimal friction
        while safeguarding their information
      </p>
      <div className="px-4 sm:px-6 md:px-8 lg:px-28 flex flex-wrap py-24 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-28 items-center justify-center">
        <GroceryImage image={LoginFlow1} alt={"login Flow 1"} />
        <GroceryImage image={LoginFlow2} alt={"login Flow 2"} />
        <GroceryImage image={LoginFlow3} alt={"login Flow 3"} />
        <GroceryImage image={LoginFlow4} alt={"login Flow 4"} />
        <GroceryImage image={LoginFlow5} alt={"login Flow 5"} />
        <GroceryImage image={LoginFlow6} alt={"login Flow 6"} />
        <GroceryImage image={LoginFlow7} alt={"login Flow 7"} />
        <GroceryImage image={LoginFlow8} alt={"login Flow 8"} />
        <GroceryImage image={LoginFlow9} alt={"login Flow 9"} />
        <GroceryImage image={LoginFlow10} alt={"login Flow 10"} />
      </div>
    </div>
  );
};

export default LoginFlow;
