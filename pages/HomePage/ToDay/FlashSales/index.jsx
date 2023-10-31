import React, { memo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function FlashSale() {
  const [numberState, setNumberState] = useState(0);
  const PlusPercent = () => {
    setNumberState(numberState + 1);
  };
  const PlusPercent1 = () => {
    setNumberState(numberState - 1);
  };
  return (
    <div className="flex mt-6 justify-between">
      <div className=" lg:flex gap-[87px] sm:block">
        <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl items-center">
          Flash Sales
        </h2>
        <div className="flex lg:gap-3 gap-2 md:mt-0 mt-2">
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Days
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 text-base flex justify-center">
              03
            </p>
          </div>
          <div className="flex text-button-3 font-bold items-center">:</div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Hours
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
              23
            </p>
          </div>
          <div className="flex text-button-3 font-bold items-center">:</div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Minutes
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
              19
            </p>
          </div>
          <div className="flex text-button-3 font-bold items-center">:</div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Seconds
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
              56
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="relative  bg-second-2 rounded-full">
          <ArrowLeft
            size={32}
            onClick={PlusPercent}
            disabled={numberState >= 7}
          />
        </div>
        <div className="relative bg-second-2 rounded-full">
          <ArrowRight
            size={32}
            onClick={PlusPercent1}
            disabled={numberState <= 0}
          />
        </div>
        <h1>{numberState}</h1>
      </div>
    </div>
  );
}
export default memo(FlashSale);
