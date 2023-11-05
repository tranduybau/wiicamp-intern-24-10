import React, { memo } from "react";
import { useRouter } from "next/router";

import Button from "../../Button/ButtonRed";

import Card from "./Card";
import Explore from "./Explore";

function OurProduct() {
  const router = useRouter();
  const HandleShowProduct = () => {
    router.push("/product");
  };
  return (
    <div className="mt-[71px] container">
      <div className="flex gap-2 text-center items-center">
        <p className="w-5 h-10 bg-second-3 rounded " />
        <h3 className="text-second-3 font-poppins text-base font-semibold not-italic">
          Our Products
        </h3>
      </div>
      <Explore />
      <Card />

      <Button
        classCustom="lg:px-12  px-4 mt-[60px]"
        title="View All Products"
        link={HandleShowProduct}
      />
    </div>
  );
}
export default memo(OurProduct);
