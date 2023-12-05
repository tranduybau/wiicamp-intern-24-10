import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Explore() {
  return (
    <div className="flex mt-[20px] justify-between">
      <h1 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl items-center tracking-[1.44px] leading-[48px]">
        Explore Our Products
      </h1>
      <div className="flex gap-2 items-center">
        <ArrowLeft size={32} className="relative bg-second-2 rounded-full" />

        <ArrowRight size={32} className="relative bg-second-2 rounded-full" />
      </div>
    </div>
  );
}
export default memo(Explore);
