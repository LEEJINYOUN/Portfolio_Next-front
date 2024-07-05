import React from "react";
import GreenCheck from "../icon/GreenCheck";
import { TimelineMenuModel } from "@/model/TimelineModel";

export default function TimelineItem({
  title,
  date,
  description,
}: TimelineMenuModel) {
  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <GreenCheck />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[50%] bg-white p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-slate-900">{title}</div>
          <time className="font-caveat font-medium text-indigo-500">
            {date}
          </time>
        </div>
        <div className="text-slate-500">{description}</div>
      </div>
    </>
  );
}
