import React, { memo } from "react";
import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import classNames from "classnames";
import { Heart, Search, ShoppingCart } from "lucide-react";

import styles from "@/styles/navigation.module.css";

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <div className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12 ">
      <div className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12 mr-16">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins sm:flex sm:justify-center text-base underline hover:text-slate-500 text-text-2",
            styles.home,
          )}
        >
          <a href="http" className="flex items-center">
            Home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins sm:flex sm:justify-center text-base hover:text-slate-500 text-text-2",
            styles.contact,
          )}
        >
          <a href="http" className="flex items-center">
            Contact
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins sm:flex sm:justify-center text-base hover:text-slate-500 text-text-2",
            styles.about,
          )}
        >
          <a href="http" className="flex items-center">
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={classNames(
            "p-1 font-normal font-poppins sm:flex sm:justify-center text-base hover:text-slate-500 lg:mr-32 text-text-2",
            styles.signUp,
          )}
        >
          <a href="http" className="flex items-center">
            Sign Up
          </a>
        </Typography>
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
    <div className=" ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none  py-2 lg:px-8 lg:py-4 ">
        <div className="flex justify-between text-blue-gray-900 container">
          <Typography
            as="a"
            href="#"
            className={classNames(
              " font-inter  text-2xl font-bold text-text-2",
              styles.logo,
            )}
          >
            Exclusive
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden xl:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden flex text-center text-text-2"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            <div className="flex mr-6 text-text-2">
              <Heart size={32} />
              <ShoppingCart className="ml-6" size={32} />
            </div>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
export default memo(Navigation);
