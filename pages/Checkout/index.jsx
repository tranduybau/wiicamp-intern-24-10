import React, { memo } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import ButtonApplyCoupon from "../../components/Button/ButtonRed";

import styles from "../../styles/checkout.module.css";

function Checkout() {
  const listItem = [
    {
      id: "1",
      image: "/img/toys.png",
      name: "LCD Monitor",
      price: "$650",
    },
    {
      id: "2",
      image: "/img/screen.png",
      name: "LCD Monitor",
      price: "$650",
    },
  ];

  return (
    <div className="container mt-[80px] mb-[140px]">
      <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5 ">
        <Link href="./Account" className="opacity-50">
          Account
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./MyAccount" className="opacity-50">
          My Account
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./Product" className="opacity-50">
          Product
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./Cart" className="opacity-50">
          View Cart
        </Link>
        <p className="opacity-50">/</p>
        <Link href="./Checkout" className="active:text-text-2">
          Checkout
        </Link>
      </div>
      <div className="flex  mt-[80px]">
        <div className="">
          <p className="font-inter text-4xl font-medium leading-[30px] tracking-[1.44px]">
            Billing Details
          </p>
          <div className="mt-[48px] flex flex-col gap-[32px] min-w-[470px]">
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                First Name
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
                required
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Company Name
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Street Address
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
                required
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Apartment, floor, etc. (optional)
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Town/City
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
                required
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Phone Number
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
                required
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-poppins text-base font-normal leading-6 opacity-40">
                Email Address
              </span>
              <input
                className="max-w-[470px] bg-secondary py-[13px] px-[16px] rounded "
                type="name"
                required
              />
            </div>
          </div>
          <div className="mt-[24px] flex gap-[16px]">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              className={styles.custom_checkbox}
            />
            <label htmlFor="aaa">
              {" "}
              Save this information for faster check-out next time
            </label>
            <br />
            {/* <label className={styles.aaa} htmlFor="aaa">
              Save this information for faster check-out next time
              <input type="checkbox" checked="checked" />
              <span className={styles.checkmark} />
            </label> */}
          </div>
        </div>
        <div className="flex flex-col gap-[32px]  min-w-[527px] ml-[173px] font-poppins text-base font-normal leading-6">
          {listItem &&
            listItem.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col  font-poppins text-base font-normal leading-6 text-text-2 mr-[102px]">
                    <div className="flex justify-between">
                      <div className="flex">
                        <Image
                          src={item.image}
                          alt="aa"
                          width={54}
                          height={54}
                          priority
                          className="object-contain mr-[20px]"
                        />
                        <span className="">{item.name}</span>
                      </div>
                      <span className="">{item.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className=" flex flex-col gap-[16px] mr-[102px]">
            <div className="flex justify-between ">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="flex justify-between mr-[102px]">
            <div className="flex gap-[16px]">
              <input type="radio" />
              <p>Bank</p>
              <div className="py-[5.6px] px-[2.1px]">
                <Image
                  src="/img/bkashBank.png"
                  width={37.8}
                  height={16.8}
                  priority
                  alt="aa"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mr-[102px]">
            <div className="flex gap-[16px]">
              <input type="radio" />
              <p>Cash on delivery</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="Coupon Code"
              className={classNames(
                "py-[16px] pl-[24px] min-w-[300px] font-poppins text-base font-normal opacity-50",
                styles.border,
              )}
            />
            <ButtonApplyCoupon title="Apply Coupon" classCustom="px-[48px]" />
          </div>
          {/* <div>
            <ButtonPlaceOrder title="aaa" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default memo(Checkout);
