import React, { memo } from "react";
// import { toast } from "react-toastify";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import axios from "@/libraries/axiosClient";
import useCartStore from "@/Store/CartStore";

import Button from "../../components/App/AppButtonContain";
import Input from "../../components/App/Input/LabeledInput";
import CurrencyFormatter from "../../components/FomatNumber";
import axios from "../../libraries/axiosClient";
import UseCart from "../ProductDetails/index";

import styles from "../../styles/checkout.module.css";

function Checkout() {
  const [firstName, setFirstName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { getCartItems, removeAllCart } = useCartStore();
  const cartItems = getCartItems();
  const router = useRouter();

  const HandleAddOrder = async () => {
    const orderDetails = cartItems.map((p) => {
      return {
        productId: p.productId,
        name: p.name,
        imgage: p.image,
        quantity: p.quantity,
        price: p.price - (p.price * p.discount) / 100,
        discount: p.discount,
      };
    });

    const order = {
      firstName,
      companyName,
      address,
      apartment,
      city,
      phoneNumber,
      email,
      orderDetails,
    };

    try {
      await axios.post("https://fakestoreapi.com/carts", order);
      // await axios.delete(`/cart/${customerId}`);
      removeAllCart();

      router.push("/");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
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
        <Link href="/Account" className="opacity-50">
          Account
        </Link>
        <p className="opacity-50">/</p>
        <Link href="/MyAccount" className="opacity-50">
          My Account
        </Link>
        <p className="opacity-50">/</p>
        <Link href="/Product" className="opacity-50">
          Product
        </Link>
        <p className="opacity-50">/</p>
        <Link href="/Cart" className="opacity-50">
          View Cart
        </Link>
        <p className="opacity-50">/</p>
        <Link href="/Checkout" className="active:text-text-2">
          Checkout
        </Link>
      </div>
      <div className="lg:flex block mt-[80px]">
        <div className="">
          <p className="font-inter text-4xl font-medium leading-[30px] tracking-[1.44px]">
            Billing Details
          </p>
          <div className="mt-[48px] flex flex-col gap-[32px] lg:min-w-[470px] max-w-[470px]">
            <Input
              input=" First Name"
              type="name"
              required
              value={firstName}
              link={(e) => setFirstName(e.target.value)}
            />
            <Input
              input="Company Name"
              type="CompanyName"
              required={false}
              value={companyName}
              link={(e) => setCompanyName(e.target.value)}
            />
            <Input
              input="Street Address"
              type="address"
              required
              value={address}
              link={(e) => setAddress(e.target.value)}
            />
            <Input
              input="Apartment, floor, etc. (optional)"
              type="Apartment"
              required={false}
              value={apartment}
              link={(e) => setApartment(e.target.value)}
            />
            <Input
              input="Town/City"
              type="City"
              required
              value={city}
              link={(e) => setCity(e.target.value)}
            />
            <Input
              input="Phone Number"
              type="number"
              required
              value={phoneNumber}
              link={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              input=" Email Address"
              type="email"
              required
              value={email}
              link={(e) => setEmail(e.target.value)}
            />
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
                          <CurrencyFormatter
                            amount={CartId.price * item.quantity}
                          />
                          {/* ${CartId.price * item.quantity} */}
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
              <CurrencyFormatter amount={total} />
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <p className="border-b border-solid  " />
            <div className="flex justify-between ">
              <span>Total:</span>
              <CurrencyFormatter amount={total} />
            </div>
          </div>
          <div className="sm:flex block justify-between lg:mr-[102px] mr-0">
            <div className="flex gap-[16px]">
              <input type="radio" name="paymentMethod" />
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
              <input type="radio" name="paymentMethod" />
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
