import * as React from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: (e: MouseEvent) => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, callback]);
};
