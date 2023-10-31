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
    <div className={classNames("", styles.border)}>
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
    <div className="lg:flex block bg-white container relative ">
      <div className="w-[217px] lg:border-r  lg:border-solid border-inherit lg:pt-10 border-none">
        <div className="mr-4 hidden lg:block z-">{navList}</div>
        <button
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex text-center text-text-2"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? "" : <AlignJustify size={32} />}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden drop-shadow-xl sm:block gap-12 !absolute bg-white left-0 z-40">
          <div className="pt-2 flex justify-end">
            <X onClick={handlerClose} className="cursor-pointer pb-2 " />
          </div>
          {navList}
        </div>
      )}

      <div className="lg:ml-[45px] ml-0 min-w-[898px]  pt-10">
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
                  className="h-[344px] w-full object-cover"
                  width={600}
                  height={700}
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
