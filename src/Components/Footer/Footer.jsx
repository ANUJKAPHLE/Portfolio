import Collaborate from "../Collab/Collaborate";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="pb-16 xs:px-20 md:px-56 bg-black  text-secondaryTextColor flex justify-center">
        <div>
          <Collaborate />
          <div className=" text-[22px] leading-[43.2px] font-bold grid sm:grid-rows-4 md:grid-cols-4 justify-center mt-4 ">
            <a
              className="text-center hover:text-white w-full sm:pt-2 sm:w-auto sm:mx-2"
              href="https://www.behance.net/kafleanuj"
              target="_blank"
            >
              Behance
            </a>
            <a
              className="text-center hover:text-white w-full sm:pt-2 sm:w-auto sm:mx-2"
              href="https://dribbble.com/anuj99"
              target="_blank"
            >
              Dribble
            </a>
            <a
              className="text-center hover:text-white w-full sm:pt-2 sm:w-auto sm:mx-2"
              href="https://www.linkedin.com/in/anuj-kaphle/"
              target="_blank"
            >
              Linkedln
            </a>
            <a
              className="text-center hover:text-white w-full sm:pt-2 sm:w-auto sm:mx-2"
              href="https://www.instagram.com/anuj_kaphle/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
