// import swiper

import React, { memo, useRef } from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ArrowLeft from "@/components/Button/ArrowLeft";
import ArrowRight from "@/components/Button/ArrowRight";
import Button from "@/components/Button/ButtonCart";
import RatingDisplay from "@/components/Button/RatingDisplay";

import FlashSales from "../FlashSales";

import "swiper/css";

function CardSales({ products }) {
  const router = useRouter();
  const HandleAddCart = () => {
    router.push("/Cart");
  };

  const HandleAddWishList = () => {
    router.push("/WishList");
  };

  const HandleView = () => {
    router.push("/id");
  };
  const swiperRef = useRef();
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
  };

  return (
    <>
      <div className="flex mt-6 justify-between">
        <FlashSales />
        <div className="flex gap-2 items-center">
          <ArrowLeft HandlePrev={handlePrev} />
          <ArrowRight HandleNext={handleNext} />
        </div>
      </div>
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
          {products &&
            products.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="min-w-[270px] h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
                    <Link href="./product">
                      <Image
                        src={item.image}
                        alt={index}
                        width={160}
                        height={160}
                        priority
                        className="object-contain"
                      />
                    </Link>
                    <Button title="Add to cart" link={HandleAddCart} />
                    <div className="!absolute top-1 right-3 flex flex-col">
                      <button type="button" onClick={HandleAddWishList}>
                        <Heart
                          className="rounded-full bg-white p-1.5"
                          size={32}
                        />
                      </button>
                      <button type="button" onClick={HandleView}>
                        <Eye
                          className="rounded-full bg-white p-1.5 "
                          size={32}
                        />
                      </button>
                    </div>

                    <p className="!absolute top-3 left-3 bg-second-3  rounded font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                      -{item.discount}%
                    </p>
                  </div>
                  <div className="flex flex-col gap-[8px] mt-4">
                    <h3 className="text-base font-bold font-poppins text-text-2 truncate">
                      {item.title}
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
                        <RatingDisplay rate={item.rating.rate} />
                      </p>
                      <p className="font-medium opacity-50 font-poppins text-base">
                        ({item.rating.count})
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
export default memo(CardSales);

CardSales.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
