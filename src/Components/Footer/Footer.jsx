import Collaborate from "../Collab/Collaborate";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="pb-40 xs:px-20 md:px-56 bg-black text-white flex justify-center">
        <div>
          <Collaborate />
          <div className="text-center text-[22px] leading-[43.2px] font-bold flex flex-wrap justify-center space-x-24 sm:space-x-8 md:space-x-16 lg:space-x-28 mt-4">
            <a className="text-center">Behance</a>
            <a className="text-center">Dribble</a>
            <a className="text-center">Linkedln</a>
            <a className="text-center">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
