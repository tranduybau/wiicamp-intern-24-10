// sidebar
import React, { memo } from "react";
import { AlignJustify, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import styles from "../../styles/navigation.module.css";

const classNames = require("classnames");

function Sidebar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handlerClose = () => {
    setOpenNav(false);
  };
  const Category = [
    {
      name: "Woman’s Fashion",
      href: "#",
      icon: <ChevronRight />,
    },
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

  const navList = (
    <div
      className={classNames(
        "border-r border-solid border-inherit ",
        styles.border,
      )}
    >
      <ul className="flex-none  font-poppins font-size text-text-2">
        <li>
          {Category.map((item) => {
            return (
              <p
                key={`${item.name}`}
                className={`w-full mb-4  ${
                  item.icon ? "flex justify-between " : ""
                }`}
              >
                <a
                  href={item.href}
                  className=" block text-black hover:text-slate-500 md:p-0 lg:w-96"
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
  );

  return (
    <div className="lg:flex block bg-white container relative lg:mt-14 mt-4">
      <div className="w-1/5">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex text-center text-text-2"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? "" : <AlignJustify />}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden drop-shadow-xl sm:block gap-12 !absolute bg-white left-0">
          <div className="pt-2 flex justify-end">
            <X onClick={handlerClose} className="cursor-pointer pb-2 " />
          </div>
          {navList}
        </div>
      )}

      <div className="ml-12 w-3/4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
        >
          {listSlider.map((item, index) => {
            return (
              <SwiperSlide key={item}>
                <Image
                  src={item.src}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                  priority
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
