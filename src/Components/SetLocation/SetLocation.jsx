import Image from "next/image";

import location from "@/assets/location.png";

const SetLocation = () => {
  return (
    <div className="pt-9 px-[91px]">
      <div>
        <h1 className="leading-[42px] font-bold">Set Location</h1>
        <p className="text-lg leading-[27px] pt-3">
          Setting a location feature in a grocery app is crucial for providing
          personalized delivery options, accurate product availability, and
          location-based services. Here's a step-by-step guide on how to
          incorporate location setting within the app
        </p>
      </div>
      <div className="items-center">
        <Image src={location} alt="mbl location" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default SetLocation;
