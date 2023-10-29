import React, { memo } from "react";

function BestSelling() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <p className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-14 items-center ">
          Best Selling Products
        </p>
        <div>
          <div className="flex justify-center">
            <p className="bg-second-3 lg:text-base text-xs font-poppins font-medium text-text-1 py-4 px-12 ">
              <a href="./bestSelling">View All</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(BestSelling);
