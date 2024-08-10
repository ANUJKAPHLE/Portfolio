import { motion } from "framer-motion";

const ContentStrategist = () => {
  return (
    <div className="text-4xl text-white w-fit">
      <motion.div
        className="p-1 pl-7 pr-2 w-fit bg-black border-2  border-black"
        animate={{ x: -160, y: 0, rotate: 0 }}
      >
        User Interface
      </motion.div>

      <motion.div
        className="p-1 px-7 mt-5 w-fit bg-black border-2  border-black"
        animate={{ x: -120, y: 0, rotate: -14 }}
      >
        User Experience
      </motion.div>

      <motion.div
        className="py-1 pl-5 pr-32 w-fit mt-9 bg-black border-2 border-black"
        animate={{ x: -100, y: 0, rotate: -3 }}
      >
        Branding
      </motion.div>
    </div>
  );
};

export default ContentStrategist;
