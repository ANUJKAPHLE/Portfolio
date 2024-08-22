import GroceryImage from "./GroceryImage";
import testImage from "@/assets/1.jpg";
import testImage2 from "@/assets/2.jpg";
import testImage3 from "@/assets/3.jpg";

const Research = () => {
  return (
    <div className="bg-black text-white pt-20 px-6 md:px-12 lg:px-[91px] justify-between">
      <h1 className="font-bold leading-[42px]">Research</h1>
      <p className="text-lg leading-[27px] pt-3">
        Effective research will inform the development of features that resonate
        with users, such as personalization, easy navigation, and eco-conscious
        choices. It will also guide strategic decisions on how to market the
        app, reduce environmental impacts, and adapt to evolving consumer
        trends.
      </p>
      <div className="w-auto flex flex-wrap gap-x-64 h-fit  mt-40">
        <GroceryImage
          image={testImage}
          url={
            "https://pdfs.semanticscholar.org/3362/28221350e62f64b578f89060323ce0ae6d5c.pdf"
          }
          style={{ objectPosition: "38% 50%" }}
          text={"Consumer Behaviour During Online Grocery Shopping"}
        />
        <GroceryImage
          image={testImage2}
          url={
            "https://onlinelibrary.wiley.com/doi/epdf/10.1162/108819802763471807"
          }
          style={{ objectPosition: "38% 50%" }}
          text={"Effects of E-Commerce on Greenhouse Gas Emissions"}
        />
        <GroceryImage
          image={testImage3}
          url={
            "https://link.springer.com/content/pdf/10.1007/s11747-021-00815-w.pdf"
          }
          style={{ objectPosition: "1% 50%" }}
          text={"Marketing research on Mobile apps: past, present and future"}
        />
      </div>
    </div>
  );
};

export default Research;
