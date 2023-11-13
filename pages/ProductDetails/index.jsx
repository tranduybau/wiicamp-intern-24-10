import React, { memo } from "react";
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/App/Button/Contain";

function ProductDetails() {
  const listImg = [
    {
      id: "1",
      img: "/img/img1.png",
    },
    {
      id: "2",
      img: "/img/img2.png",
    },
    {
      id: "3",
      img: "/img/img3.png",
    },
    {
      id: "4",
      img: "/img/img4.png",
    },
  ];

  return (
    <div className="container mt-[80px] mb-[140px] xl:px-0 px-[16px]">
      <div className="lg:flex block gap-[12px] font-poppins text-sm font-normal leading-5 ">
        <Link href="./" className="opacity-50">
          Home
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./" className="opacity-50">
          Gaming
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./Contact" className="active:text-text-2">
          Contact
        </Link>
      </div>
      <div className="lg:flex block mt-[80px] ">
        <div className="flex">
          <div className=" flex flex-col gap-[16px] ">
            {listImg &&
              listImg.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className=" md:min-w-[170px] md:min-h-[138px] max-w-[170px] max-h-[138px] bg-second-2 flex justify-center items-center"
                  >
                    <Image
                      src={item.img}
                      alt={index}
                      width={121}
                      height={141}
                      priority
                      className="object-contain "
                    />
                  </div>
                );
              })}
          </div>
          <div className="ml-[30px] md:min-w-[500px] md:min-h-[600px] max-w-[500px] max-h-[600px] bg-second-2 flex items-center justify-center">
            <Image
              src="/img/img5.png"
              alt="picture_center"
              width={446}
              height={315}
              priority
              className="object-contain mx-[27px]"
            />
          </div>
        </div>
        <div className="lg:ml-[71px] ml-0 flex flex-col gap-[40px] lg:mt-0 mt-[20px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <span className="font-inter text-2xl font-semibold leading-6 tracking-[0.72px]">
                Havic HV G-92 Gamepad
              </span>
              <div className="flex items-center font-poppins text-sm font-normal leading-[21px]">
                <Star />
                <span className=" opacity-50 ml-[8px]">(150 Reviews)</span>
                <span className="opacity-50 ml-[16px]">|</span>
                <span className="opacity-60 ml-[16px] text-text-3">
                  In Stock
                </span>
              </div>
              <span className="font-inter text-2xl font-normal leading-6 tracking-[0.72px]">
                $192.00
              </span>
            </div>
            <span className="font-poppins text-sm font-normal leading-[21px]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </span>
            <p className="border-b border-solid border-inherit " />
            <div className="flex gap-[24px]">
              <span className="font-inter text-xl font-normal leading-5 tracking-[0.6px]">
                Colours:
              </span>
              <div className="flex gap-[8px]">
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
            <div className="flex xl:gap-[24px] gap-[12px] items-center">
              <span className="font-inter text-xl font-normal leading-5 tracking-[0.6px]">
                Size:
              </span>
              <div className="flex xl:gap-[16px] gap-[8px]">
                <p className="border border-solid border-inherit  min-w-[32px] min-h-[32px] rounded flex justify-center items-center">
                  XS
                </p>
                <p className="border border-solid border-inherit  min-w-[32px] min-h-[32px] rounded flex justify-center items-center">
                  S
                </p>
                <p className="border border-solid border-inherit  min-w-[32px] min-h-[32px] rounded flex justify-center items-center">
                  M
                </p>
                <p className="border border-solid border-inherit  min-w-[32px] min-h-[32px] rounded flex justify-center items-center">
                  L
                </p>
                <p className="border border-solid border-inherit min-w-[32px] min-h-[32px] rounded flex justify-center items-center">
                  XL
                </p>
              </div>
            </div>
            <div className="flex">
              <p>aaa</p>
              <Button
                title="Buy Now"
                classCustom="px-[48px] ml-[16px] rounded py-[10px]"
              />
              <Link
                href="./WishList"
                className="rounded p-2 border ml-[19px] flex justify-center items-center w-[40px] h-[40px]"
              >
                <Heart size={32} />
              </Link>
            </div>
          </div>
          <div className="max-w-[399px] min-h-[180px] border rounded flex flex-col gap-[16px]">
            <div className="ml-[16px] mt-[24px] flex gap-[16px] items-center">
              <Truck size={40} />
              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-medium leading-6">
                  Free Delivery
                </span>
                <span className="font-poppins text-xs font-medium leading-[18px] underline">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <p className="border-b" />
            <div className="ml-[16px] flex gap-[16px]">
              <RefreshCcw size={40} />
              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-medium leading-6">
                  Return Delivery
                </span>
                <span className="font-poppins text-xs font-medium leading-[18px]">
                  Free 30 Days Delivery Returns.
                  <Link href="./Detail" className="underline ml-[2px]">
                    Details
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductDetails);
