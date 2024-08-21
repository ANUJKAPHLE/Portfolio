const HRMHeader = ({ title, body }) => {
  return (
    <div className="bg-black text-white w-full h-auto text-center py-16">
      <p className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[32px] font-semibold leading-[48px]">
        {title}
      </p>
      <p className="text-[40px] sm:text-[44px] md:text-[48px] lg:text-[40px] leading-[48.41px] pt-2 font-inter">
        {body}
      </p>
    </div>
  );
};

export default HRMHeader;
