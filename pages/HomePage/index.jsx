import React, { memo } from "react";

import ToDay from "./ToDay/index";
import Category from "./Category";
import SaleTime from "./SaleTime";
import ThisMonth from "./ThisMonth";

function HomePage() {
  return (
    <div className="mt-36">
      <ToDay />
      <Category />
      <ThisMonth />
      <SaleTime />
    </div>
  );
}
export default memo(HomePage);
