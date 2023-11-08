import React, { memo } from "react";
import PropTypes from "prop-types";

import BestSelling from "./BestSelling";
import Card from "./Card";

function ThisMonth({ products }) {
  return (
    <div className="container mt-[70px] ">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <h3 className="text-second-3 font-poppins text-base font-semibold not-italic">
          This Month
        </h3>
      </div>
      <BestSelling />
      <Card products={products} />
    </div>
  );
}
export default memo(ThisMonth);
ThisMonth.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
