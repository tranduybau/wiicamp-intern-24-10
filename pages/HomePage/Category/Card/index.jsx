import React, { memo, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Gamepad,
  Headphones,
  Laptop2,
  Smartphone,
  Watch,
} from "lucide-react";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ArrowIcon from "@/components/App/AppArrow";

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

  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
  };
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-[60px] items-center tracking-[1.44px] leading-[48px]">
          Browse By Category
        </h2>
        <div className="flex gap-2 items-center">
          <ArrowIcon
            Handle={handlePrev}
            icon={
              <ArrowLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
            }
          />
          <ArrowIcon
            Handle={handleNext}
            icon={
              <ArrowRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
            }
          />
        </div>
      </div>
      <div className="flex pb-[69px] border-b border-inherit border-solid">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          autoplay={{
            delay: 2000,
          }}
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {listCategory &&
            listCategory.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Link
                    href="./id"
                    className="min-w-[170px] min-h-[145px] border border-inherit border-solid rounded hover:bg-second-3 flex justify-center items-center "
                  >
                    <div>
                      <p className="mb-4 flex justify-center">{item.icon}</p>
                      <p className="text-base font-poppins font-normal text-text-2">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default memo(Card);
