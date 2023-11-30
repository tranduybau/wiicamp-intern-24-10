import React, { memo } from "react";
import PropTypes from "prop-types";

function ArrowPrev({ Handle, icon }) {
  return (
    <buttons
      type="button"
      id="arrowLeft"
      aria-label="arrowLeft"
      className="relative  bg-second-2 rounded-full lg:p-1 p-0 cursor-pointer"
      onClick={Handle}
    >
      {icon}
    </buttons>
  );
}
export default memo(ArrowPrev);

ArrowPrev.propTypes = {
  Handle: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};
