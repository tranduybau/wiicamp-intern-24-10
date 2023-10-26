import React, { useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "@/assets/images/banner/banner1.jpg";
import data from "@/data/categories.json";

import "swiper/css";

function Banner() {
  const swiperBanner = useRef();

  const handleMouseEnter = useCallback(() => {
    swiperBanner?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperBanner?.current?.swiper?.autoplay?.start();
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Multi Carousel FlashSale */}
      <Swiper
        ref={swiperBanner}
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        // loopedSlidesLimit={false}
        // loopedSlides={1}
        modules={[Autoplay, Pagination]}
        className="swiper_banner"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.name}>
              <div className="relative">
                <Image
                  width={892}
                  height={344}
                  src={banner1}
                  alt="..."
                  priority
                />

                <Link
                  href="./"
                  className="absolute left-[4.19rem] bottom-[3.19rem] inline-flex items-center gap-[0.5rem] text-text-1"
                >
                  <span className="mb-[0.5rem] text-text-1 text-center text-[1rem] font-[500] leading-[1.5rem] border-b-white border-b-[0.1rem]">
                    Shop Now
                  </span>

                  <ArrowRight />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Banner;
