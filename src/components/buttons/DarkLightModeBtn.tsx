"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { PiMoonStarsFill, PiSunFill } from "react-icons/pi";

import { cn } from "@/lib/utils";

const DarkLightModeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="group text-base sm:text-md md:text-lg lg:text-xl"
    >
      {theme === "light" ? (
        <PiMoonStarsFill
          className={cn(
            "text-neutral-500  transition",
            "hover:text-purple-500"
          )}
        />
      ) : (
        <PiSunFill
          className={cn("text-neutral-500 transition", "hover:text-purple-400")}
        />
      )}
    </button>
  );
};

export default DarkLightModeBtn;
