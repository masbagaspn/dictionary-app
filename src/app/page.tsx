"use client";
import * as React from "react";

import Layout from "@/components/layout.tsx/Layout";
import MainSection from "@/components/sections/MainSection";

export default function Home() {
  return (
    <Layout className="flex flex-col">
      <MainSection />
    </Layout>
  );
}
