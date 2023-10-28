import React, { memo } from "react";
import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "lucide-react";

import styles from "../../../../styles/HomePage/ToDay/flashsale.module.css";

function FlashSale() {
  return (
    <div className="flex mt-6 justify-between">
      <div className=" flex gap-20 ">
        <p
          className={classNames(
            "font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl",
            styles.text_center,
          )}
        >
          Flash Sales
        </p>
        <div className="flex lg:gap-3 sm:gap-2">
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Days
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl">
              03
            </p>
          </div>
          <div
            className={classNames(
              "flex text-button-3 font-bold",
              styles.text_center,
            )}
          >
            :
          </div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Hours
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl">
              23
            </p>
          </div>
          <div
            className={classNames(
              "flex text-button-3 font-bold",
              styles.text_center,
            )}
          >
            :
          </div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Minutes
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl">
              19
            </p>
          </div>
          <div
            className={classNames(
              "flex text-button-3 font-bold",
              styles.text_center,
            )}
          >
            :
          </div>
          <div>
            <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
              Seconds
            </p>
            <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl">
              56
            </p>
          </div>
        </div>
      </div>

      <div className={classNames("flex gap-2", styles.text_center)}>
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowLeft />
        </div>
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
export default memo(FlashSale);
