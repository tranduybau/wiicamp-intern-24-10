import React, { memo } from "react";

// eslint-disable-next-line react/prop-types
function ButtonWhite({ title, classCustom, link }) {
  return (
    <button
      type="button"
      onClick={link}
      className={`${classCustom} text-base font-poppins font-medium leading-6 text-text-2 border border-inherit border-solid md:px-[48px] px-[12px] py-[16px]`}
    >
      {title}
    </button>
  );
}
export default memo(ButtonWhite);
