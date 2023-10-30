import React from "react";

// import { Inter } from "next/font/google";
import HomePage from "./HomePage";
import SideBar from "./SideBar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main className={`p-24 bg-white ${inter.className}`}>
    //   <SideBar />
    //   <HomePage />
    // </main>
    <main>
      <SideBar />
      <HomePage />
    </main>
  );
}
