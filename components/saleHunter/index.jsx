import React from "react";
import Image from "next/image";

function SaleHunter() {
  return (
    <div className="container mt-[8.75rem] flex justify-center items-center">
      <div className="grid grid-cols-12 bg-text-2 w-[73.125rem] h-[31.25rem]">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 flex items-center justify-center">
          a
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 flex items-center justify-center">
          <Image
            src="/assets/images/products/sound.png"
            alt="..."
            width={568}
            height={330}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default SaleHunter;
