import React, { memo } from "react";

import ToDay from "./ToDay/index";
import Category from "./Category";
import Delivery from "./Delivery";
import Featured from "./Featured";
import OurProduct from "./OurProduct";
import SaleTime from "./SaleTime";
import ThisMonth from "./ThisMonth";

function HomePage() {
  return (
    <div className="mt-[124px] mb-36 xl:px-0 px-[16px]">
      <ToDay />
      <Category />
      <ThisMonth />
      <SaleTime />
      <OurProduct />
      <Featured />
      <Delivery />
    </div>
  );
}
export default memo(HomePage);
