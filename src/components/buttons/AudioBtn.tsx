"use client";

import * as React from "react";

import { motion as m } from "framer-motion";
import clsx from "clsx";

type Props = {
  audio: string;
};

export default function AudioBtn({ audio }: Props) {
  const [play, setPlay] = React.useState(false);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <>
      <m.button
        onClick={handlePlay}
        className={clsx(
          "group w-fit h-fit rounded-full transition",
          "p-2 lg:p-3",
          "bg-purple-100 text-purple-500 hover:bg-purple-200",
          "dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-600"
        )}
      >
        <m.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="80"
            y1="88"
            x2="80"
            y2="168"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <m.path
            d="M192,106.85a32,32,0,0,1,0,42.3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            animate={
              play
                ? {
                    opacity: [0, 1, 0, 1, 0],
                    transition: {
                      duration: 4,
                      times: [0, 0.25, 0.5, 0.75, 1],
                      repeatType: "loop",
                      repeat: Infinity,
                    },
                  }
                : {
                    opacity: 1,
                  }
            }
          />
          <m.path
            d="M221.67,80a72,72,0,0,1,0,96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            animate={
              play
                ? {
                    opacity: [0, 1, 0, 1, 0],
                    transition: {
                      duration: 4,
                      delay: 0.2,
                      times: [0, 0.25, 0.5, 0.75, 1],
                      repeatType: "loop",
                      repeat: Infinity,
                    },
                  }
                : {
                    opacity: 1,
                  }
            }
          />
        </m.svg>
      </m.button>
      <audio ref={audioRef} onEnded={() => setPlay(false)}>
        <source src={audio} type="audio/mpeg" />
      </audio>
    </>
  );
}
