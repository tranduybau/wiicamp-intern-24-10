import React, { memo } from "react";

import BestSelling from "./BestSelling";
import Card from "./Card";

function ThisMonth() {
  return (
    <div className="container mt-20 ">
      <div className="flex gap-2 text-center items-center">
        <p className="lg:w-5 lg:h-10 bg-second-3 rounded sm:w-3 sm:h-8" />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          This Month
        </p>
      </div>
      <BestSelling />
      <Card />
    </div>
  );
}
export default memo(ThisMonth);
