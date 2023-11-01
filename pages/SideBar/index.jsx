// sidebar
import React, { memo } from "react";
import { AlignJustify, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

function Sidebar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handlerClose = () => {
    setOpenNav(false);
  };

  const ListWomen = [
    {
      id: "1",
      name: "Woman’s Fashion 1",
    },
    {
      id: "2",
      name: "Woman’s Fashion 2",
    },
  ];

  const handleSelectWomen = () => {
    // eslint-disable-next-line no-console
    console.log("aaa");
    return (
      <div className="relative">
        <div className="absolute bg-black min-w-[160px] drop-shadow">
          {ListWomen &&
            ListWomen.map((item) => {
              return (
                <div key={item.id} className=" hidden">
                  <Link href="./">{item.name}</Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  //   const [isShowMen, setIsShowMen] = React.useState(false);

  const Category = [
    {
      name: "Woman’s Fashion",
      href: "#",
      icon: (
        <ChevronRight onClick={handleSelectWomen} className="cursor-pointer" />
      ),
    },
    {
      name: "Men’s Fashion",
      href: "#",
      icon: <ChevronRight className="cursor-pointer" />,
    },
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
    <ul className="flex-none  font-poppins font-size text-text-2">
      <li>
        {Category &&
          Category.map((item) => {
            return (
              <div key={`${item.name}`} className="w-full mb-4">
                <div
                  className={` ${
                    item.icon ? "flex justify-between " : "w-full "
                  }`}
                >
                  <a
                    href={item.href}
                    className=" block text-black hover:text-second-3 md:p-0 "
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                  {item.icon && (
                    <div className="flex justify-end">
                      {item.icon}
                      <div className="bg-white min-w-[160px] drop-shadow">
                        {ListWomen &&
                          ListWomen.map((item1) => {
                            return (
                              // className=" hidden"
                              <div key={item1.id}>
                                <Link href="./">{item1.name}</Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
                <div />
              </div>
            );
          })}
      </li>
    </ul>
  );

  return (
    <div className="lg:flex block bg-white container relative ">
      <div className="w-[217px] lg:border-r lg:border-solid border-inherit lg:pt-10 border-none">
        <div className="hidden lg:block">{navList}</div>
        <button
          className="ml-auto text-inherit hover:text-second-3 lg:hidden flex text-center text-text-2"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? "" : <AlignJustify size={32} />}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden drop-shadow-xl sm:block gap-12 !absolute bg-white left-0 z-40 w-[217px]">
          <div className="pt-2 flex justify-end">
            <X onClick={handlerClose} className="cursor-pointer" />
          </div>
          {navList}
        </div>
      )}

      <div className="lg:ml-[45px] ml-0 sm:max-w-[913px] w-full pt-10">
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
                  className="h-[344px] sm:w-full  object-cover"
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
