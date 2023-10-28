import React, { memo } from "react";
import classNames from "classnames";

import styles from "../../../../styles/HomePage/ThisMonth/thismonth.module.css";

function BestSelling() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <p
          className={classNames(
            "font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-14",
            styles.text_center,
          )}
        >
          Best Selling Products
        </p>
        <div className="  ">
          <div className="flex justify-center">
            <p className="bg-second-3 text-base font-poppins font-medium text-text-1 py-4 px-12 ">
              <a href="./bestSelling">View All</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(BestSelling);
