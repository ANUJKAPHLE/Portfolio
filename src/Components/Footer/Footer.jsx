import Collaborate from "../Collab/Collaborate";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="pb-16 xs:px-20 md:px-56 bg-black text-white flex justify-center">
        <div>
          <Collaborate />
          <div className=" text-[22px] leading-[43.2px] font-bold grid sm:grid-rows-4 md:grid-cols-4 justify-center mt-4">
            <a className="text-center w-full sm:pt-2 sm:w-auto sm:mx-2">
              Behance
            </a>
            <a className="text-center w-full sm:pt-2 sm:w-auto sm:mx-2">
              Dribble
            </a>
            <a className="text-center w-full sm:pt-2 sm:w-auto sm:mx-2">
              Linkedln
            </a>
            <a className="text-center w-full sm:pt-2 sm:w-auto sm:mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
