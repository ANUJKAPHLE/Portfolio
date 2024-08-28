"use client";

import { useState } from "react";

import Button from "@/widgets/button/Button";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className=" flex justify-between pt-9 px-4 md:px-12 lg:px-28">
        <Link href={"/"} className="text-left">
          <h1 className="text-2xl font-bold leading-[42px]">Anuj Kaphle</h1>
          <p className="text-xl font-[275] leading-[33px]">Designer</p>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex justify-between font-medium text-xl leading-[33px]  w-[451px]">
          <a className="pt-3" href="/projects">
            Projects
          </a>
          <a className="pt-3" href="/about">
            About
          </a>
          <a href="mailto:Kaphleanuj@gmail.com">
            <Button
              type="submit"
              className="hover:bg-black hover:text-white rounded-[42.4px] px-7 py-[13px] w-[149px] h-[59px]"
            >
              Hire Me
            </Button>
          </a>
        </div>
      </header>
      {isOpen && (
        <div className="md:hidden pt-2 text-end pr-5">
          <a href="/grocery" className="block py-2">
            Projects
          </a>
          <a href="/about" className="block py-2">
            About
          </a>
          <a href="#" className="block py-2">
            Hire Me
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
