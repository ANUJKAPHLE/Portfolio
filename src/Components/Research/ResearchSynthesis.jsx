// "use client";
// import { motion } from "framer-motion";

// const ResearchSynthesis = () => {
//   const text =
//     "The synthesis of the research objectives provides a holistic understanding of the interconnected aspects of online grocery shopping, e-commerce's environmental impact, and mobile app marketing trends. By analyzing consumer behavior during online grocery shopping, the research highlights the importance of user experience, convenience, and personalized interactions in driving user satisfaction and retention. The findings suggest that users prioritize ease of use, reliable delivery services, and the availability of preferred products when choosing online grocery platforms. In parallel, the assessment of e-commerce's impact on greenhouse gas emissions reveals the environmental trade-offs associated with online shopping. While online grocery shopping can reduce emissions related to individual car trips to physical stores, it also introduces new challenges, such as increased packaging waste and delivery-related emissions. The synthesis suggests that online grocery platforms can mitigate these environmental impacts by optimizing delivery routes, reducing packaging, and offering eco-friendly delivery options. The examination of mobile app marketing trends further complements these insights by demonstrating how effective marketing strategies can enhance user engagement and drive growth in the competitive digital landscape. Successful mobile app marketing relies on understanding user preferences, leveraging data analytics for personalized campaigns, and adopting innovative technologies like artificial intelligence and augmented reality. By integrating these marketing strategies with user-centered design and sustainability efforts, online grocery platforms can create a compelling value proposition that resonates with modern consumers. In summary, the synthesis underscores the importance of a user-focused approach that balances convenience, environmental responsibility, and effective marketing in the development and growth of online grocery shopping platforms.".split(
//       " "
//     );
//   return (
//     <div className="pt-24 px-[91px] justify-between">
//       <div className="flex flex-col lg:flex-row items-start lg:items-center">
//         <h2 className="w-full lg:w-3/12 font-bold leading-[43.2px] text-left text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px]">
//           Research Synthesis
//         </h2>
//         <div className="w-full lg:w-3/4 leading-[27px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px]">
//           {text.map((item, index) => (
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 0.25,
//                 delay: index / 10,
//               }}
//               key={index}
//             >
//               {item}{" "}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResearchSynthesis;

"use client";
import { motion } from "framer-motion";

const ResearchSynthesis = () => {
  const paragraphs = [
    "The synthesis of the research objectives provides a holistic understanding of the interconnected aspects of online grocery shopping, e-commerce's environmental impact, and mobile app marketing trends.By analyzing consumer behavior during online grocery shopping, the research highlights the importance of user experience, convenience, and personalized interactions in driving user satisfaction and retention. The findings suggest that users prioritize ease of use, reliable delivery services, and the availability of preferred products when choosing online grocery platforms.",
    "In parallel, the assessment of e-commerce's impact on greenhouse gas emissions reveals the environmental trade-offs associated with online shopping. While online grocery shopping can reduce emissions related to individual car trips to physical stores, it also introduces new challenges, such as increased packaging waste and delivery-related emissions. The synthesis suggests that online grocery platforms can mitigate these environmental impacts by optimizing delivery routes, reducing packaging, and offering eco-friendly delivery options.",
    "The examination of mobile app marketing trends further complements these insights by demonstrating how effective marketing strategies can enhance user engagement and drive growth in the competitive digital landscape. Successful mobile app marketing relies on understanding user preferences, leveraging data analytics for personalized campaigns, and adopting innovative technologies like artificial intelligence and augmented reality. By integrating these marketing strategies with user-centered design and sustainability efforts, online grocery platforms can create a compelling value proposition that resonates with modern consumers.",
    "In summary, the synthesis underscores the importance of a user-focused approach that balances convenience, environmental responsibility, and effective marketing in the development and growth of online grocery shopping platforms.",
  ];

  return (
    <div className="pt-24 px-[91px] justify-between">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <h2 className="w-full lg:w-3/12 font-bold leading-[43.2px] text-left text-[28px] sm:text-[32px] md:text-[36px] lg:text-[28px]">
          Research Synthesis
        </h2>
        <div className="w-full lg:w-3/4 leading-[27px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px]">
          {paragraphs.map((paragraph, paraIndex) => (
            <p key={paraIndex} className="mb-6">
              {paragraph.split(" ").map((item, wordIndex) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: (paraIndex * 10 + wordIndex) / 10,
                  }}
                  key={`${paraIndex}-${wordIndex}`}
                >
                  {item}{" "}
                </motion.span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchSynthesis;
