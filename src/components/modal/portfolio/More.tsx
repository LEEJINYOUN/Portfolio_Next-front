"use client";
import Github from "@/components/icon/Github";
import Link from "@/components/icon/Link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import BlackButton from "@/components/button/BlackButton";
import MoreTitle from "@/components/text/MoreTitle";
import { MoreModel } from "@/model/PortfolioModel";
import axios from "axios";

export default function More({ portfolio, modalOpen, modalClose }: MoreModel) {
  const [getData, setGetData] = useState<any | undefined>();

  // const getApiData = async () => {
  //   const portfolioId = portfolio.id;
  //   try {
  //     const result = await axios.get(`/api/portfolio/${portfolioId}/des`);
  //     setGetData(result.data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    // getApiData();
  }, [modalOpen]);

  return (
    <Modal
      open={modalOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
                <MoreTitle className="font-bold">제목</MoreTitle>
                <MoreTitle className="font-bold">기간</MoreTitle>
                <MoreTitle className="font-bold">카테고리</MoreTitle>
                <MoreTitle className="font-bold">인원</MoreTitle>
                <MoreTitle className="font-bold">툴</MoreTitle>
                <MoreTitle className="font-bold">스킬</MoreTitle>
                <MoreTitle className="font-bold">배포</MoreTitle>
                <MoreTitle className="font-bold">업무</MoreTitle>
                <MoreTitle className="font-bold">설명</MoreTitle>
              </div>
              <div className="flex flex-col w-[75%] h-full text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px]">
                <MoreTitle>{portfolio.title}</MoreTitle>
                <MoreTitle>{portfolio.date}</MoreTitle>
                <MoreTitle>{portfolio.category}</MoreTitle>
                <MoreTitle>{portfolio.member}명</MoreTitle>
                <MoreTitle>{portfolio.tool.toUpperCase()}</MoreTitle>
                <MoreTitle>{portfolio.skill.toUpperCase()}</MoreTitle>
                <MoreTitle>{portfolio.develop.toUpperCase()}</MoreTitle>
                <MoreTitle>{portfolio.work}</MoreTitle>
                {portfolio !== undefined &&
                  portfolio.des.map((item: any, key: number) => (
                    <MoreTitle key={key}>
                      {key + 1}. {item}
                    </MoreTitle>
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
              <BlackButton onClick={modalClose}>닫기</BlackButton>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
