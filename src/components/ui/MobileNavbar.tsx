import React from "react";
import Hamburger from "../icon/Hamburger";
import XMark from "../icon/XMark";
import { NAVBAR_MENU } from "@/constants/navbar/Menu";
import NavbarLink from "../link/NavbarLink";
import { MobileNavbarLinkModel, NavbarMenuModel } from "@/model/NavbarModel";

export default function MobileNavbar({
  isToggle,
  openToggle,
  closeToggle,
  pathname,
}: MobileNavbarLinkModel) {
  return (
    <nav className="xl:hidden whitespace-nowrap">
      <div className="text-3xl cursor-pointer">
        <Hamburger className={"click w-10 h-10 "} onClick={openToggle} />
      </div>
      <div
        className={`bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 ${
          !isToggle ? "hidden" : ""
        }`}
      >
        <div className="text-4xl absolute z-30 left-4 top-14 cursor-pointer hover:text-red-500 duration-150">
          <XMark className={"click w-10 h-10 "} onClick={closeToggle} />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          {NAVBAR_MENU.map((menu: NavbarMenuModel, key: number) => (
            <li key={key}>
              <NavbarLink
                href={menu.link}
                className={`text-[#8e9699] hover:text-sky-500 transition duration-200 ${
                  pathname == `${menu.link}` ? "text-sky-500" : ""
                }`}
                onClick={closeToggle}
              >
                {menu.title}
              </NavbarLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
