import React, { memo } from "react";

import Button from "@/pages/Button";

function BestSelling() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl  items-center tracking-[1.44px] leading-[48px]">
          Best Selling Products
        </h2>
        {/* <div className="flex justify-center">
          <p className="bg-second-3 lg:text-base text-xs font-poppins font-medium text-text-1 lg:py-4 lg:px-12 py-2 px-4">
            <a href="./bestSelling">View All</a>
          </p>
        </div> */}
        <Button classCustom="lg:px-12  px-4" title="View All" />
      </div>
    </div>
  );
}
export default memo(BestSelling);
