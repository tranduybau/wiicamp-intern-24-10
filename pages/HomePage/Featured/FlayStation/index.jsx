import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

function FlayStation() {
  return (
    <div className="text-text-1 relative flex items-end pt-[26px]">
      <div className=" !absolute ml-[32px] max-w-[242px] mb-[32px]">
        <h1 className="font-inter text-2xl font-semibold leading-6">
          PlayStation 5
        </h1>
        <p className="mt-[16px] font-poppins text-sm font-normal leading-5">
          Black and White version of the PS5 coming out on sale.
        </p>
        <Link
          href="./"
          className="mt-[16px] font-poppins text-base font-medium underline leading-6"
        >
          Show now
        </Link>
      </div>
      <Image
        src="/img/playstation.png"
        alt="playstation"
        className="w-auto "
        width={600}
        height={700}
        priority
      />
    </div>
  );
}
export default memo(FlayStation);
