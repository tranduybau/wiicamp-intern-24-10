import React from "react";
import PropTypes from "prop-types";

import ViewAll from "../buttons/viewAll";
import Card from "../card";
import Rectangle from "../svg/rectangle";

function BestSelling(props) {
  const { bestSelling } = props;
  return (
    <div className="container">
      <div className="sm:flex items-end mb-[8.5rem] sm:mb-[2.5rem]">
        <div className="sm:flex h-[6.4375rem] flex-col items-start gap-[1.5rem]">
          <div className="flex items-center gap-[1rem]">
            <div className="w-[1.25rem] h-[2.5rem]">
              <Rectangle />
            </div>

            <span className="text-secondary-2 font-poppins text-[1rem] font-[600] leading-[1.25rem]">This Month</span>
          </div>

          <div className="text-text-2 font-inter text-[2.25rem] font-[600] leading-[3rem] tracking-[0.09rem] sm:whitespace-nowrap">
            Best Selling Products
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <ViewAll />

        <div className="grid grid-cols-12 sm:gap-[1.875rem]">
          {bestSelling.map((item) => {
            return (
              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3" key={item.title}>
                <Card product={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;

BestSelling.propTypes = {
  bestSelling: PropTypes.instanceOf(Array).isRequired,
};
