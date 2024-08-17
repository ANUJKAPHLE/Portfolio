const Headlines = () => {
  return (
    <div className="w-[554px] h-[586px]">
      <p className="text-[30.78px] leading-[46.17px]">Headlines</p>
      <div className="w-[554px] h-[515.25px] bg-box rounded-xl mt-7">
        <div className="px-16">
          <div className="flex gap-16 items-center pt-12 ">
            <h1 className="text-[27.7px] leading-[33.86px] font-bold text-secondaryTextColor">
              H1
            </h1>
            <div>
              <h1 className="text-[26px] leading-[40.02px] font-bold">
                Headline
              </h1>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 18 / l-height: 24 / weight: 139
              </p>
            </div>
          </div>
          <div className="flex gap-16 items-center pt-10 ">
            <h2 className="text-[24.63px] leading-[36.94px] font-semibold text-secondaryTextColor">
              H2
            </h2>
            <div>
              <h2 className="text-[24.63px] leading-[40.02px] font-semibold">
                Headline
              </h2>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 16 / l-height: 24 / weight: 126
              </p>
            </div>
          </div>
          <div className="flex gap-16 items-center pt-10 ">
            <h3 className="text-[21.55px] leading-[33.86px] font-bold text-secondaryTextColor">
              H3
            </h3>
            <div>
              <h3 className="text-[22px] leading-[36.94px] font-medium">
                Headline
              </h3>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 14 / l-height: 24 / weight: 108
              </p>
            </div>
          </div>
          <div className="flex gap-16 items-center py-10 ">
            <h4 className="text-[21.55px] leading-[33.86px] font-bold text-secondaryTextColor">
              H4
            </h4>
            <div>
              <h4 className="text-[18px] leading-[36.94px] font-medium">
                Headline
              </h4>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 12 / l-height: 24 / weight: 93
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
