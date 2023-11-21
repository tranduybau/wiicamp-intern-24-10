import React, { memo } from "react";
import PropTypes from "prop-types";

function LabeledInput({ input, type, required, value, link }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="font-poppins text-base font-normal leading-6 opacity-40">
        {input}
      </span>
      <input
        className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
        type={type}
        required={required}
        value={value}
        onChange={link}
      />
    </div>
  );
}
export default memo(LabeledInput);

LabeledInput.propTypes = {
  input: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
};
