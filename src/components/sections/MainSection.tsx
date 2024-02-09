import * as React from "react";

import { cn } from "@/lib/utils";
import { useFontStore } from "@/store/zustand";

import { useWordQuery } from "@/hooks/useWordQuery";

import Meaning from "../containers/word/Meaning";
import AudioBtn from "../buttons/AudioBtn";
import Loading from "../containers/Loading";
import Empty from "../containers/Empty";

export default function MainSection() {
  const { font } = useFontStore();
  const { data, isLoading, error } = useWordQuery();

  if (isLoading) return <Loading />;

  if (!data || error) return <Empty />;

  const audio = data.phonetics.filter((phonetic) => phonetic.audio !== "");

  return (
    <div
      className={cn("w-full flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16")}
    >
      {/* first row */}
      <div className="flex justify-between items-center">
        <div>
          <span className="container-tag uppercase">word</span>
          <h2
            className={cn(
              "tracking-tight capitalize",
              "mb-1 mt-2 sm:mt-3 md:mt-4 lg:mt-6",
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl ",
              {
                "font-serif": font === "serif",
                "font-sans": font === "sans serif",
              }
            )}
          >
            {data?.word}
          </h2>
          <p
            className={cn(
              "text-neutral-900/30 font-medium dark:text-neutral-100/30",
              "text-xs md:text-sm lg:text-base"
            )}
          >
            {data?.phonetic}
          </p>
        </div>
        {audio.length !== 0 && <AudioBtn audio={audio[0].audio} />}
      </div>

      {/* second row */}
      <div className="flex flex-col gap-10">
        {data?.meanings.map((meaning, index) => (
          <Meaning key={`meaning-${index}`} data={meaning} />
        ))}
      </div>
    </div>
  );
}
