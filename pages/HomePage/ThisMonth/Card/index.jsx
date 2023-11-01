import React, { memo } from "react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardSales() {
  const listCard = [
    {
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current" size={20} />,
      review: "88",
    },
    {
      name: "AK-900 Wired Keyboard",
      discount: "35",
      price: "1160",
      img: "/img/toys.png",
      star: <Star className="fill-current" size={20} />,
      review: "75",
    },
    {
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/toys.png",
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
    <div className="mt-[60px] grid xl:grid-cols-4 lg:grid-cols-3 gap-[44px] sm:grid-cols-2 justify-center">
      {listCard.map((item, index) => {
        return (
          <div className=" " key={item}>
            <div className="bg-second-2 min-w-[270px]  min-h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
              <Link href="./product">
                <Image
                  src={item.img}
                  alt={index}
                  width={160}
                  height={160}
                  priority
                />
              </Link>

              <div className="!absolute h-10  text-text-1 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ">
                <button
                  type="submit"
                  className="bg-black text-white-0 py-2 px-5 min-w-[270px]"
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
            </div>

            <div className="gap-2 mt-4">
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