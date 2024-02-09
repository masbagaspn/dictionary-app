import * as React from "react";

import { Meaning } from "@/types";
import Definition from "./Definition";
import { cn } from "@/lib/utils";

type Props = {
  data: Meaning;
};

export default function Meaning({ data }: Props) {
  return (
    <div
      className={cn(
        "w-full flex gap-8 items-start justify-start",
        "flex-col md:flex-row"
      )}
    >
      {/* container */}
      <span className="w-full md:w-1/5 uppercase container-tag">
        {data.partOfSpeech}
      </span>

      {/* definitions */}
      <div
        className={cn(
          "w-full flex flex-col gap-8",
          "md:grid md:grid-cols-2",
          "lg:w-4/5 lg:grid-cols-3"
        )}
      >
        {data.definitions.map((definition, index) => (
          <Definition
            key={`definition-${index}`}
            index={index}
            data={definition}
          />
        ))}
      </div>
    </div>
  );
}
