import React, { memo } from "react";

// eslint-disable-next-line react/prop-types
function Button({ classCustom, title, link, submit, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={link} onSubmit={submit}>
      <p
        className={`${classCustom}  bg-second-3 text-base font-poppins font-medium text-text-1`}
      >
        {title}
      </p>
    </button>
  );
}
export default memo(Button);
