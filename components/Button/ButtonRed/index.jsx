import React, { memo } from "react";

// eslint-disable-next-line react/prop-types
function Button({ classCustom, title, link, submit }) {
  return (
    <button type="button" onClick={link} onSubmit={submit}>
      <p
        className={`${classCustom} lg:py-4 py-2 bg-second-3 text-base font-poppins font-medium text-text-1`}
      >
        {title}
      </p>
    </button>
  );
}
export default memo(Button);
