import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

function CategoryItem(props) {
  const { category } = props;
  return (
    <Link
      href="./"
      className="group flex w-[10.625rem] h-[9.0625rem] hover:bg-secondary-2 items-center justify-center rounded-[0.25rem] border-[1px] border-solid border-black border-opacity-30"
    >
      <div className="flex flex-col gap[1rem]">
        <div className="flex items-center justify-center">
          <Image
            src={category.imgSrc}
            alt="..."
            width={56}
            height={56}
            priority
          />
        </div>

        <span className="text-text-2 group-hover:text-text-1 font-poppins text-[1rem] font-[400] leading-[1.4rem]">
          {category.name}
        </span>
      </div>
    </Link>
  );
}

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};
