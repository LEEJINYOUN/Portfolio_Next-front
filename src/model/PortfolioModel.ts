import { ReactNode } from "react";

export interface PortfolioMenuModel {
  id: number;
  title: string;
  date: string;
  category: string;
  member: number;
  tool: string;
  skill: string;
  develop: string;
  work: string;
  des: string[];
  url: string;
  github: string;
  page: string;
}

export interface MoreModel {
  portfolio: PortfolioMenuModel;
  modalOpen: boolean;
  modalClose: () => void;
}

export interface MoreTitleModel {
  children: ReactNode;
  className?: string;
}
