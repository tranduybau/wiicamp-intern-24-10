import React, { memo } from "react";
import PropTypes from "prop-types";

import ToDay from "./Today/index";
import Category from "./Category";
import Featured from "./Featured";
import OurProduct from "./OurProduct";
import SaleTime from "./SaleTime";
import Delivery from "./Services";
import ThisMonth from "./ThisMonth";

function HomePage({ products }) {
  return (
    <div className="lg:mt-[124px] mt-[60px] mb-36 xl:px-0 px-[16px]">
      <ToDay products={products} />
      <Category />
      <ThisMonth products={products} />
      <SaleTime />
      <OurProduct products={products} />
      <Featured />
      <Delivery />
    </div>
  );
}
export default memo(HomePage);

HomePage.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
