import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import ContainerLayout from "@/components/layout/ContainerLayout";
import SectionTitle from "@/components/text/SectionTitle";
import Skills from "@/components/container/Skills";
import Timeline from "@/components/container/Timeline";

export default function ResumePage() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <SectionTitle>- timeline -</SectionTitle>
        <Timeline />
      </ContainerLayout>
      <ContainerLayout>
        <SectionTitle>- skills -</SectionTitle>
        <Skills />
      </ContainerLayout>
    </SectionLayout>
  );
}
