import React, { memo } from "react";

import Button from "../../Button";

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
      <div className="mt-[60px] pb-[59px] border-b border-inherit border-solid">
        <Button />
      </div>
    </div>
  );
}

export default memo(ToDay);
