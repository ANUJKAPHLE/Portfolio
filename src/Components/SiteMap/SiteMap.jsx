import siteMap from "@/texts/siteMap.json";

const SiteMap = () => {
  return (
    <div className="mt-24 mb-24">
      <h1 className="font-bold leading-[42px] pl-[91px]">Site map</h1>
      <div className="px-24 pt-20 flex flex-wrap gap-[92px]">
        {Object.entries(siteMap).map(([key, value]) => (
          <div key={key}>
            <div className="text-lg leading-[27px] p-[10px] w-fit h-12 bg-black text-white mb-8">
              {key}
            </div>
            {value.map((item, index) => (
              <div key={index} className="text-base font-light leading-6 mb-3">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMap;
