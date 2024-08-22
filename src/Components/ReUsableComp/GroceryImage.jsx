import Image from "next/image";

const GroceryImage = ({ image, alt }) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[483px] h-auto mt-16">
      <Image
        src={image}
        alt={alt}
        className="w-full h-auto"
        layout="responsive"
        width={483}
        height={974}
      />
    </div>
  );
};

export default GroceryImage;
