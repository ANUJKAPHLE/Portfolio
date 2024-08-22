import Image from "next/image";

import shot from "@/assets/Shot.png";
import mbl from "@/assets/Mbl.png";
import detailsPage from "@/assets/details_page.png";

const Order = () => {
  return (
    <div className="my-24 px-[91px]">
      <h1 className="font-bold leading-[42px]">Order from the store</h1>
      <div className="h-auto w-auto flex justify-center">
        <Image src={shot} className="w-auto h-auto" alt="shots" />
      </div>
      <div className="h-auto w-auto flex justify-center">
        <div className="w-[423px] h-auto relative">
          <div className="w-[445px] h-[885px] absolute top-0 left-0">
            <Image src={mbl} alt="mbl" className="w-full h-full" />
          </div>
          <div className="pl-5 pt-4">
            <Image
              src={detailsPage}
              alt="home delivery dark theme"
              className="w-full h-full object-cover rounded-t-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
