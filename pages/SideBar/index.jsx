// sidebar
import React, { memo } from "react";
import { AlignJustify, ArrowRight, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

function Sidebar() {
  const router = useRouter();
  const [openNav, setOpenNav] = React.useState(false);

  const handlerClose = () => {
    setOpenNav(false);
  };

  const handleShopNow = () => {
    router.push("/");
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

  const ListMen = [
    {
      id: "1",
      name: "Men’s Fashion 1",
    },
    {
      id: "2",
      name: "Men’s Fashion 1",
    },
  ];

  const [isShowWoMen, setIsShowWoMen] = React.useState(false);
  const handleSelectWomen = () => {
    setIsShowWoMen(!isShowWoMen);
  };

  const [isShowMen, setIsShowMen] = React.useState(false);
  const handleSelectMen = () => {
    setIsShowMen(!isShowMen);
  };

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
      icon: (
        <ChevronRight className="cursor-pointer" onClick={handleSelectMen} />
      ),
    },
    { name: "Electronics", href: "#" },
    { name: "Home & Lifestyle", href: "#" },
    { name: "Medicine", href: "#" },
    { name: "Sports & Outdoor", href: "#" },
    { name: "Baby’s & Toys", href: "#" },
    { name: "Groceries & Pets", href: "#" },
    { name: "Health & Beauty", href: "#" },
  ];

  const Slide = (
    <div className="bg-black  max-h-[344px] max-w-[892px] object-cover flex gap-[38px]">
      <div className="min-w-[294px] text-text-1 ml-[64px] mt-[58px]">
        <div className="flex gap-[24px] items-center">
          <Image
            src="/img/apple.png"
            alt="apple"
            className=" object-cover"
            width={40}
            height={49}
            priority
          />
          <span className="font-poppins text-base font-normal leading-6">
            iPhone 14 Series
          </span>
        </div>
        <span className="mt-[20px] font-inter text-5xl font-semibold leading-[60px] tracking-[1.92px] w-[294px]">
          Up to 10% off Voucher
        </span>
        <button
          type="button"
          className="mt-[22px] flex gap-[8px]"
          onClick={handleShopNow}
        >
          <p className="pb-[4px] border-b border-inherit border-solid font-poppins text-base font-medium leading-6">
            Shop now
          </p>
          <ArrowRight />
        </button>
      </div>

      <Image
        src="/img/iphone.png"
        alt="iphone"
        className="h-[344px]  sm:w-full  object-cover"
        width={600}
        height={700}
        priority
      />
    </div>
  );

  const listSlider = [
    {
      src: Slide,
    },
    {
      src: Slide,
    },
    {
      src: Slide,
    },
    {
      src: Slide,
    },
  ];

  const navList = (
    <ul className="flex-none  font-poppins font-size text-text-2">
      <li>
        {Category &&
          Category.map((item, index) => {
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
                  {item.icon && index === 0 && (
                    <div className="flex justify-end relative">
                      {item.icon}
                      <div
                        className={`bg-white min-h-[200px] min-w-[160px] drop-shadow absolute ${
                          isShowWoMen ? "block top-0 left-full z-40" : "hidden"
                        }`}
                      >
                        {ListWomen &&
                          ListWomen.map((item1) => {
                            return (
                              <div key={item1.id}>
                                <Link href="./">{item1.name}</Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  {item.icon && index === 1 && (
                    <div className="flex justify-end relative">
                      {item.icon}
                      <div
                        className={`bg-white min-h-[200px] min-w-[160px] drop-shadow absolute ${
                          isShowMen ? "block top-0 left-full z-40" : "hidden"
                        }`}
                      >
                        {ListMen &&
                          ListMen.map((item1) => {
                            return (
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
        <div className="lg:hidden drop-shadow-xl sm:block gap-12 !absolute bg-white left-0 z-40 min-w-[217px]">
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
          pagination={{
            clickable: true,
          }}
          className="swiper_banner"
        >
          {listSlider.map((item) => {
            return (
              <SwiperSlide key={item}>
                <div className="object-cover h-[344px] sm:w-full">
                  {item.src}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default memo(Sidebar);
