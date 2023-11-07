import React, { memo } from "react";
import {
  BadgeDollarSign,
  CircleDollarSign,
  ShoppingBag,
  Store,
} from "lucide-react";

// import Link from "next/link";
import Item from "./Item";

function Statistics() {
  const listCart = [
    {
      id: "1",
      icon: <Store />,
      total: "10.5k",
      name: "Sallers active our site",
    },
    {
      id: "2",
      icon: <CircleDollarSign />,
      total: "33k",
      name: "Mopnthly Produduct Sale",
    },
    {
      id: "3",
      icon: <ShoppingBag />,
      total: "45.5k",
      name: "Customer active in our site",
    },
    {
      id: "4",
      icon: <BadgeDollarSign />,
      total: "33k",
      name: "Mopnthly Produduct Sale",
    },
  ];
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-[30px]">
      {listCart &&
        listCart.map((item) => {
          return (
            <div key={item.id}>
              <Item
                classCustom="border border-solid border-inherit max-w-[270px] py-[30px] rounded hover:bg-second-3 hover:text-text-1"
                title={item.total}
                icon={item.icon}
                name={item.name}
              />
            </div>
          );
        })}
    </div>
  );
}
export default memo(Statistics);
