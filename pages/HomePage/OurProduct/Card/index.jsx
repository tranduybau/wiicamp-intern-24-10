// no import swpier
import React, { memo } from "react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../../Button/ButtonCart";

function CardSales() {
  const HandleAddCart = () => {
    // eslint-disable-next-line no-console
    console.log("Add to Cart");
  };

  const listCard = [
    {
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      new: "NEW",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current" size={20} />,
      review: "88",
    },
    {
      name: "AK-900 Wired Keyboard",
      discount: "35",
      new: "NEW",
      price: "1160",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" size={20} />,
      review: "75",
    },
    {
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/toys.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
  ];

  return (
    <div className="mt-[60px] gap-[44px] grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 justify-center">
      {listCard.map((item, index) => {
        return (
          <div className="mb-[16px]" key={item}>
            <div className="bg-second-2 min-w-[270px]  min-h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
              <Link href="./product/id">
                <Image
                  src={item.img}
                  alt={index}
                  width={160}
                  height={160}
                  priority
                  className="object-contain"
                />
              </Link>
              <Button title=" Add to cart" link={HandleAddCart} />
              <div className="!absolute top-3 right-3">
                <Heart className="rounded-full bg-white p-1.5" size={32} />
                <Eye className="rounded-full bg-white p-1.5 mt-2" size={32} />
              </div>
              <div className="!absolute top-3 left-3">
                {item.new && (
                  <p className="bg-green rounded  font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                    {item.new}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] mt-4">
              <h3 className="text-base font-bold font-poppins text-text-2 ">
                {item.name}
              </h3>
              <div className="flex gap-2 text-base font-poppins font-medium ">
                <span className="text-second-3">
                  ${item.price - (item.price * item.discount * 1) / 100}
                </span>
                <span className="line-through font-medium opacity-50">
                  ${item.price}
                </span>
              </div>
              <div className="flex">
                <p className="text-second-4 flex mr-2">
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                </p>
                <p className="font-medium opacity-50 font-poppins text-base">
                  ({item.review})
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default memo(CardSales);
