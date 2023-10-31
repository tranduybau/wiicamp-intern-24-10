import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Browse() {
  return (
    <div className="flex justify-between">
      <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-[60px] items-center">
        Browse By Category
      </h2>
      <div className="flex gap-2 items-center">
        <div className="relative  bg-second-2 rounded-full">
          <ArrowLeft size={32} />
        </div>
        <div className="relative bg-second-2 rounded-full">
          <ArrowRight size={32} />
        </div>
      </div>
    </div>
  );
}

export default memo(Browse);
