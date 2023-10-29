import React, { memo } from "react";

import Browse from "./Browse";
import Card from "./Card";

function Category() {
  return (
    <div className="mt-20 container">
      <div className="flex gap-2 text-center items-center">
        <p className="lg:w-5 lg:h-10 bg-second-3 rounded sm:w-3 sm:h-8" />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Categories
        </p>
      </div>
      <div className="mt-5">
        <Browse />
        <Card />
      </div>
    </div>
  );
}
export default memo(Category);
