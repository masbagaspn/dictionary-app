"use client";

import * as React from "react";
import { AnimatePresence, motion as m } from "framer-motion";

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
    <div
      onBlur={() => setIsOpen(false)}
      className="relative flex flex-col gap-1 tracking-tight text-[10px] md:text-xs"
    >
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

      {/* menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            key="font-menu"
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
              "absolute min-w-[96px] flex flex-col p-1 rounded-md shadow-md top-[120%] right-0 overflow-hidden",
              "bg-white",
              "dark:bg-neutral-800 dark:text-purple-100"
            )}
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {fonts.map((font) => (
              <button
                key={font}
                className={cn(
                  "text-left bg-white px-3 py-1.5 text-neutral-400 rounded transition capitalize",
                  "hover:bg-purple-50 hover:text-purple-400",
                  "dark:bg-neutral-800 dark:text-purple-200/50 dark:hover:bg-neutral-700 dark:hover:text-purple-200"
                )}
                onClick={() => handleSelectFont(font)}
              >
                {font}
              </button>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
