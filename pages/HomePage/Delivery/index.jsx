import React, { memo } from "react";
import { Headphones, Truck } from "lucide-react";

function Delivery() {
  return (
    <div className="mt-[140px] gap-[88px] container lg:flex sm:block justify-between :px-[122px]">
      <div className="">
        <div className="flex justify-center ">
          <div className="bg-slate-300 p-2 rounded-full mb-6">
            <p className="bg-black p-4 rounded-full">
              <Truck className="w-8 h-8  text-text-1 " />
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-text-2 font-poppins font-semibold text-xl not-italic mb-2 items-center flex justify-center">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppins font-normal items-center flex justify-center text-sm">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center lg:mt-0 sm:mt-4">
          <div className="bg-slate-300 p-2 rounded-full mb-6">
            <p className="bg-black p-4 rounded-full">
              <Headphones className="w-8 h-8  text-text-1 " />
            </p>
          </div>
        </div>
        <div>
          <p className="text-text-2 font-poppins font-semibold text-xl not-italic mb-2 items-center flex justify-center">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="font-poppins font-normal items-center flex justify-center text-sm">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center ">
          <div className="bg-slate-300 p-2 rounded-full mb-6">
            <p className="bg-black p-4 rounded-full">
              <Truck className="w-8 h-8  text-text-1 " />
            </p>
          </div>
        </div>
        <div>
          <p className="text-text-2 font-poppins font-semibold text-xl not-italic mb-2 items-center flex justify-center">
            MONEY BACK GUARANTEE
          </p>
          <p className="font-poppins font-normal items-center flex justify-center text-sm">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
export default memo(Delivery);
