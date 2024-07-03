import React from "react";
import Link from "next/link";
import { NavbarLinkModel } from "@/model/NavbarModel";

export default function NavbarLink({
  href,
  className,
  onClick,
  children,
}: NavbarLinkModel) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
