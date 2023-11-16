import React, { memo } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import useCartStore from "@/Store/CartStore";

import Button from "../../components/App/Button/Contain";
import UseCart from "../ProductDetails/index";

import styles from "../../styles/checkout.module.css";

function Checkout() {
  const { getCartItems } = useCartStore();
  const cartItems = getCartItems();

  const HandleAddOrder = () => {
    // eslint-disable-next-line no-console
    console.log("addOrder");
  };

  let total = 0;

  cartItems.forEach((item) => {
    const CartId = UseCart(item.productId);
    if (CartId) {
      total += CartId.price * item.quantity;
    }
  });

  return (
    <div className="container mt-[80px] mb-[140px] xl:px-0 px-[16px]">
      <div className="md:flex block gap-[12px] font-poppins text-sm font-normal leading-5 ">
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
      <div className="lg:flex block mt-[80px]">
        <div className="">
          <p className="font-inter text-4xl font-medium leading-[30px] tracking-[1.44px]">
            Billing Details
          </p>
          <div className="mt-[48px] flex flex-col gap-[32px] lg:min-w-[470px] max-w-[470px]">
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
                required
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
                required
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
              required
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
        <div className="flex flex-col gap-[32px]  xl:min-w-[527px] max-w-[527px] lg:ml-[173px] ml-0 font-poppins text-base font-normal leading-6 lg:mt-0 mt-[20px]">
          {cartItems &&
            cartItems.map((item, index) => {
              const CartId = UseCart(item.productId);
              return (
                <div key={item.productId}>
                  {CartId ? (
                    <div className="flex flex-col  font-poppins text-base font-normal leading-6 text-text-2 lg:mr-[102px] mr-0">
                      <div className="flex justify-between">
                        <div className="flex">
                          <Image
                            src={CartId?.image}
                            alt={index}
                            width={54}
                            height={54}
                            priority
                            className="object-contain mr-[20px]"
                          />
                          <span className="flex items-center">
                            {CartId?.title}
                          </span>
                        </div>
                        <span className="flex items-center">
                          ${CartId.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span>Loading....</span>
                  )}
                </div>
              );
            })}
          <div className=" flex flex-col gap-[16px] lg:mr-[102px] mr-0">
            <div className="flex justify-between ">
              <span>Subtotal:</span>
              <span>${total}</span>
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
          <div className="sm:flex block justify-between lg:mr-[102px] mr-0">
            <div className="flex gap-[16px]">
              <input type="radio" />
              <p>Bank</p>
            </div>
            <div className="flex gap-[8px]">
              <Image
                src="/img/bkashBank.png"
                width={42}
                height={28}
                priority
                alt="bkash"
              />
              <Image
                src="/img/visa.png"
                width={42}
                height={28}
                priority
                alt="visa"
              />
              <Image
                src="/img/masterCard.png"
                width={39.2}
                height={25.2}
                priority
                alt="master"
              />
              <Image
                src="/img/nagad.png"
                width={39.2}
                height={25.2}
                priority
                alt="nagad"
              />
            </div>
          </div>
          <div className="flex justify-between mr-[102px]">
            <div className="flex gap-[16px]">
              <input type="radio" />
              <p>Cash on delivery</p>
            </div>
          </div>
          <div className="xl:flex gap-[16px] block">
            <input
              type="text"
              placeholder="Coupon Code"
              className={classNames(
                "py-[16px]  pl-[24px] lg:min-w-[300px] max-w-[300px] font-poppins text-base font-normal opacity-50 lg:mr-0 mr-[20px]",
                styles.border,
              )}
            />
            <Button
              title="Apply Coupon"
              classCustom="px-[48px] xl:mt-0 mt-[32px] py-[16px]"
            />
          </div>
          <div>
            <Button
              title="Place Order"
              classCustom="px-[48px] py-[16px]"
              link={HandleAddOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Checkout);
