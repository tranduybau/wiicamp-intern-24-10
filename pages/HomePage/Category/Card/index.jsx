import React, { memo, useRef } from "react";
import {
  Camera,
  Gamepad,
  Headphones,
  Laptop2,
  Smartphone,
  Watch,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

function Card() {
  const listCategory = [
    {
      id: "1",
      name: "Phones",
      icon: <Smartphone />,
    },
    {
      id: "2",
      name: "Computers",
      icon: <Laptop2 />,
    },
    {
      id: "3",
      name: "SmartWatch",
      icon: <Watch />,
    },
    {
      id: "4",
      name: "Camera",
      icon: <Camera />,
    },
    {
      id: "5",
      name: "HeadPhones",
      icon: <Headphones />,
    },
    {
      id: "6",
      name: "Gaming",
      icon: <Gamepad />,
    },
    {
      id: "7",
      name: "Camera",
      icon: <Camera />,
    },
    {
      id: "8",
      name: "HeadPhones",
      icon: <Headphones />,
    },
    {
      id: "9",
      name: "Gaming",
      icon: <Gamepad />,
    },
  ];
  const swiperRef = useRef();
  return (
    <div className="flex gap-8 pb-14 border-b border-inherit border-solid ">
      <Swiper
        spaceBetween={30}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {listCategory &&
          listCategory.map((item) => {
            return (
              <SwiperSlide key={item}>
                <div
                  className="w-44 h-36 border border-inherit border-solid rounded hover:bg-second-3 flex justify-center items-center"
                  key={item}
                >
                  <div>
                    <p className="mb-4 flex justify-center">{item.icon}</p>
                    <p className="text-base font-poppins font-normal text-text-2">
                      {item.name}
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

export default memo(Card);
