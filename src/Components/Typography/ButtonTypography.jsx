const ButtonTypography = () => {
  return (
    <div className="w-full h-full">
      <p className="text-[30.78px] leading-[46.17px]">Buttons</p>
      <div className="w-fit h-[515.25px] bg-box rounded-xl mt-7">
        <div className="px-10">
          <div className="flex gap-20 items-center pt-12 ">
            <h1 className="text-[24.63px] leading-[33.86px] font-semibold text-secondaryTextColor">
              Large
            </h1>
            <div>
              <h1 className="text-[16px] leading-[36.94px] font-medium">
                Large Button
              </h1>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 16 / l-height: 24 / weight: 104
              </p>
            </div>
          </div>
          <div className="flex gap-[60px] items-center pt-10 ">
            <h2 className="text-[21.55px] leading-[33.86px] font-medium text-secondaryTextColor">
              Medium
            </h2>
            <div>
              <h2 className="text-[14px] leading-[36.94px] font-medium">
                Medium Button
              </h2>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 14 / l-height: 24 / weight: 124
              </p>
            </div>
          </div>
          <div className="flex gap-[95px] items-center pt-10 ">
            <h3 className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
              Small
            </h3>
            <div>
              <h3 className="text-sm font-medium leading-[36.94px]">
                Small Button
              </h3>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 14 / l-height: 24 / weight: 76
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonTypography;
