import React, { ReactNode } from "react";
interface GlobalLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
      {children}
    </div>
  );
}
