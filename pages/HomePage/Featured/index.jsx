import React, { memo } from "react";

import FlayStation from "./FlayStation";
import Perfume from "./Perfume";
import Speaker from "./Speaker";
import WomenCollection from "./WomanClection";

function Featured() {
  return (
    <div className="container mt-[140px]">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <p className="text-second-3 font-poppins text-base font-semibold not-italic">
          Featured
        </p>
      </div>
      <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-[60px] items-center mt-5 tracking-[1.44px] leading-[48px]">
        New Arrival
      </h2>
      <div className="sm:flex flex-row gap-[30px] block justify-center ">
        <div className="basis-1/2 bg-black">
          <FlayStation />
        </div>
        <div className="basis-1/2 flex-grow sm:mt-0 mt-8">
          <div className="bg-black text-text-1 mb-[32px] ">
            <WomenCollection />
          </div>
          <div className="text-text-1 flex-row flex gap-[30px] ">
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
