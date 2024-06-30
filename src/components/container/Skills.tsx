import React, { useState } from "react";

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
  return <div></div>;
}
