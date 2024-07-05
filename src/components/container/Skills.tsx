"use client";
import React, { useEffect, useState } from "react";
import SkillsItem from "../card/SkillsItem";
import { TAB_LIST } from "@/constants/resume/Tab";
import { TabMenuModel } from "@/model/SkillModel";
import axios from "axios";

export default function Skills() {
  const [tabs, setTabs] = useState(0);

  const [frontData, setFrontData] = useState<any[]>([]);
  const [backData, setBackData] = useState<any[]>([]);
  const [etcData, setEtcData] = useState<any[]>([]);

  const changeTab = (tabNum: number) => {
    if (tabNum == 0) return setTabs(0);
    else if (tabNum == 1) return setTabs(1);
    else if (tabNum == 2) return setTabs(2);
  };

  const getApiData = async () => {
    try {
      const result = await axios.get("/api/skill");
      const getData = result.data.results;

      getData.map((item: any) => {
        if (item.category == "front") {
          setFrontData((frontData) => [...frontData, item]);
        } else if (item.category == "back") {
          setBackData((backData) => [...backData, item]);
        } else if (item.category == "etc") {
          setEtcData((etcData) => [...etcData, item]);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-1 list-none rounded-xl bg-gray-200/50"
            data-tabs="tabs"
            role="list"
          >
            {TAB_LIST.map((tab: TabMenuModel, key: number) => (
              <div
                key={key}
                title={`${tab.title}`}
                className={`z-30 flex-auto text-center font-semibold uppercase rounded-xl ${
                  tabs == key ? "bg-white" : ""
                }`}
                onClick={() => changeTab(key)}
              >
                <div className="z-30 flex-auto text-center font-semibold uppercase rounded-xl">
                  <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                    <span className="ml-1">{tab.title}</span>
                  </a>
                </div>
              </div>
            ))}
          </ul>
          <div className="p-5">
            {tabs == 0 ? (
              <SkillsItem list={frontData} />
            ) : tabs == 1 ? (
              <SkillsItem list={backData} />
            ) : (
              <SkillsItem list={etcData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
