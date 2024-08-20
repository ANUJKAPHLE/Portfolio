import Button from "@/widgets/button/Button";

const Collaborate = () => {
  return (
    <div className="xs:px-20 md:px-72 py-36 items-center ">
      <div className="sm:w-fit md:w-auto border border-hidden bg-secondary rounded-3xl">
        <div className="text-center px-16 py-14">
          <h1 className="text-[51px] font-bold">Let's Collaborate</h1>
          <p className="text-[22px] pt-1">
            Interested in working together? Let's talk.
          </p>
          <div className="pt-10">
            <Button className="bg-black text-white rounded-md py-4 px-10">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
