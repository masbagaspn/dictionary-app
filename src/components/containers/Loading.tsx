import * as React from "react";
import { motion as m } from "framer-motion";

export default function Loading() {
  const dots = new Array(3).fill(0);
  return (
    <m.div className="grow flex items-center justify-center gap-1">
      {dots.map((dot, index) => (
        <m.div
          key={`dot-${index}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.75,
            delay: 0 + index * 0.125,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1],
          }}
          className="w-2 h-2 bg-purple-800 dark:bg-purple-400 rounded-full"
        />
      ))}
    </m.div>
  );
}
