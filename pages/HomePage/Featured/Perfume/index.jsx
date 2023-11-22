import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

function Perfume() {
  return (
    <div className="text-text-1 flex relative items-end">
      <div className="absolute ml-[24px] mb-[13px]">
        <h1 className="font-inter text-2xl font-semibold leading-6">
          Speakers
        </h1>
        <p className="mt-[8px] font-poppins text-sm font-normal leading-5">
          Amazon wireless speakers
        </p>
        <Link
          href="./"
          className="mt-[8px] font-poppins text-base font-medium leading-6"
        >
          <p className="border-b border-inherit border-solid mt-[4px] max-w-[81px]">
            Show now
          </p>
        </Link>
      </div>
      <div className="mt-[38px] ml-[40px]">
        <Image
          src="/img/perfume.png"
          alt="playstation"
          // className="m-12 "
          className="w-full"
          width={400}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
export default memo(Perfume);
