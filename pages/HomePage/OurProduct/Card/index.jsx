// no import swpier
import React, { memo } from "react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";

function CardSales() {
  const listCard = [
    {
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      new: "new",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "88",
    },
    {
      name: "AK-900 Wired Keyboard",
      discount: "35",
      new: "new",
      price: "1160",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" />,
      review: "75",
    },
    {
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" />,
      review: "99",
    },
    {
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" />,
      review: "99",
    },
    {
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/toys.png",
      star: <Star className="fill-current" />,
      review: "99",
    },
  ];

  return (
    <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 gap-8 sm:grid-cols-2 justify-center">
      {listCard.map((item, index) => {
        return (
          <div className=" max-w-[26rem] gap-4 " key={item}>
            <div className="bg-second-2 w-72 h-64 shadow-none group relative inline-flex justify-center overflow-hidden items-center">
              <Image
                src={item.img}
                alt={index}
                // className="m-12 "
                width={160}
                height={160}
                priority
              />
              <div className="!absolute h-10  text-text-1 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ">
                <button
                  type="submit"
                  className="bg-black text-white-0 py-2 px-5 w-72"
                >
                  Add to cart
                </button>
              </div>
              <div className="!absolute top-3 right-3">
                <div className="rounded-full bg-white p-1.5">
                  <Heart />
                </div>
                <div className="rounded-full bg-white p-1.5 mt-2">
                  <Eye />
                </div>
              </div>
              <div className="!absolute top-3 left-3">
                {item.new && (
                  <div className="bg-green p-0.5 rounded ">
                    <p className="font-poppins text-xs font-normal py-1 px-3 text-text-1">
                      {item.new}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="gap-2 mt-4">
              <p className="text-base font-bold font-poppins text-text-2 ">
                {item.name}
              </p>
              <div className="flex gap-2 text-base font-poppins font-medium ">
                <span className="text-second-3">
                  ${item.price - (item.price * item.discount * 1) / 100}
                </span>
                <span className="line-through font-medium opacity-50">
                  ${item.price}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="text-second-4 flex">
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                </p>
                <p className="font-medium opacity-50 font-poppins text-base">
                  {item.review}
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
