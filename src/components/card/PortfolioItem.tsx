"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlackButton from "../button/BlackButton";
import { PORTFOLIO_LIST } from "@/constants/portfolio/Portfolio";
import { PortfolioModel } from "@/model/portfolio";
import More from "../modal/portfolio/More";
import Link from "../icon/Link";

export default function PortfolioItem() {
  const [modalOpen, setModalOpen] = useState(false);
  const [moreItem, setMoreItem] = useState<any>();
  const handleOpen = (item: PortfolioModel) => {
    setMoreItem(item);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <>
      {PORTFOLIO_LIST.map((item: PortfolioModel, key: number) => (
        <div
          className="relative overflow-hidden z-10 h-[250px] rounded-lg"
          key={key}
        >
          <div className="portfolioWrap w-full h-full">
            <Image
              src={process.env.NEXT_PUBLIC_SIRV_URL + item.url}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: 250 }}
            />
            <div className="portfolioInfo absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-y-4 bg-[#ffffff86] scale-[0.001] duration-500 text-[#333]">
              <h4 className="text-[24px] text-[#333] font-semibold">
                {item.title}
              </h4>
              <p className="font-normal">{item.category}</p>
              {item.page != "-" && (
                <div>
                  <a href={item.page} target="_blank">
                    <Link className="text-[10px] w-[25px] h-[25px] text-[#333] hover:text-sky-400" />
                  </a>
                </div>
              )}
              <BlackButton onClick={() => handleOpen(item)}>자세히</BlackButton>
            </div>
          </div>
        </div>
      ))}
      {moreItem !== undefined && (
        <More
          portfolio={moreItem}
          modalOpen={modalOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
