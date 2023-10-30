import React, { memo } from "react";
import classNames from "classnames";
import { AlignJustify, Heart, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";

import styles from "@/styles/navigation.module.css";

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  const handlerClose = () => {
    setOpenNav(false);
  };

  const navList = (
    <div className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center xl:gap-20 lg:gap-16 md:gap-4">
      <div className="mt-2 mb-4 flex flex-col xl:gap-12 gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:mr-16 justify-center items-center">
        <p
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins md:block flex justify-center text-base underline hover:text-slate-500 text-text-2",
            styles.home,
          )}
        >
          <Link href="./" className="flex items-center">
            Home
          </Link>
        </p>
        <p
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins md:block flex justify-center text-base hover:text-slate-500 text-text-2",
            styles.contact,
          )}
        >
          <Link href="./Contact" className="flex items-center">
            Contact
          </Link>
        </p>
        <p
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins md:block flex justify-center text-base hover:text-slate-500 text-text-2",
            styles.about,
          )}
        >
          <Link href="./About" className="flex items-center">
            About
          </Link>
        </p>
        <p
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins md:block flex justify-center text-base hover:text-slate-500 xl:mr-32 lg:mr-10 text-text-2",
            styles.signUp,
          )}
        >
          <Link href="./SignUp" className="flex items-center">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="relative sm:flex sm:justify-center">
        <input
          type="search"
          id="default-search"
          className="block p-3 text-sm text-gray-900 bg-gray-50 w-[243px] "
          placeholder="What are you looking for?"
          required
        />
        <button
          type="submit"
          className="text-black absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg sm:absolute:none "
        >
          <Search />
        </button>
      </div>
    </div>
  );

  return (
    <div className="border-b border-inherit border-solid ">
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none  py-2 lg:px-8 lg:py-4 ">
        <div className="flex justify-between text-blue-gray-900 container">
          <Link
            href="./HomePage"
            className={classNames(
              " font-inter  text-2xl font-bold text-text-2",
              styles.logo,
            )}
          >
            Exclusive
          </Link>
          <div className="flex items-center xl:gap-4 lg:gap-1 order-3">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <button
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex text-center text-text-2"
              onClick={() => setOpenNav(!openNav)}
              type="button"
            >
              {openNav ? "" : <AlignJustify />}
            </button>
            <div className="flex text-text-2">
              <Heart className="ml-6 lg:ml-0" size={32} />
              <ShoppingCart className="ml-6" size={32} />
            </div>
          </div>
          {openNav && (
            <div
              className={classNames(
                "lg:hidden drop-shadow-xl sm:block gap-12",
                styles.menu_mobile,
              )}
            >
              <div className="flex justify-end">
                <X
                  onClick={handlerClose}
                  className="cursor-pointer mr-4 pt-2"
                />
              </div>
              {navList}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(Navigation);
