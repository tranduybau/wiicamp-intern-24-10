import React, { memo } from "react";
import PropTypes from "prop-types";

function ProfileInput({ text, type, placeholder, required }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="font-poppins text-base font-normal leading-6">
        {text}
      </span>
      <input
        className="md:min-w-[330px] max-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
export default memo(ProfileInput);

ProfileInput.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};
