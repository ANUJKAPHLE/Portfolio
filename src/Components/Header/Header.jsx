import Button from "@/widgets/button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between pt-9 px-12 lg:px-28">
        <Link href={"/"} className="text-left">
          <h1 className="font-bold">Anuj Kaphle</h1>
          <p>Designer</p>
        </Link>

        <div className="hidden lg:flex justify-between gap-16 font-semibold">
          <div className=" flex gap-16 pt-4">
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">About</div>
          </div>
          <Button
            type="submit"
            className="hover:bg-black hover:text-white rounded-full  "
          >
            Hire me
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
