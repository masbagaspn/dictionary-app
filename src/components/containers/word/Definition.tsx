import { Definition } from "@/types";
import * as React from "react";
import RelationList from "./RelationList";

type Props = {
  data: Definition;
  index: number;
};

export default function Definition({ data, index }: Props) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full inline-flex items-center gap-4 text-neutral-500 text-[8px] md:text-[10px]">
        <span className="uppercase">definition</span>
        <span className="grow h-[1px] bg-neutral-400" />
        <span>{`00${index + 1}`}</span>
      </div>
      <p className="text-sm md:text-base">{data.definition}</p>
      <p className="text-neutral-500 text-[10px] md:text-xs italic capitalize">
        {data.example
          ? `"${data.example[0].toUpperCase()}${data.example.slice(1)}"`
          : ""}
      </p>
      <div className="flex flex-col gap-4">
        {data.synonyms.length !== 0 && (
          <RelationList type="synonyms" data={data.synonyms} />
        )}
        {data.antonyms.length !== 0 && (
          <RelationList type="antonyms" data={data.antonyms} />
        )}
      </div>
    </div>
  );
}
