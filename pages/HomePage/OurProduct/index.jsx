import React, { memo } from "react";

import Card from "./Card";
import Explore from "./Explore";

function OurProduct() {
  return (
    <div className="mt-16 container">
      <div className="flex gap-2 text-center items-center">
        <p className="lg:w-5 lg:h-10 bg-second-3 rounded sm:w-3 sm:h-8" />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Our Products
        </p>
      </div>
      <Explore />
      <Card />
      <div className="mt-14 pb-14 border-b border-inherit border-solid">
        <div className="flex justify-center">
          <p className="bg-second-3 text-base font-poppins font-medium text-text-1 py-4 px-12 ">
            <a href="./product">View All Products</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default memo(OurProduct);
