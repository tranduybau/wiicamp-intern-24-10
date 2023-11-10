import React, { memo, useState } from "react";
import classNames from "classnames";

import styles from "@/styles/language.module.css";

function Languages() {
  const [selectedOption, setSelectedOption] = useState("EngLish");

  const handleLanguage = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="lg:flex sm:block bg-black py-2.5 items-center w-full">
      <div className="md:flex container justify-end sm:block">
        <div className="xl:flex block">
          <p
            className={classNames(
              "font-poppins text-text-1 text-sm font-normal mr-2 flex justify-center items-center",
              styles.text,
            )}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="./"
            className={classNames(
              "font-poppins font-3 text-sm  text-text-1 underline  flex justify-center",
              styles.shopNow,
            )}
          >
            Shop Now
          </a>
        </div>
        <div className="ml-[231px]   flex justify-end ">
          <select
            value={selectedOption}
            onChange={handleLanguage}
            className="bg-black text-text-1 font-poppins text-sm "
          >
            <option value="en">English</option>
            <option value="vn">Tiếng việt</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default memo(Languages);
