import React, { memo } from "react";
import { useRouter } from "next/router";

import Button from "@/components/App/AppButtonContain";

function BestSelling() {
  const router = useRouter();
  const HandleViewAll = () => {
    router.push("/products");
  };
  return (
    <div className="mt-5 flex justify-between">
      <h1 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl  items-center tracking-[1.44px] leading-[48px]">
        Best Selling Products
      </h1>
      <Button
        classCustom="lg:px-12  px-4 py-[16px]"
        title="View All"
        link={HandleViewAll}
      />
    </div>
  );
}
export default memo(BestSelling);
