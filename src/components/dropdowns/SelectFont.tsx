"use client";

import * as React from "react";
import { motion as m } from "framer-motion";

import { useFontStore } from "@/store/zustand";
import { PiCaretDown } from "react-icons/pi";
import { cn } from "@/lib/utils";

export default function SelectFont() {
  const { font, updateFont } = useFontStore();

  const [isOpen, setIsOpen] = React.useState(false);

  const fonts = ["serif", "sans serif"];

  const handleSelectFont = (selected: string) => {
    updateFont(selected);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col gap-1 tracking-tight text-[10px] md:text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group font-sans inline-flex items-center gap-1 text-neutral-400",
          "hover:text-purple-500",
          "dark:text-neutral-500 dark:hover:text-purple-400"
        )}
      >
        <span className="capitalize">{font}</span>
        <m.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, stiffness: 0 }}
        >
          <PiCaretDown />
        </m.span>
      </button>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className={cn(
            "absolute min-w-[96px] flex flex-col p-1 rounded-md shadow-md top-[120%] right-0",
            "bg-white",
            "dark:bg-purple-700 dark:text-purple-100"
          )}
        >
          {fonts.map((font) => (
            <button
              key={font}
              className={cn(
                "text-left bg-white px-3 py-1.5 text-neutral-400 rounded transition capitalize",
                "hover:bg-purple-50 hover:text-purple-400",
                "dark:bg-purple-700 dark:text-purple-300 dark:hover:bg-purple-300 dark:hover:text-purple-700"
              )}
              onClick={() => handleSelectFont(font)}
            >
              {font}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
