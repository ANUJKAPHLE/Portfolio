const Text = () => {
  return (
    <div className="w-full h-auto">
      <p className="text-[30.78px] leading-[46.17px]">Text</p>
      <div className="w-fit h-[515.25px] bg-box rounded-xl mt-7">
        <div className="px-10">
          <div className="flex gap-16 items-center pt-12 ">
            <h1 className="text-[24.63px] leading-[33.86px] text-secondaryTextColor">
              Subtitle 1
            </h1>
            <div>
              <h1 className="text-[24px] leading-[36.94px]">Subtitle</h1>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 18 / l-height: 24 / weight: 168
              </p>
            </div>
          </div>
          <div className="flex gap-[70px] items-center pt-10 ">
            <h2 className="text-[21.55px] leading-[36.86px] text-secondaryTextColor">
              Subtitle 2
            </h2>
            <div>
              <h2 className="text-[20px] leading-[36.94px]">Subtitle</h2>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 16 / l-height: 24 / weight: 107
              </p>
            </div>
          </div>
          <div className="flex gap-[110px] items-center pt-10 ">
            <h3 className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
              body 1
            </h3>
            <div>
              <h3 className="text-lg leading-[36.94px]">Subtitle</h3>
              <p className="text-[18.47px] leading-[33.86px] text-secondaryTextColor">
                size: 14 / l-height: 24 / weight: 91
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
