import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Hamburger from "../icon/Hamburger";
import XMark from "../icon/XMark";

export default function NavbarLayout() {
  const router = useRouter();

  const menuList = [
    {
      link: "/resume",
      title: "Resume",
    },
    {
      link: "/portfolio",
      title: "Portfolio",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ];

  const [isToggle, setIsToggle] = useState(false);

  const openToggle = () => {
    setIsToggle(true);
  };

  const closeToggle = () => {
    setIsToggle(false);
  };
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[120px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link
          href="/"
          className="max-w-[200px] uppercase tracking-widest font-black text-3xl"
        >
          jin young
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold text-xl whitespace-nowrap">
          {menuList.map((menu: any, key: number) => (
            <Link
              key={key}
              href="/"
              className="text-[#8e9699] hover:text-sky-500 transition duration-200"
            >
              {menu.title}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="xl:hidden whitespace-nowrap">
        <div className="text-3xl cursor-pointer hover:text-red-500 duration-150">
          <Hamburger />
        </div>
        <div className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
          <div className="text-4xl absolute z-30 left-4 top-14 cursor-pointer hover:text-red-500 duration-150">
            <XMark />
          </div>
          <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
            {menuList.map((menu: any, key: number) => (
              <li key={key}>
                <Link
                  href="/"
                  className="text-[#8e9699] hover:text-sky-500 transition duration-200"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
