import React, { memo } from "react";
import { useRouter } from "next/router";

import Button from "../../Button/ButtonRed";

import Card from "./Card/index";
import FlashSales from "./FlashSales";

function ToDay() {
  const router = useRouter();
  const HandleShowProduct = () => {
    // eslint-disable-next-line no-console
    router.push("/products");
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <h3 className="text-second-3 font-poppins text-base font-semibold not-italic">
          Today’s
        </h3>
      </div>
      <FlashSales />
      <Card />
      <div className="mt-[60px] pb-[59px] border-b border-inherit border-solid">
        <Button
          classCustom="lg:px-12 px-4"
          title="View All Product"
          link={HandleShowProduct}
        />
      </div>
    </div>
  );
}

export default memo(ToDay);
