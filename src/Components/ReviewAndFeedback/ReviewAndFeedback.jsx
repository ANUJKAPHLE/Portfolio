import Image from "next/image";

import reviewAndFeedback from "@/assets/Shot bh.png";

const ReviewAndFeedback = () => {
  return (
    <div className="px-[91px] bg-black text-white pt-12">
      <h1 className="font-bold leading-[42px]">Review and Feedback</h1>
      <div className="flex justify-center w-auto h-auto ">
        <Image
          src={reviewAndFeedback}
          alt="review and feedback"
          className="h-auto w-auto"
        />
      </div>
    </div>
  );
};

export default ReviewAndFeedback;
