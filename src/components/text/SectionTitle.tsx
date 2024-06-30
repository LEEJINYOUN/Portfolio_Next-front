import React, { ReactNode } from "react";
interface GlobalLayoutProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: GlobalLayoutProps) {
  return (
    <h1 className="text-center text-[36px] font-semibold uppercase relative py-[20px] mb-5">
      {children}
    </h1>
  );
}
