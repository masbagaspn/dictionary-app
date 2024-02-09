import { cn } from "@/lib/utils";
import * as React from "react";
import Header from "./Header";
import Section from "../commons/Section";
import SearchForm from "../forms/SearchForms";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: Props) {
  return (
    <main
      className={cn(
        "max-w-screen min-h-screen font-sans",
        "bg-white text-neutral-950",
        "dark:text-neutral-50 dark:bg-neutral-900",
        className
      )}
    >
      <Header />
      <Section
        className={cn(
          "grow flex flex-col items-center gap-12",
          "px-8 py-4",
          "sm:px-12 sm:py-6",
          "md:px-16 md:py-8",
          "lg:px-20 lg:py-10"
        )}
      >
        <SearchForm />
        {children}
      </Section>
    </main>
  );
}
