import { cn } from "@/lib/utils";
import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"section">;

export default function Section({ children, className, ...props }: Props) {
  return (
    <section className={cn("w-full px-20", className)}>{children}</section>
  );
}
