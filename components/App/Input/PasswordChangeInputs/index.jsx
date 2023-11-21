import React, { memo } from "react";
import PropTypes from "prop-types";

function PasswordChange({ type, placeholder, required }) {
  return (
    <input
      className="w-full  bg-secondary py-[13px] px-[16px] rounded "
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
export default memo(PasswordChange);

PasswordChange.propTypes = {
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};
