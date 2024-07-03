import { ReactNodeModel } from "@/model/LayoutModel";
import React from "react";

export default function SectionLayout({ children }: ReactNodeModel) {
  return (
    <section className="section">
      <div className="w-full relative z-10 h-full overflow-y-scroll">
        {children}
      </div>
    </section>
  );
}
