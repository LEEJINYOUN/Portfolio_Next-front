import { ReactNode } from "react";

export interface NavbarLinkModel {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export interface NavbarMenuModel {
  link: string;
  title: string;
}

export interface MobileNavbarLinkModel {
  isToggle: boolean;
  openToggle: () => void;
  closeToggle: () => void;
  pathname: string;
}
