import BlueButton from "@/components/button/BlueButton";
import Github from "@/components/icon/Github";
import Link from "@/components/icon/Link";
import { PortfolioModel } from "@/model/portfolio";
import Image from "next/image";
import React from "react";

interface Props {
  portfolio: PortfolioModel;
  closeModal: () => void;
}

export default function More({ portfolio, closeModal }: Props) {
  return (
    <div className=" flex w-full h-full flex-col justify-center items-center">
      <div className="bg-white rounded-lg w-[60%] h-[80%] sm:h-[70%] md:h-1/2 flex flex-col md:flex-row">
        <div className="flex justify-center items-center w-full h-[40%] md:w-[40%] md:h-full">
          <div className="w-[70%] h-[90%] md:w-[90%] md:h-[70%]">
            <Image
              src={process.env.NEXT_PUBLIC_SIRV_URL + portfolio.url}
              alt={portfolio.title}
              width={0}
              height={0}
              sizes="100vw 100vh"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex flex-col pt-[5px] pl-[5px] w-full h-[60%] md:w-[60%] md:h-full">
          <div className="flex flex-row mt-[0%] md:mt-[10%] w-full h-[75%] md:h-[70%] overflow-y-auto">
            <div className="flex flex-col items-center w-[25%] h-full text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px]">
              <div className="py-[5px] font-bold">제목</div>
              <div className="py-[5px] font-bold">기간</div>
              <div className="py-[5px] font-bold">카테고리</div>
              <div className="py-[5px] font-bold">인원</div>
              <div className="py-[5px] font-bold">툴</div>
              <div className="py-[5px] font-bold">스킬</div>
              <div className="py-[5px] font-bold">배포</div>
              <div className="py-[5px] font-bold">업무</div>
              <div className="py-[5px] font-bold">설명</div>
            </div>
            <div className="flex flex-col w-[75%] h-full text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px]">
              <div className="py-[5px]">{portfolio.title}</div>
              <div className="py-[5px]">{portfolio.date}</div>
              <div className="py-[5px]">{portfolio.category}</div>
              <div className="py-[5px]">{portfolio.member}명</div>
              <div className="py-[5px]">{portfolio.tool.toUpperCase()}</div>
              <div className="py-[5px]">{portfolio.skill.toUpperCase()}</div>
              <div className="py-[5px]">{portfolio.develop.toUpperCase()}</div>
              <div className="py-[5px]">{portfolio.work}</div>
              {portfolio.des.map((item: string, key: number) => (
                <div key={key} className="py-[5px]">
                  {key + 1}. {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-[10%] text-[20px]">
            {portfolio.github != "-" && (
              <a
                href={portfolio.github}
                target="_blank"
                className="mx-[20px] flex justify-center items-center hover:scale-150 duration-500"
              >
                <Github className="w-[25px]" />
              </a>
            )}
            {portfolio.page != "-" && (
              <a
                href={portfolio.page}
                target="_blank"
                className="mx-[20px] w-[25px] flex justify-center items-center hover:scale-150 duration-500"
              >
                <Link />
              </a>
            )}
          </div>
          <div className="flex justify-center items-center w-full h-[10%]">
            <BlueButton onClick={closeModal}>닫기</BlueButton>
          </div>
        </div>
      </div>
    </div>
  );
}
