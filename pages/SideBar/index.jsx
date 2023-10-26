import React, { memo } from "react";
// import { Carousel } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import styles from "../../styles/sidebar.module.css";

const classNames = require("classnames");

function Sidebar() {
  const Category = [
    { name: "Woman’s Fashion", href: "#", icon: <ChevronRight /> },
    { name: "Men’s Fashion", href: "#", icon: <ChevronRight /> },
    { name: "Electronics", href: "#" },
    { name: "Home & Lifestyle", href: "#" },
    { name: "Medicine", href: "#" },
    { name: "Sports & Outdoor", href: "#" },
    { name: "Baby’s & Toys", href: "#" },
    { name: "Groceries & Pets", href: "#" },
    { name: "Health & Beauty", href: "#" },
  ];

  const listSlider = [
    { src: "/img/sidle.png" },
    { src: "/img/sidle.png" },
    { src: "/img/sidle.png" },
    { src: "/img/sidle.png" },
    { src: "/img/sidle.png" },
  ];
  return (
    <div className="flex bg-white container">
      <div className={styles.border}>
        <ul
          className={classNames(
            "flex-none mt-14 font-poppins font-size text-text-2 shadow-sm ",
            styles.sidebar,
          )}
        >
          {/* <li className="mb-4 flex w-full">
            <p className=" w-auto">Woman’s Fashion</p>

            <p className="flex justify-end w-full">
              <ChevronRight />
            </p>
          </li>
          <li className="mb-4 flex">
            Men’s Fashion
            <p className="flex justify-end w-full">
              <ChevronRight />
            </p>
          </li> */}
          <li>
            {Category.map((item) => {
              return (
                <p
                  key={`${item.name}`}
                  className={`w-full mb-4 ${
                    item.icon ? "flex justify-between" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className=" block text-black  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                  {item.icon && (
                    <span className="flex justify-end">{item.icon}</span>
                  )}
                </p>
              );
            })}
          </li>
        </ul>
      </div>
      <div className={classNames("mt-14 ml-12 ", styles.slider)}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          navigation
          //   pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {listSlider.map((item, index) => {
            return (
              <SwiperSlide key={item}>
                <Image
                  src={item.src}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                  width={892}
                  height={600}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default memo(Sidebar);