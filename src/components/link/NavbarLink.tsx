import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function NavbarLink({
  href,
  className,
  onClick,
  children,
}: Props) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
