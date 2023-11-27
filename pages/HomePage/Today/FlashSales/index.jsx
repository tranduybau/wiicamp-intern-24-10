import React, { memo } from "react";

import UseCountDown from "../../../../components/UseCountDown";

function FlashSale() {
  const [days, hours, minutes, seconds] = UseCountDown();

  return (
    <div className=" lg:flex gap-[87px] sm:block items-center">
      <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl  tracking-[1.44px] leading-[48px]">
        Flash Sales
      </h2>
      <div className="flex lg:gap-3 gap-2 md:mt-0 mt-2">
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Days
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl flex justify-center">
            {days}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Hours
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {hours}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Minutes
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {minutes}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Seconds
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
}
export default memo(FlashSale);
