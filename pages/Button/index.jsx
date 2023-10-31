import React, { memo } from "react";
import Link from "next/link";

function Button() {
  return (
    // <div className="mt-14 pb-14 border-b border-inherit border-solid">
    <div className="flex justify-center">
      <p className="bg-second-3 lg:text-base text-xs font-poppins font-medium text-text-1 py-4 lg:px-12 px-4">
        <Link href="./product">View All Products</Link>
      </p>
    </div>
    // </div>
  );
}
export default memo(Button);
