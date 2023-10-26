import React, { memo } from "react";
import { Carousel } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import styles from "../../styles/sidebar.module.css";

const classNames = require("classnames");

function Sidebar() {
  const Category = [
    { name: "Electronics", href: "#" },
    { name: "Home & Lifestyle", href: "#" },
    { name: "Medicine", href: "#" },
    { name: "Sports & Outdoor", href: "#" },
    { name: "Baby’s & Toys", href: "#" },
    { name: "Groceries & Pets", href: "#" },
    { name: "Health & Beauty", href: "#" },
  ];
  return (
    <div className="flex bg-white container">
      <div className={classNames("w-60", styles.border)}>
        <ul
          className={classNames(
            "flex-none mt-14 font-poppins font-size text-text-2 shadow-sm ",
            styles.sidebar,
          )}
        >
          <li className="mb-4 flex w-full">
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
          </li>
          <li className="">
            {Category.map((item) => {
              return (
                <p key={`${item.name}`} className=" w-full mb-4">
                  <a
                    href={item.href}
                    className=" block mb-4 text-black  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </p>
              );
            })}
          </li>
        </ul>
      </div>
      <Carousel
        className="rounded-xl mt-14 ml-12 w-full"
        // start={0}
        // perView={1}
        // swipe
        // drag
      >
        <Image
          src="/img/sidle.png"
          alt="My Image"
          className="h-full w-full object-cover"
          width={892}
          height={600}
        />
        <Image
          src="/img/sidle.png"
          alt="My Image"
          className="h-full w-full object-cover"
          width={892}
          height={600}
        />
      </Carousel>
    </div>
  );
}
export default memo(Sidebar);
