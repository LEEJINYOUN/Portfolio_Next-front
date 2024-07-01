import React from "react";

interface GlobalLayoutProps {
  title: string;
  date: string;
  des: string;
}

export default function TimelineItem({ title, date, des }: GlobalLayoutProps) {
  return (
    <div className="w-[calc(100%-4rem)] md:w-[50%] bg-white p-4 rounded border border-slate-200 shadow">
      <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold text-slate-900">{title}</div>
        <time className="font-caveat font-medium text-indigo-500">{date}</time>
      </div>
      <div className="text-slate-500">{des}</div>
    </div>
  );
}
