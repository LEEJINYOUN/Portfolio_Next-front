"use client";
import React, { useState } from "react";
import SkillsItem from "../card/SkillsItem";
import Item from "../tabs/Item";

export default function Skills() {
  const [tabs, setTabs] = useState(0);

  const changeTab = (tabNum: number) => {
    if (tabNum == 0) return setTabs(0);
    else if (tabNum == 1) return setTabs(1);
    else if (tabNum == 2) return setTabs(2);
  };

  const fontSkillList = [
    {
      title: "html",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/html.svg",
    },
    {
      title: "css",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/css.svg",
    },
    {
      title: "javascript",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/javascript.svg",
    },
    {
      title: "typescript",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/typescript.svg",
    },
    {
      title: "react js",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/react.svg",
    },
    {
      title: "next js",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/next.svg",
    },
    {
      title: "vue js",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/vue.svg",
    },
    {
      title: "nuxt js",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/front/nuxt.svg",
    },
  ];

  const backSkillList = [
    {
      title: "laravel",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/back/laravel.svg",
    },
    {
      title: "mysql",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/back/mysql.svg",
    },
    {
      title: "node js",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/back/node.svg",
    },
  ];
  const etcSkillList = [
    {
      title: "git",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/git.svg",
    },
    {
      title: "github",
      url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/github.svg",
    },
  ];

  const tabList = [
    {
      title: "front",
    },
    {
      title: "back",
    },
    {
      title: "etc",
    },
  ];
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-1 list-none rounded-xl bg-gray-200/50"
            data-tabs="tabs"
            role="list"
          >
            {tabList.map((tab: any, key: number) => (
              <Item
                key={key}
                title={`${tab.title}`}
                className={`${tabs == key ? "bg-white" : ""}`}
              >
                <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                  <span className="ml-1">{tab.title}</span>
                </a>
              </Item>
            ))}
          </ul>
          <div className="p-5">
            {tabs == 0 ?? <SkillsItem list={`${fontSkillList}`} />}
            {tabs == 1 ?? <SkillsItem list={`${backSkillList}`} />}
            {tabs == 2 ?? <SkillsItem list={`${etcSkillList}`} />}
            {/* <SkillsItem v-if="tabs == 0" :list="backSkillList" />
        <SkillsItem v-if="tabs == 1" :list="backSkillList" />
        <SkillsItem v-if="tabs == 2" :list="etcSkillList" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
