import React, { memo } from "react";
import PropTypes from "prop-types";

function ButtonCart({ title, classCustom, icon, link }) {
  return (
    <div className="!absolute h-10  text-text-1 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ">
      <button
        type="button"
        onClick={link}
        className={`${classCustom} bg-black text-white-0 py-2 px-5 min-w-[270px]`}
      >
        {icon}
        {title}
      </button>
    </div>
  );
}
export default memo(ButtonCart);

ButtonCart.propTypes = {
  title: PropTypes.string.isRequired,
  classCustom: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
};
