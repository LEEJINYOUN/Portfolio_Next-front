import { ReactNodeModel } from "@/model/LayoutModel";
import React from "react";

export default function SectionLayout({ children }: ReactNodeModel) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
      {children}
    </div>
  );
}
