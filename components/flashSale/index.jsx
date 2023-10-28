import React from "react";
import PropTypes from "prop-types";

import ViewAllProducts from "../buttons/viewAllProduct";
import FlashSaleCarousel from "../carouselFlashSale";
import Dot from "../svg/dot";
import Rectangle from "../svg/rectangle";

function FlashSale(props) {
  const { products } = props;
  return (
    <>
      <div className="container mt-[8.75rem]">
        <div className="lg:flex grid grid-cols-12 items-end lg:gap-[5.4375rem] mb-[2.5rem]">
          <div className="lg:flex col-span-12 h-[6.4375rem] flex-col items-start gap-[1.5rem]">
            <div className="flex items-center gap-[1rem]">
              <div className="w-[1.25rem] h-[2.5rem]">
                <Rectangle />
              </div>

              <span className="text-secondary-2 font-poppins text-[1rem] font-[600] leading-[1.25rem]">
                Today’s
              </span>
            </div>

            <div className="text-text-2 font-inter text-[2.25rem] font-[600] leading-[3rem] tracking-[0.09rem] whitespace-nowrap">
              Flash Sales
            </div>
          </div>

          <div className="flex lg:flex mb-[4rem] sm:mb-0 col-span-12 w-[18.875rem] h-[3.125rem]">
            <div className="inline-flex h-[3.125rem] flex-col items-start gap-[0.25rem] flex-shrink-0">
              <span className="w-[1.9375rem] text-text-2 font-poppins text-[0.75rem] font-[500] leading-[1.125rem]">
                Days
              </span>

              <span className="w-[2.875rem] h-[1.75rem] flex-shrink-0 text-text-2 font-inter text-[2rem] font-[700] leading-[1.875rem] tracking-[0.08rem]">
                03
              </span>
            </div>

            <div className="inline-flex flex-col items-start gap-[0.5rem] mt-[1.63rem] ml-[1.06rem] mr-[1.06rem]">
              <Dot /> <Dot />
            </div>

            <div className="inline-flex w-[2.625rem] h-[3.125rem] flex-col items-start gap-[0.25rem] flex-shrink-0">
              <span className="w-[2.1875rem] text-text-2 font-poppins text-[0.75rem] font-[500] leading-[1.125rem]">
                Hours
              </span>

              <span className=" flex-shrink-0 text-text-2 font-inter text-[2rem] font-[700] leading-[1.875rem] tracking-[0.08rem]">
                23
              </span>
            </div>

            <div className="inline-flex flex-col items-start gap-[0.5rem] mt-[1.63rem] ml-[1.06rem] mr-[1.06rem]">
              <Dot /> <Dot />
            </div>

            <div className="inline-flex w-[2.625rem] h-[3.125rem] flex-col items-start gap-[0.25rem] flex-shrink-0">
              <span className="w-[3.0625rem] text-text-2 font-poppins text-[0.75rem] font-[500] leading-[1.125rem]">
                Minutes
              </span>

              <span className="w-[2.4375rem] h-[1.75rem] flex-shrink-0 text-text-2 font-inter text-[2rem] font-[700] leading-[1.875rem] tracking-[0.08rem]">
                19
              </span>
            </div>

            <div className="inline-flex flex-col items-start gap-[0.5rem] mt-[1.63rem] ml-[1.06rem] mr-[1.06rem]">
              <Dot /> <Dot />
            </div>

            <div className="inline-flex w-[2.625rem] h-[3.125rem] flex-col items-start gap-[0.25rem] flex-shrink-0">
              <span className="w-[3.25rem] text-text-2 font-poppins text-[0.75rem] font-[500] leading-[1.125rem]">
                Seconds
              </span>

              <span className="flex-shrink-0 text-text-2 font-inter text-[2rem] font-[700] leading-[1.875rem] tracking-[0.08rem]">
                56
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] pl-0 xl:pl-[4rem] 2xl:pl-[8.5rem] mx-auto">
        <FlashSaleCarousel products={products} />
      </div>

      <div className="text-center mt-[3.75rem]">
        <ViewAllProducts />
      </div>

      <div className="container mt-[3.75rem] mb-[4.38rem]">
        <hr className="border-1 border-solid border-black border-opacity-30" />
      </div>
    </>
  );
}

export default FlashSale;

FlashSale.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
