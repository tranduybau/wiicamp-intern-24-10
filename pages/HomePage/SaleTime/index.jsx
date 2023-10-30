import React, { memo } from "react";
// import { Button } from "@material-tailwind/react";
import Image from "next/image";

function SaleTime() {
  return (
    <div className="mt-32 container w-full bg-black lg:flex md:block px-14">
      <div className="w-2/4 text-text-1 mt-16">
        <p className="text-text-3 font-poppins text-base font-semibold mb-8 ">
          Categories
        </p>
        <p className="text-5xl font-semibold font-inter mr-7 leading-tight mb-8 w-3/5">
          Enhance Your Music Experience
        </p>
        <div className="lg:flex md:block">
          <div className="flex gap-6">
            <div className="bg-white w-14 h-14 rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                23
              </span>
              <p className="flex justify-center text-xs font-normal font-poppins">
                Hours
              </p>
            </div>
            <div className="bg-white w-14 h-14 rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                05
              </span>
              <p className="flex justify-center text-xs font-normal font-poppins">
                Days
              </p>
            </div>
          </div>
          <div className="flex gap-6 lg:ml-6 md:ml-0 lg:mt-0 mt-6">
            <div className="bg-white w-14 h-14 rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                59
              </span>
              <p className="flex justify-center text-xs font-normal font-poppins">
                Minutes
              </p>
            </div>
            <div className="bg-white w-14 h-14 rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                35
              </span>
              <p className="flex justify-center text-xs font-normal font-poppins">
                Seconds
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-40 h-14 bg-green flex justify-center  items-center">
          <a
            href="/buyNow"
            className=" text-text-1 text-base font-medium font-poppins"
          >
            Buy Now!
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/img/radio.png"
          alt="radio"
          className="my-20 "
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
}
export default memo(SaleTime);
