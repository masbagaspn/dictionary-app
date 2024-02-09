import { useWordQuery } from "@/hooks/useWordQuery";
import { useWordStore } from "@/store/zustand";
import clsx from "clsx";
import * as React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { QueryClient } from "react-query";

const SearchForm = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const { refetch } = useWordQuery();
  const { word, updateWord } = useWordStore();

  const queryClient = new QueryClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    queryClient.invalidateQueries(["word", word]);
    updateWord(searchValue);
    refetch();
    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "flex justify-between items-center gap-1 rounded-lg",
        "w-full",
        "px-6 py-4",
        "bg-purple-50 rounded text-purple-900 font-medium",
        "dark:bg-purple-700 dark:text-purple-100"
      )}
    >
      <label htmlFor="wordField" className="sr-only">
        Word
      </label>
      <input
        id="wordField"
        name="wordField"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent w-full placeholder:font-medium placeholder:text-purple-400 dark:placeholder:text-purple-400 text-xs md:text-sm capitalize"
        placeholder="Looking for word definition?"
      />
      <PiMagnifyingGlass />
    </form>
  );
};

export default SearchForm;
