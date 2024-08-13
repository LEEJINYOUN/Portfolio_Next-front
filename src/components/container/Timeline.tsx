"use client";
import React, { useEffect, useState } from "react";
import TimelineItem from "../card/TimelineItem";
import { TimelineMenuModel } from "@/model/TimelineModel";
import axios from "axios";

export default function Timeline() {
  const [getData, setGetData] = useState<any | undefined>();
  const getApiData = async () => {
    try {
      const result = await axios.get("/api/timeline");

      setGetData(result.data.result);
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
        <div className="flex flex-col gap-12">
          {getData !== undefined &&
            getData.map((item: TimelineMenuModel, key: number) => (
              <div
                key={key}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <TimelineItem
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
