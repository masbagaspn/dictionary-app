import { useWordStore } from "@/store/zustand";
import WordData, { ErrorResponse } from "@/types";
import { useQuery } from "react-query";

const api = `https://api.dictionaryapi.dev/api/v2/entries/en`;

export const useWordQuery = () => {
  const { word } = useWordStore();
  const endpoint = `${api}/${word}`;

  const { data: wordData, ...rest } = useQuery<WordData[], ErrorResponse>({
    queryKey: ["word", word],
    queryFn: () => fetch(endpoint).then((res) => res.json()),
  });

  const data: WordData | null = wordData ? wordData[0] : null;

  return { data, ...rest };
};
