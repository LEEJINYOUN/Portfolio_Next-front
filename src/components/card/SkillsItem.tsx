import React from "react";

export default function SkillsItem({ list }: any) {
  return (
    <div>
      {list.map((skill: any, key: number) => (
        <div
          key={key}
          className="opacity-100 flex justify-center items-center text-center"
        >
          <div className="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center">
            <div className="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center">
              <img src="" alt="" className="w-10 h-10" />
              <span className="uppercase text-lg font-semibold">
                {skill.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
