import { create } from "zustand";

type FontStore = {
  font: string;
  updateFont: (payload: FontStore["font"]) => void;
};

export const useFontStore = create<FontStore>((set) => ({
  font: "serif",
  updateFont: (font) => set(() => ({ font })),
}));

type WordStore = {
  word: string;
  updateWord: (payload: WordStore["word"]) => void;
};

export const useWordStore = create<WordStore>((set) => ({
  word: "dictionary",
  updateWord: (word) => set(() => ({ word: word })),
}));
