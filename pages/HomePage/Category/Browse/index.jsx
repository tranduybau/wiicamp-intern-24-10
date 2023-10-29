import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Browse() {
  return (
    <div className="flex justify-between">
      <p className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-14 items-center">
        Browse By Category
      </p>
      <div className="flex gap-2 items-center">
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowLeft />
        </div>
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default memo(Browse);
