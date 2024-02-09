import type { Metadata } from "next";
import { Inter, Song_Myung } from "next/font/google";

import "./globals.css";
import { Provider } from "@/components/providers/Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const song_myung = Song_Myung({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-songmyung",
});

export const metadata: Metadata = {
  title: "Dictionary App",
  description:
    "Simple dictionary app built using Next.js, Zustand, React Query, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${song_myung.variable} min-h-screen`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
