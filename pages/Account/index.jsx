import React, { memo } from "react";
import classNames from "classnames";
import Link from "next/link";

import Button from "../Button/ButtonRed";

import styles from "../../styles/account.module.css";

function Account() {
  const HandleReMove = () => {
    // eslint-disable-next-line no-console
    console.log("remove");
  };
  return (
    <div className="container mt-[80px] mb-[140px] lg:px-0 px-[16px]">
      <div className="flex  font-poppins text-sm font-normal leading-5 justify-between">
        <div className="flex gap-[12px]">
          <Link href="./" className="opacity-50">
            Home
          </Link>
          <p>/</p>
          <Link href="./Account" className="active:text-text-2">
            Account
          </Link>
        </div>
        <div className="font-poppins text-sm font-normal leading-[21px] flex gap-[4px] ">
          <span className="text-text-2">Welcome!</span>
          <span className="text-second-3">Md Rimel</span>
        </div>
      </div>
      <div className="flex mt-[80px] justify-between">
        <div className="flex flex-col">
          <Link href="./Account">
            <span className="font-poppins text-base font-medium leading-6">
              Manage My Account
            </span>
          </Link>
          <div className="flex flex-col gap-[8px] mt-[16px] ml-[35px]">
            <Link href="./Account">
              <span>My Profile</span>
            </Link>
            <Link href="./Location">
              <span>Address Book</span>
            </Link>
            <Link href="./Payment">
              <span>My Payment Options</span>
            </Link>
          </div>
          <Link href="./order" className="mt-[24px]">
            <span className="font-poppins text-base font-medium leading-6 ">
              My Orders
            </span>
          </Link>
          <div className="flex flex-col gap-[8px] mt-[16px] ml-[35px]">
            <span>My Returns</span>
            <span>My Cancellations</span>
          </div>
          <Link href="./WishList" className="mt-[24px]">
            <span className="font-poppins text-base font-medium leading-6 ">
              My WishList
            </span>
          </Link>
        </div>
        <div
          className={classNames(
            "min-w-[870px] px-[80px] py-[40px]",
            styles.shadow,
          )}
        >
          <span className="font-poppins text-xl font-medium leading-7 text-second-3">
            Edit Your Profile
          </span>
          <div className="flex gap-[50px]">
            <div className="mt-[16px] flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-normal leading-6">
                  First Name
                </span>
                <input
                  className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                  type="name"
                  placeholder="Md"
                  required
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-normal leading-6">
                  Email
                </span>
                <input
                  className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                  type="email"
                  placeholder="Md"
                  required
                />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-normal leading-6">
                  Last Name
                </span>
                <input
                  className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                  type="name"
                  placeholder="Rimel"
                  required
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className="font-poppins text-base font-normal leading-6">
                  Address
                </span>
                <input
                  className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                  type="address"
                  placeholder="Md"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[24px]">
            <span className="font-poppins text-base font-normal leading-6">
              Password Changes
            </span>
            <div className="flex flex-col gap-[16px] mt-[8px]">
              <input
                className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                type="password"
                placeholder="Current Passwod"
                required
              />
              <input
                className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                type="password"
                placeholder="New Passwod"
                required
              />
              <input
                className="min-w-[330px] bg-secondary py-[13px] px-[16px] rounded "
                type="password"
                placeholder="Confirm New Passwod"
                required
              />
            </div>
          </div>
          <div className="mt-[24px] flex justify-end gap-[32px] items-center">
            <button
              type="button"
              className="font-poppins text-base font-normal leading-6"
              onClick={HandleReMove}
            >
              Cancel
            </button>
            {/* <p className="font-poppins text-base font-normal leading-6">
              Cancel
            </p> */}
            <Button title="Save Changes" classCustom="px-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Account);
