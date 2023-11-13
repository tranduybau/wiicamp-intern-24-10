import React, { memo } from "react";
import Link from "next/link";

import Button from "@/components/App/Button/Contain";

function NotFound() {
  return (
    <div className="container mt-[80px] mb-[140px] lg:px-0 px-[16px]">
      <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5">
        <Link href="./" className="opacity-50">
          Home
        </Link>
        <p>/</p>
        <Link href="./NotFound" className="active:text-text-2">
          404 Error
        </Link>
      </div>
      <div className="md:mt-[140px] mt-[80px] flex flex-col  w-full">
        <span className="lg:text-[110px] sm:text-8xl text-4xl font-medium md:leading-[115px] tracking-[3.3px] flex justify-center">
          404 Not Found
        </span>
        <span className="md:mt-[40px] mt-[20px] font-poppins text-base font-normal leading-6 flex justify-center">
          Your visited page not found. You may go home page.
        </span>

        <p className="md:mt-[96px] mt-[20px] flex justify-center">
          <Button title="Back to home page" classCustom="px-[48px]" />
        </p>
      </div>
    </div>
  );
}
export default memo(NotFound);
