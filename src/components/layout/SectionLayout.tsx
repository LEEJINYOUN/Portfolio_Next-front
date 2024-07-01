import React, { ReactNode } from "react";
interface GlobalLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: GlobalLayoutProps) {
  return (
    <section className="section">
      <div className="w-full relative z-10 h-full overflow-y-scroll">
        {children}
      </div>
    </section>
  );
}
