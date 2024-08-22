import Image from "next/image";

import logo from "@/assets/logo.jpg";
import deliveryGuy from "@/assets/deliveryGuy.jpg";

const LogoComponent = () => {
  return (
    <div className="pt-9 px-[91px]">
      <div>
        <h1 className="leading-[42px] font-bold">Logo</h1>
        <p className="text-lg leading-[27px] pt-3">
          For a grocery app logo, the design should reflect freshness,
          convenience, and ease of shopping. Here’s a concept description for
          grocery app logo
        </p>
      </div>
      <div className="pt-32">
        <Image src={logo} alt="grocery logo" className="w-full h-auto" />
        <Image
          src={deliveryGuy}
          alt="delivery guy"
          className="mt-32 mb-24 w-full"
        />
      </div>
    </div>
  );
};

export default LogoComponent;
