import Button from "@/widgets/button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between pt-9 px-12 lg:px-28">
        <Link href={"/"} className="text-left">
          <h1 className="text-[28px] font-bold leading-[42px]">Anuj Kaphle</h1>
          <p className="text-[22px] font-[275] leading-[33px]">Designer</p>
        </Link>

        <div className=" flex justify-between gap-[73px] font-medium text-[22px] leading-[33px]  w-[451px]">
          <div className="pt-3">Projects</div>
          <a className="pt-3" href="/about">
            About
          </a>
          <Button
            type="submit"
            className="hover:bg-black hover:text-white rounded-[42.4px] px-7 py-[13px] w-[149px] h-[59px]"
          >
            Hire Me
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
