import React, { memo } from "react";
import PropTypes from "prop-types";

function Button({ classCustom, title, link, submit }) {
  return (
    <button type="submit" onClick={link} onSubmit={submit}>
      <p
        className={`${classCustom}  bg-second-3 text-base font-poppins font-medium text-text-1`}
      >
        {title}
      </p>
    </button>
  );
}
export default memo(Button);

Button.propTypes = {
  classCustom: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
