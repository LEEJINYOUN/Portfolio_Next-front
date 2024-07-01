import React from "react";
import Image from "next/image";
import BlackButton from "../button/BlackButton";
import { PORTFOLIO_LIST } from "@/constants/portfolio/Portfolio";

export default function PortfolioItem() {
  return (
    <div>
      {PORTFOLIO_LIST.map((item: any, key: number) => (
        <div
          className="relative overflow-hidden z-10 h-[250px] rounded-lg"
          key={key}
        >
          <div className="portfolioWrap w-full h-full">
            <Image
              src={item.url}
              alt={item.title}
              width={50}
              height={50}
              style={{ width: 50, height: 50 }}
            />
            <div className="portfolioInfo absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-y-4 bg-[#ffffff86] scale-[0.001] duration-500 text-[#333]">
              <h4 className="text-[24px] text-[#333] font-semibold">
                {item.title}
              </h4>
              <p className="font-normal">{item.category}</p>
              {item.page != "-" && (
                <div>
                  <a href={item.page} target="_blank">
                    {/* <Link /> */}
                  </a>
                </div>
              )}
              <BlackButton>자세히</BlackButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
