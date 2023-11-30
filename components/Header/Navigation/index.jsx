import React, { memo, useRef } from "react";
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
import { useRouter } from "next/router";

import useCartStore from "@/Store/CartStore";
import useSearch from "@/Store/SearchBar";
import styles from "@/styles/navigation.module.css";

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [isShowAccount, setIsShowAccount] = React.useState(false);
  // const [currentPage, setCurrentPage] = React.useState(false);
  const { getCartItems } = useCartStore();
  const cartItems = getCartItems();

  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, [router]);

  const dropdownRef = useRef(null);

  const handlerClose = () => {
    setOpenNav(openNav);
  };

  const HandleDropAccount = () => {
    setIsShowAccount(!isShowAccount);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenNav(false);
      setIsShowAccount(false);
    }
  };

  // click outside close
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      handleClickOutside(e);
    };
    document.addEventListener("mousedown", handleDocumentClick);
  }, []);

  const keyword = useSearch((state) => state.keyword);
  const setKeyword = useSearch((state) => state.setKeyword);
  const clearKeyword = useSearch((state) => state.clearKeyword);

  // search
  React.useEffect(() => {
    const isSearchPage = router.pathname === "/SearchProduct";
    if (isSearchPage) {
      setKeyword(router.query.q || "");
    } else {
      clearKeyword();
    }
  }, [router.pathname, router.query.q, setKeyword, clearKeyword]);

  const onSearch = () => {
    const encodeSearchQuery = encodeURI(keyword);
    router.push(`/SearchProduct?q=${encodeSearchQuery}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);

    router.push("/");
  };

  const navList = (
    <div className="mt-2 flex flex-col lg:mt-0 lg:flex-row lg:items-center ">
      <ul className="mt-2 mb-4 flex flex-col gap-12  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  justify-center items-center">
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base  text-text-2 leading-6 ",
          )}
        >
          <Link
            href="/"
            className={`flex items-center ${
              router.pathname === "/"
                ? "border-b-2 border-solid border-inherit"
                : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base text-text-2 leading-6",
          )}
        >
          <Link
            href="/Contact"
            className={`flex items-center ${
              router.pathname === "/Contact"
                ? "border-b-2 border-solid border-inherit"
                : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base  text-text-2 leading-6",
          )}
        >
          <Link
            href="/About"
            className={`flex items-center ${
              router.pathname === "/About"
                ? "border-b-2 border-solid border-inherit"
                : ""
            }`}
          >
            About
          </Link>
        </li>
        <li
          color="blue-gray"
          className={classNames(
            "font-normal font-poppins md:block flex justify-center text-base  text-text-2 leading-6",
          )}
        >
          <Link
            href="/SignUp"
            className={`flex items-center ${
              router.pathname === "/SignUp"
                ? "border-b-2 border-solid border-inherit"
                : ""
            }`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="relative lg:flex sm:justify-center lg:ml-[148px]">
        <input
          id="search"
          className="block p-2 text-sm text-text-2 bg-gray-50 w-[243px]"
          placeholder="What are you looking for?"
          required
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          id="search"
          aria-label="search"
          onClick={onSearch}
          className="text-black absolute right-2.5 lg:bottom-2.5 bottom-0.5  rounded-lg sm:absolute:none truncate"
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
      link: "./Account",
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
      onClick: handleLogout,
    },
  ];

  return (
    <div className="border-b border-inherit border-solid ">
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none pt-10 pb-4">
        <div className="flex justify-between container">
          <Link
            href="/"
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
              {openNav ? (
                ""
              ) : (
                <AlignJustify className=" md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
              )}
            </button>
            <div className="flex text-text-2 gap-[16px]">
              {isLogin ? (
                <>
                  <Link href="/WishList" aria-label="wishlist">
                    <Heart className="ml-6 hover:bg-second-3 hover:text-text-1 rounded-full hover:p-1 md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                  </Link>
                  <Link href="/Cart" aria-label="cart">
                    <div className="relative">
                      <ShoppingCart className="hover:bg-second-3 hover:text-text-1 hover:rounded-full hover:p-1  md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                      {cartItems.length >= 0 && (
                        <span className="top-[-8px] right-[-6px] absolute rounded-full bg-second-3 text-text-1  font-poppins text-xs font-normal leading-[18px] shrink-0 w-[20px] h-[20px] flex justify-center">
                          {cartItems.length}
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="relative inline-block " ref={dropdownRef}>
                    <button
                      type="button"
                      id="user"
                      aria-label="user"
                      className=" hover:bg-second-3 hover:text-text-1 rounded-full"
                      onClick={HandleDropAccount}
                    >
                      <User className="hover:p-1  md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
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
                                onClick={item.onClick}
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
                </>
              ) : (
                <>
                  <Link href="/WishList" aria-label="wishlist">
                    <Heart className="ml-6 hover:bg-second-3 hover:text-text-1 rounded-full hover:p-1 md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                  </Link>
                  <Link href="/Cart" aria-label="cart">
                    <ShoppingCart className=" hover:bg-second-3 hover:text-text-1 hover:rounded-full hover:p-1  md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                  </Link>
                </>
              )}
            </div>
          </div>
          {openNav && (
            <div
              className={classNames(
                "lg:hidden sm:block gap-12 h-screen  bg-opacity-50 fixed top-0 drop-shadow-2xl",
                styles.menu_mobile,
              )}
              ref={dropdownRef}
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
