import React, { memo } from "react";
import { useRouter } from "next/router";

import Button from "../../../Button/ButtonRed";

function BestSelling() {
  const router = useRouter();
  const HandleViewAll = () => {
    router.push("/products");
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl  items-center tracking-[1.44px] leading-[48px]">
          Best Selling Products
        </h2>
        <Button
          classCustom="lg:px-12  px-4"
          title="View All"
          link={HandleViewAll}
        />
      </div>
    </div>
  );
}
export default memo(BestSelling);
