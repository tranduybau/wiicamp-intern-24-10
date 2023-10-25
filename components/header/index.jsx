import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import classNames from "classnames";
import { AlignJustify, XCircle } from "lucide-react";
import Link from "next/link";

import Cart from "@/components/svg/cart";
import Heath from "@/components/svg/heath";

function Header() {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <section className="bg-black font-poppins text-text-1 text-[0.875rem] leading-[1.3125rem] py-3">
        <div className="container grid grid-cols-12 gap-2">
          <div className="hidden lg:block col-span-2" />

          <div className="col-span-12 md:col-span-10: lg:col-span-8 md:flex items-center md:justify-start lg:justify-center text-center">
            <span className="mr-2">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>

            <Link className="font-[600] underline" href="./products">
              ShopNow
            </Link>
          </div>

          <div className="hidden col-span-2 lg:flex justify-end">
            <button
              className="flex items-center justify-between gap-1"
              type="button"
            >
              <span className="font-[400]">English</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <header className="sticky top-0 text-black bg-white border-b-gray-400 border-b-[1px]">
        <div className="container pt-[40px] pb-[15px] flex items-center">
          <div className="font-inter font-[700] text-[1.5rem] leading-[1.5rem] mr-auto">
            Exclusive
          </div>

          <div className="hidden lg:flex gap-[3rem] text-[1rem] font-[400] leading-[1.5rem]">
            <Link
              className="font-poppins border-b-gray-400 border-b-[2px]"
              href="./products"
            >
              Home
            </Link>

            <Link className="font-poppins" href="./products">
              Contact
            </Link>

            <Link className="font-poppins" href="./products">
              About
            </Link>

            <Link className="font-poppins" href="./products">
              Sign Up
            </Link>
          </div>

          <div className="hidden ml-auto md:flex">
            <form className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-10 w-full bg-secondary py-[0.3475rem] px-[0.75rem] pr-[2rem]"
              />

              <button type="submit" className="absolute top-2 right-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>

            <Link
              className="ml-[1.5rem] mr-[1rem] flex items-center"
              href="./products"
            >
              <Heath />
            </Link>

            <Link className="flex items-center" href="./products">
              <Cart />
            </Link>
          </div>

          <button
            onClick={openDrawerRight}
            className="lg:hidden ml-5"
            type="button"
          >
            <AlignJustify />
          </button>
        </div>

        <div
          className={classNames(
            "h-screen w-screen bg-opacity-50 z-[0] fixed top-0 backdrop-blur-sm",
            !openRight && "hidden",
          )}
        />

        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className={classNames(
            "h-screen w-screen m-0 p-0 fixed top-0 right-0",
            !openRight && "hidden",
          )}
        >
          <div className="h-screen">
            <button
              type="button"
              onClick={closeDrawerRight}
              className="w-full flex justify-end pt-3 pr-3"
            >
              <XCircle />
            </button>

            <div className="lg:hidden flex justify-center">
              <button
                className="px-2 py-1 rounded-lg bg-black text-text-1 flex items-center justify-between gap-1"
                type="button"
              >
                <span className="font-[400]">English</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div className="md:hidden ml-auto flex flex-col items-center">
              <form className="relative mt-5">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="h-10 w-full bg-secondary py-[0.3475rem] px-[0.75rem] pr-[2rem]"
                />

                <button type="submit" className="absolute top-2 right-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>
              <div className="flex mt-[2rem] gap-3">
                <Link className="flex items-center" href="./products">
                  <Heath />
                </Link>

                <Link className="flex items-center" href="./products">
                  <Cart />
                </Link>
              </div>
            </div>

            <div className="lg:hidden mt-[3rem] ml-[2rem] w-fit flex flex-col gap-[2rem] text-[1rem] font-[400] leading-[1.5rem]">
              <Link
                className="font-poppins w-fit border-b-gray-400 border-b-[2px]"
                href="./products"
              >
                Home
              </Link>

              <Link className="font-poppins w-fit" href="./products">
                Contact
              </Link>

              <Link className="font-poppins w-fit" href="./products">
                About
              </Link>

              <Link className="font-poppins w-fit" href="./products">
                Sign Up
              </Link>
            </div>
          </div>
        </Drawer>
      </header>
    </>
  );
}

export default Header;
