import React, { memo } from "react";

import Button from "@/pages/Button";

import Card from "./Card";
import Explore from "./Explore";

function OurProduct() {
  return (
    <div className="mt-[71px] container">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Our Products
        </p>
      </div>
      <Explore />
      <Card />
      <div className="mt-[60px]">
        <Button />
      </div>
    </div>
  );
}
export default memo(OurProduct);
