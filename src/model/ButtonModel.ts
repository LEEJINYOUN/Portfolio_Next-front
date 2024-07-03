import { ReactNode } from "react";

export interface ButtonModel {
  children: ReactNode;
  onClick?: () => void;
}
