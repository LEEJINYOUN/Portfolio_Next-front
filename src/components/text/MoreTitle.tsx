import { MoreTitleModel } from "@/model/PortfolioModel";
import React from "react";

export default function MoreTitle({ children, className }: MoreTitleModel) {
  return <div className={`py-[5px] ${className}`}>{children}</div>;
}
