import React, { memo, useRef } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

function Card() {
  const listCard = [
    {
      img: "/img/men.png",
      name: "Tom Cruise",
      position: " Founder & Chairman",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
    {
      img: "/img/woman.png",
      name: "Emma Watson",
      position: "Managing Director",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
    {
      img: "/img/man_designer.png",
      name: "Will Smith",
      position: "Product Designer",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
    {
      img: "/img/man_designer.png",
      name: "Will Smith",
      position: "Product Designer",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
    {
      img: "/img/man_designer.png",
      name: "Will Smith",
      position: "Product Designer",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
    {
      img: "/img/man_designer.png",
      name: "Will Smith",
      position: "Product Designer",
      iconTwitter: <Twitter size={24} />,
      iconInstagram: <Instagram size={24} />,
      iconLinkedIn: <Linkedin size={24} />,
    },
  ];
  const swiperRef = useRef();
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        ref={swiperRef}
        pagination={{
          clickable: true,
        }}
        className="swiper_banner"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {listCard &&
          listCard.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="lg:min-w-[370px] max-w-[370px]">
                  <div className="bg-second-2 flex justify-center rounded min-h-[430px]">
                    <Image
                      src={item.img}
                      alt={index}
                      width={236}
                      height={291}
                      priority
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-[32px] text-[32px] font-medium font-inter leading-[30px] tracking-[1.28px] text-text-2">
                    {item.name}
                  </p>
                  <p className="font-poppins text-base font-normal leading-6 mt-[8px]">
                    {item.position}
                  </p>
                  <div className="mt-[16px] flex gap-[16px]">
                    <Link href="https://www.twitter.com">
                      {item.iconTwitter}
                    </Link>
                    <Link href="https://www.instagram.com">
                      {item.iconInstagram}
                    </Link>
                    <Link href="https://www.instagram.com">
                      {item.iconLinkedIn}
                    </Link>
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
