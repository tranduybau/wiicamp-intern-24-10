import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import UseCountDown from "../../../components/UseCountDown";

function SaleTime() {
  const [days, hours, minutes, seconds] = UseCountDown();
  return (
    <div className="mt-[140px] container w-full bg-black lg:flex md:block px-14 py-[78.5px]">
      <div className="w-2/4 text-text-1 ">
        <p className="text-text-3 font-poppins text-base font-semibold mb-8 ">
          Categories
        </p>
        <p className="lg:text-5xl text-3xl font-semibold font-inter mr-7 leading-tight mb-8 max-w-[443px]">
          Enhance Your Music Experience
        </p>
        <div className="lg:flex md:block">
          <div className="flex gap-6">
            <div className="bg-white min-w-[62px] min-h-[62px] rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                {hours}
              </span>
              <span className="flex justify-center text-xs font-normal font-poppins">
                Hours
              </span>
            </div>
            <div className="bg-white min-w-[62px] min-h-[62px] rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                {days}
              </span>
              <span className="flex justify-center text-xs font-normal font-poppins">
                Day
              </span>
            </div>
          </div>
          <div className="flex gap-6 lg:ml-6 md:ml-0 lg:mt-0 mt-6">
            <div className="bg-white min-w-[62px] min-h-[62px] rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                {minutes}
              </span>
              <span className="flex justify-center text-xs font-normal font-poppins">
                Minutes
              </span>
            </div>
            <div className="bg-white min-w-[62px] min-h-[62px] rounded-full text-text-2 p-1">
              <span className="font-poppins font-semibold flex justify-center">
                {seconds}
              </span>
              <span className="flex justify-center text-xs font-normal font-poppins">
                Seconds
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 w-40 h-14 bg-green flex justify-center  items-center">
          <Link
            href="/buyNow"
            className=" text-text-1 text-base font-medium font-poppins"
          >
            Buy Now!
          </Link>
        </div>
      </div>

      <Image
        src="/img/radio.png"
        alt="radio"
        className="mt-[13px] max-h-[330px] lg:pt-0 pt-6"
        width={600}
        height={600}
        priority
      />
    </div>
  );
}
export default memo(SaleTime);
