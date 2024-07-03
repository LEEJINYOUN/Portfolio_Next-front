"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { NAVBAR_MENU } from "@/constants/navbar/Menu";
import NavbarLink from "../link/NavbarLink";
import { NavbarMenuModel } from "@/model/NavbarModel";

export default function Navbar() {
  const pathname = usePathname();
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
        <NavbarLink
          href={"/"}
          className={
            "max-w-[200px] uppercase tracking-widest font-black text-3xl"
          }
        >
          jin young
        </NavbarLink>
        <nav className="hidden xl:flex gap-x-12 font-semibold text-xl whitespace-nowrap">
          {NAVBAR_MENU.map((menu: NavbarMenuModel, key: number) => (
            <NavbarLink
              key={key}
              href={menu.link}
              className={`text-[#8e9699] hover:text-sky-500 transition duration-200 ${
                pathname == `${menu.link}` ? "text-sky-500" : ""
              }`}
              onClick={closeToggle}
            >
              {menu.title}
            </NavbarLink>
          ))}
        </nav>
      </div>
      <MobileNavbar
        isToggle={isToggle}
        openToggle={openToggle}
        closeToggle={closeToggle}
        pathname={pathname}
      />
    </header>
  );
}
