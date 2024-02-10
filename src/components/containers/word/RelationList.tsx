import * as React from "react";

import { cn } from "@/lib/utils";
import { useFontStore, useWordStore } from "@/store/zustand";
import { QueryClient } from "react-query";
import { useWordQuery } from "@/hooks/useWordQuery";

type Props = {
  type: "synonyms" | "antonyms";
  data: string[];
};

export default function RelationList({ type, data }: Props) {
  const { updateWord } = useWordStore();
  const { refetch } = useWordQuery();

  const queryClient = new QueryClient();

  const selectWord = (word: string) => {
    updateWord(word);
    queryClient.invalidateQueries(["word", word]);
    refetch();
  };

  return (
    <span className="inline-flex items-center font-light gap-4 text-[10px] md:text-xs">
      <span className="capitalize text-purple-600 tracking-tight font-light">
        {type}
      </span>
      <ul className="flex gap-2 flex-wrap">
        {data.map((word) => (
          <li
            key={word}
            onClick={() => selectWord(word)}
            className={cn(
              "capitalize cursor-pointer px-2 py-0.5 md:px-3 md:py-1 rounded-full transition",
              "bg-purple-100 text-purple-600 hover:bg-purple-200",
              "dark:bg-purple-950 dark:text-purple-400 dark:hover:bg-purple-900"
            )}
          >
            {word}
          </li>
        ))}
      </ul>
    </span>
  );
}
