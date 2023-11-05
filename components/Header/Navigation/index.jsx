import React, { memo } from "react";
import classNames from "classnames";
import {
  AlignJustify,
  Heart,
  LogOut,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
  X,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import styles from "@/styles/navigation.module.css";

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);
  //   const [isLogin, setIsLogin] = React.useState(false);

  //   React.useEffect(() => {
  //     const token = localStorage.getItem("token");

  //     if (token) {
  //       setIsLogin(true);
  //     }
  //   }, []);

  const [isShowAccount, setIsShowAccount] = React.useState(false);
  const HandleDropAccount = () => {
    setIsShowAccount(!isShowAccount);
  };
  const handlerClose = () => {
    setOpenNav(false);
  };

  const navList = (
    <div className="mt-2 flex flex-col lg:mt-0 lg:flex-row lg:items-center ">
      <ul className="mt-2 mb-4 flex flex-col gap-12  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  justify-center items-center">
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base underline hover:text-second-3 text-text-2 leading-6",
            styles.home,
          )}
        >
          <Link href="./" className="flex items-center">
            Home
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base hover:text-second-3 text-text-2 leading-6",
            styles.contact,
          )}
        >
          <Link href="./Contact" className="flex items-center">
            Contact
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base hover:text-second-3 text-text-2 leading-6",
            styles.about,
          )}
        >
          <Link href="./About" className="flex items-center">
            About
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base hover:text-second-3 text-text-2 leading-6",
            styles.signUp,
          )}
        >
          <Link href="./SignUp" className="flex items-center">
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="relative lg:flex sm:justify-center lg:ml-[148px]">
        <input
          type="search"
          id="default-search"
          className="block p-2 text-sm text-text-2 bg-gray-50 w-[243px] "
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

  const listAccount = [
    {
      id: "1",
      icon: <User size={24} />,
      name: "Manage My Account",
      link: "./",
    },
    {
      id: "2",
      icon: <ShoppingBag size={24} />,
      name: "My Order",
      link: "./",
    },
    {
      id: "3",
      icon: <XCircle size={24} />,
      name: "My Cancellations",
      link: "./",
    },
    {
      id: "4",
      icon: <Star size={24} />,
      name: "My Reviews",
      link: "./",
    },
    {
      id: "5",
      icon: <LogOut size={24} />,
      name: "Logout",
      link: "./",
    },
  ];

  return (
    <div className="border-b border-inherit border-solid ">
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none pt-10 pb-4">
        <div className="flex justify-between container">
          <Link
            href="./"
            className={classNames(
              " font-inter text-2xl font-bold text-text-2 leading-6 tracking-wider ",
              styles.logo,
            )}
          >
            Exclusive
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:block">{navList}</div>
            <button
              className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex text-center text-text-2"
              onClick={() => setOpenNav(!openNav)}
              type="button"
            >
              {openNav ? "" : <AlignJustify size={32} />}
            </button>
            <div className="flex text-text-2 gap-[16px]">
              {/* {isLogin ? (
                <>
                  <Link href="./WishList">
                    <Heart className="ml-6" size={32} />
                  </Link>
                  <Link href="./Cart">
                    <ShoppingCart size={32} />
                  </Link>
                </>
              ) : (
                <> */}
              <Link href="./WishList">
                <Heart className="ml-6" size={32} />
              </Link>
              <Link href="./Cart">
                <ShoppingCart size={32} />
              </Link>
              <div className="relative inline-block">
                <button
                  type="button"
                  className=" hover:bg-second-3 hover:text-text-1 rounded-full"
                  onClick={HandleDropAccount}
                >
                  <User size={32} className="hover:p-1" />
                </button>
                <div
                  id="myDropdown"
                  className={classNames(
                    "absolute text-text-1 min-w-[224px]",
                    isShowAccount ? "block right-0" : "hidden",
                    styles.background,
                  )}
                >
                  <div className="pt-[18px] pr-[12px] pb-[10px] pl-[20px] flex flex-col gap-[13px] ">
                    {listAccount &&
                      listAccount.map((item) => {
                        return (
                          <a
                            className="flex gap-[16px] items-center"
                            key={item.id}
                            href={item.link}
                          >
                            <p>{item.icon}</p>
                            <p className="font-poppins text-sm font-normal leading-5">
                              {item.name}
                            </p>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* </>
              )} */}
            </div>
          </div>
          {openNav && (
            <div
              className={classNames(
                "lg:hidden sm:block gap-12 h-screen  bg-opacity-50 fixed top-0 drop-shadow-2xl",
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
