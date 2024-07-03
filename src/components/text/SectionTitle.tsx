import { ReactNodeModel } from "@/model/LayoutModel";
import React from "react";

export default function SectionTitle({ children }: ReactNodeModel) {
  return (
    <h1 className="text-center text-[36px] font-semibold uppercase relative py-[20px] mb-5">
      {children}
    </h1>
  );
}
