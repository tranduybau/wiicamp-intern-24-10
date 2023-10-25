import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// import Link from "next/link";
import banner1 from "@/assets/images/banner/banner1.jpg";

function Slider() {
  return (
    <div className="container flex items-center">
      <div className="mr-auto border-r-gray-400 border-r-[1px]">
        <ul className="text-black font-poppins pt-[2.5rem] text-[1rem] font-[400] leading[1.5rem] flex flex-col gap-[1rem]">
          <li className="flex gap-[3.19rem]">
            Woman’s Fashion
            <ChevronRight />
          </li>

          <li className="flex gap-[5.06rem]">
            Men’s Fashion
            <ChevronRight />
          </li>

          <li>Electronics</li>

          <li>Home & Lifestyle</li>

          <li>Medicine</li>

          <li>Sports & Outdoor</li>

          <li>Baby’s & Toys</li>

          <li>Groceries & Pets</li>

          <li>Health & Beauty</li>
        </ul>
      </div>

      <div className="pt-[2.5rem] pl-[2.81rem]">
        <div className="grid grid-cols-12 bg-black">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
            <Image width={892} height={344} src={banner1} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
