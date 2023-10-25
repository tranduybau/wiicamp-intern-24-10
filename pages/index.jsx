import React from "react";
// import classNames from "classnames";
import { Inter } from "next/font/google";

import Slider from "@/components/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <section>
        <Slider />
      </section>
    </main>
  );
}
