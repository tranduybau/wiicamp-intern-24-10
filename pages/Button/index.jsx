import React, { memo } from "react";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
function Button({ classCustom, title }) {
  return (
    // <div className="mt-14 pb-14 border-b border-inherit border-solid">
    <div className="flex justify-center">
      <p
        className={`${classCustom} lg:py-4 py-2 bg-second-3 lg:text-base text-xs font-poppins font-medium text-text-1`}
      >
        <Link href="./">{title}</Link>
      </p>
    </div>
    // </div>
  );
}
export default memo(Button);
