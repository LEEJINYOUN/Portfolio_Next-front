import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import ContainerLayout from "@/components/layout/ContainerLayout";
import SectionTitle from "@/components/text/SectionTitle";
import PortfolioItem from "@/components/card/PortfolioItem";

export default function PortfolioPage() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <SectionTitle>- portfolio -</SectionTitle>
        <div className="w-5/6 sm:w-4/6 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <PortfolioItem />
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
