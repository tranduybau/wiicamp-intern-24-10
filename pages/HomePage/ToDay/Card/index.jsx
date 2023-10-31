// import swiper

import React, { memo, useRef } from "react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

function CardSales() {
  const listCard = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current " size={20} />,
      review: "88",
    },
    {
      id: "2",
      name: "AK-900 Wired Keyboard",
      discount: "35",
      price: "1160",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" size={20} />,
      review: "75",
    },
    {
      id: "3",
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      id: "4",
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      id: "5",
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/toys.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      id: "6",
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      id: "7",
      name: "IPSS-Series Comfort Chair",
      discount: "25",
      price: "400",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
  ];
  const swiperRef = useRef();
  return (
    <div className="flex mt-10 justify-center ">
      <Swiper
        spaceBetween="30px"
        slidesPerView="auto"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {listCard &&
          listCard.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="bg-second-2 min-w-[270px] min-h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center content">
                  <Link href="./product">
                    <Image
                      src={item.img}
                      alt={index}
                      width={160}
                      height={160}
                      priority
                      className="content"
                    />
                  </Link>

                  <div className="!absolute text-text-1 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ">
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
                  <div className="!absolute top-3 left-3">
                    <div className="bg-second-3 p-0.5 rounded ">
                      <p className="font-poppins text-xs font-normal py-1 px-3 text-text-1">
                        -{item.discount}%
                      </p>
                    </div>
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
                  <div className="flex  ">
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
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
export default memo(CardSales);
