import * as React from "react";

import { cn } from "@/lib/utils";

import DarkLightModeBtn from "../buttons/DarkLightModeBtn";
import SelectFont from "../dropdowns/SelectFont";

export default function Header() {
  return (
    <header
      className={cn(
        "flex justify-between items-center",
        "py-4 px-8",
        "sm:px-12",
        "md:px-16",
        "lg:px-20",
        "border-b dark:border-neutral-800"
      )}
    >
      <h1
        className={cn(
          "font-serif tracking-tight",
          "text-lg sm:text-xl md:text-2xl",
          "text-purple-800 dark:text-purple-400"
        )}
      >
        Dictionary
      </h1>
      <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <SelectFont />
        <div className="bg-neutral-200 dark:bg-neutral-700 h-4 md:h-6 w-[1px]" />
        <DarkLightModeBtn />
      </nav>
    </header>
  );
}
