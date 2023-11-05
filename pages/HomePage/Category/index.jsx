import React, { memo } from "react";

import Browse from "./Browse";
import Card from "./Card";

function Category() {
  return (
    <div className="mt-20 container">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <h3 className="text-second-3 font-poppins text-base font-semibold not-italic">
          Categories
        </h3>
      </div>
      <div className="mt-5">
        <Browse />
        <Card />
      </div>
    </div>
  );
}
export default memo(Category);
