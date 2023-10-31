import React, { memo } from "react";

import BestSelling from "./BestSelling";
import Card from "./Card";

function ThisMonth() {
  return (
    <div className="container mt-[70px] ">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
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
