// import swiper

import React, { memo, useRef } from "react";
import { toast } from "react-toastify";
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

import ArrowLeft from "@/components/App/Button/ArrowLeft";
import ArrowRight from "@/components/App/Button/ArrowRight";
import Button from "@/components/App/Button/ButtonCart";
import RatingDisplay from "@/components/App/Button/RatingDisplay";
import CurrencyFormatter from "@/components/FomatNumber";

import useCartStore from "@/Store/CartStore";

import FlashSales from "../FlashSales";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

function CardSales({ products }) {
  const { addToCart } = useCartStore();
  const router = useRouter();

  const handleAddCart = (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please log in!", 1.5);
      router.push("/Login");
      return;
    }
    try {
      addToCart(productId);
      toast.success("Add to cart successfully", 1.5);
    } catch (error) {
      toast.warning("Add to cart failed!!", 1.5);
    }
  };

  const HandleAddWishList = (id, title, price, image, rate, count) => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlists")) || [];

    const isProductInWishlist = existingWishlist.some((item) => {
      return item.id === id;
    });

    if (isProductInWishlist) {
      toast.error("The product already exists in the wishlist!", 1.5);
    } else {
      const productToAdd = {
        id,
        title,
        price,
        discount: 10,
        image,
        rating: {
          rate,
          count,
        },
      };
      existingWishlist.push(productToAdd);
      localStorage.setItem("wishlists", JSON.stringify(existingWishlist));

      toast.success("Add to wishlist successfully", 1.5);
    }
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
                  <div className="min-w-[270px] h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center ">
                    <Link href={`/${item.id}`} className="">
                      <Image
                        src={item.image}
                        alt={index}
                        width={160}
                        height={160}
                        priority
                        className="object-contain"
                      />
                    </Link>
                    <Button
                      title="Add to cart"
                      link={() => handleAddCart(item.id)}
                    />

                    <div className="!absolute top-1 right-3 flex flex-col">
                      <button
                        type="button"
                        id="heart"
                        aria-label="heart"
                        onClick={() =>
                          HandleAddWishList(
                            item.id,
                            item.title,
                            item.price,
                            item.image,
                            item.rating.rate,
                            item.rating.count,
                          )
                        }
                      >
                        <Heart
                          className="rounded-full bg-white p-1.5"
                          size={32}
                        />
                      </button>
                      <Link href={`/${item.id}`} aria-label="view">
                        <Eye
                          className="rounded-full bg-white p-1.5 "
                          size={32}
                        />
                      </Link>
                    </div>

                    <span className="!absolute top-3 left-3 bg-second-3  rounded font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                      -{item.discount}%
                    </span>
                  </div>
                  <div className="flex flex-col gap-[8px] mt-4">
                    <h3 className="text-base font-bold font-poppins text-text-2 truncate">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 text-base font-poppins font-medium ">
                      <span className="text-second-3">
                        <CurrencyFormatter
                          amount={
                            item.price - (item.price * item.discount * 1) / 100
                          }
                        />
                      </span>
                      <span className="line-through font-medium opacity-50">
                        <CurrencyFormatter amount={item.price} />
                      </span>
                    </div>
                    <div className="flex  ">
                      <span className="text-second-4 flex mr-2">
                        <RatingDisplay rate={item.rating.rate} />
                      </span>
                      <span className="font-medium opacity-50 font-poppins text-base">
                        ({item.rating.count})
                      </span>
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
