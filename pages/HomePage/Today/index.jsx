import React, { memo } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Button from "@/components/App/Button/Contain";

import Card from "./Card/index";

function ToDay({ products }) {
  const router = useRouter();

  const HandleShowProduct = () => {
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
      <Card products={products} />
      <div className="mt-[60px] pb-[59px] border-b border-inherit border-solid flex justify-center">
        <Button
          classCustom="lg:px-12 px-4 py-[16px]"
          title="View All Product"
          link={HandleShowProduct}
        />
      </div>
    </div>
  );
}

export default memo(ToDay);

ToDay.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
