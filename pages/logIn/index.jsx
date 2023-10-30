import React from "react";
import classNames from "classnames";
import Link from "next/link";

import styles from "./logIn.module.scss";

function LogIn() {
  return (
    <div className="container mt-[3.75rem] max-w-[1480px] flex justify-center 2xl:justify-start items-center gap-[8.0625rem]">
      <div className="hidden 2xl:flex w-[50.3125rem] h-[48.8125rem] pt-[75px] justify-end items-center rounded-tl-0 rounded-tr-0.25rem rounded-br-0.25rem rounded-bl-0 bg-[#CBE4E8]">
        <div className={classNames("w-[57.4375rem] h-[44.125rem]", styles.left_banner)} />
      </div>

      <form className="flex flex-col items-center 2xl:items-start gap-[3rem]">
        <div className="flex flex-col items-start gap-[1.5rem]">
          <span className="text-text-2 font-inter text-[2.25rem] font-[600] leading-[1.875rem] tracking-[0.09rem]">
            Log in to Exclusive
          </span>

          <span className="text-text-2 font-poppins text-[1rem] font-[500] leading-[1.5rem]">
            Enter your details below
          </span>
        </div>

        <div className="flex flex-col items-center gap-[2.5rem]">
          <div className="flex flex-col items-start gap-[2.5rem]">
            <div className="flex flex-col items-start gap-[0.5rem] text-text-2 border-solid border-b-black border-b-[1px] border-opacity-50">
              <input
                className="w-[23.125rem] h-[2rem] text-text-2 font-poppins text-[1rem] font-[400] leading-[1.5rem]"
                type="text"
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="flex flex-col items-start gap-[0.5rem] text-text-2 border-solid border-b-black border-b-[1px] border-opacity-50">
              <input
                className="w-[23.125rem] h-[2rem] text-text-2 font-poppins text-[1rem] font-[400] leading-[1.5rem]"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center gap-[5.4375rem]">
            <button
              type="submit"
              className="flex px-[3rem] h-[3.5rem]  py-[1rem ] justify-center items-center gap-[0.625rem] rounded-[0.25rem] bg-button-2"
            >
              <span className="text-text-1 font-poppins text-[1rem] font-[500] leading-[1.5rem]">Log In</span>
            </button>

            <Link href="./" className="text-secondary-2 font-poppins text-[1rem] font-[400] leading-[1.5rem]">
              Forget Password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
