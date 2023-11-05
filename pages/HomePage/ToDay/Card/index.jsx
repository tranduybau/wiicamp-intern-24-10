// import swiper

import React, { memo, useRef } from "react";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Button from "../../../Button/ButtonCart";

import "swiper/css";

function CardSales() {
  const HandleAddCart = () => {
    // eslint-disable-next-line no-console
    console.log("Add to Cart");
  };

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

  //   const handleNext = useCallback(() => {
  //     swiperRef?.current?.swiper?.slideNext();
  //   }, []);

  return (
    <div className="flex mt-10 justify-center ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween="30px"
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
        }}
        ref={swiperRef}
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
                  <Button title="Add to cart" link={HandleAddCart} />
                  <div className="!absolute top-3 right-3">
                    <Heart className="rounded-full bg-white p-1.5" size={32} />
                    <Eye
                      className="rounded-full bg-white p-1.5 mt-2"
                      size={32}
                    />
                  </div>

                  <p className="!absolute top-3 left-3 bg-second-3  rounded font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                    -{item.discount}%
                  </p>
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
