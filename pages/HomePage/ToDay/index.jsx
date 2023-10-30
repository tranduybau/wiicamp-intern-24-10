import React, { memo } from "react";

import Card from "./Card/index";
import FlashSales from "./FlashSales";

function ToDay() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Today’s
        </p>
      </div>
      <FlashSales />
      <Card />
      <div className="mt-14 pb-14 border-b border-inherit border-solid">
        <div className="flex justify-center">
          <p className="bg-second-3 lg:text-base text-xs font-poppins font-medium text-text-1 py-4 lg:px-12 px-4">
            <a href="./product">View All Products</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(ToDay);
