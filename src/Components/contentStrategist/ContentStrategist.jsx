import { motion } from "framer-motion";

const ContentStrategist = () => {
  return (
    <div className="text-[40.01px] font-bold text-white w-fit">
      <motion.div
        className=" pl-11 w-[340px] h-[60px] bg-black border-2  border-black"
        animate={{ x: -50, y: 0, rotate: 0 }}
      >
        User Interface
      </motion.div>

      <motion.div
        className="p-1 px-7 mt-7 w-[389px] h-[70px] bg-black border-2  border-black"
        animate={{ x: -15, y: 0, rotate: -13.4 }}
      >
        User Experience
      </motion.div>

      <motion.div
        className="py-1 pl-24 pr-32 w-[454px] h-[72px] mt-14 bg-black border-2 border-black"
        animate={{ x: 15, y: 0, rotate: -3.26 }}
      >
        Branding
      </motion.div>
    </div>
  );
};

export default ContentStrategist;
