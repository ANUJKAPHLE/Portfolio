import Button from "@/widgets/button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between pt-9 px-12 lg:px-28">
        <Link href={"/"} className="text-left">
          <h1 className="text-[28px] font-bold">Anuj Kaphle</h1>
          <p className="text-[22px]">Designer</p>
        </Link>

        <div className="hidden lg:flex justify-between gap-16 font-semibold text-[22px]">
          <div className=" flex gap-16 pt-5">
            <div>Projects</div>
            <a href="/about">About</a>
          </div>
          <Button
            type="submit"
            className="hover:bg-black hover:text-white rounded-[42.4px] px-10 py-2 "
          >
            Hire me
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
