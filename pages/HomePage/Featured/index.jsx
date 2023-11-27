import React, { memo } from "react";

import FlayStation from "./FlayStation";
import Perfume from "./Perfume";
import Speaker from "./Speaker";
import WomenCollection from "./WomanClection";

function Featured() {
  return (
    <div className="container lg:mt-[140px] mt-[60px]">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Featured
        </p>
      </div>
      <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl lg:mb-[60px] mb-[40px] items-center mt-5 tracking-[1.44px] leading-[48px]">
        New Arrival
      </h2>
      <div className="lg:flex flex-row lg:gap-[30px] gap-[15px] block justify-center lg:px-0 xl:px-0 sm:px-[80px] px-0">
        <div className="basis-1/2 bg-black">
          <FlayStation />
        </div>
        <div className="basis-1/2 flex-grow lg:mt-0 mt-[15px] ">
          <div className="bg-black text-text-1 lg:mb-[32px] mb-[15px]">
            <WomenCollection />
          </div>
          <div className="text-text-1 flex-row flex lg:gap-[30px] gap-[15px]">
            <div className="basis-1/2 bg-black">
              <Speaker />
            </div>
            <div className="basis-1/2 bg-black">
              <Perfume />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Featured);
