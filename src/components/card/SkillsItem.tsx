import Image from "next/image";
import React from "react";
interface Props {
  list: {
    title: string;
    url: string;
  }[];
}

export default function SkillsItem({ list }: Props) {
  return (
    <div className="opacity-100 flex justify-center items-center text-center">
      <div className="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center">
        {list.map((skill, key) => (
          <div
            key={key}
            className="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center"
          >
            <Image
              src={process.env.NEXT_PUBLIC_SIRV_URL + skill.url}
              alt={skill.title}
              width={50}
              height={50}
              style={{ width: 50, height: 50 }}
            />
            <span className="uppercase text-lg font-semibold">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
