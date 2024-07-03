import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
}

export default function MoreTitle({ children, className }: Props) {
  return <div className={`py-[5px] ${className}`}>{children}</div>;
}
