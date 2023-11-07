import React, { memo } from "react";
import classNames from "classnames";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import Button from "../Button/ButtonRed";

import styles from "../../styles/contact.module.css";

function Contact() {
  return (
    <div className="container mt-[80px] mb-[140px] lg:px-0 px-[16px]">
      <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5 ">
        <Link href="./" className="opacity-50">
          Home
        </Link>
        <p>/</p>
        <Link href="./Contact" className="active:text-text-2">
          Contact
        </Link>
      </div>
      <div className="lg:flex gap-[30px] mt-[80px] block">
        <div
          className={classNames(
            "max-w-[340px] min-h-[457px] flex flex-col gap-[32px]",
            styles.shadow,
          )}
        >
          <div className="">
            <div className="flex items-center gap-[16px]">
              <Phone
                className="text-text-1 bg-second-3 p-2 rounded-full"
                size={40}
              />
              <span className="font-poppins text-base font-medium not-italic leading-6 text-text-2">
                Call To Us
              </span>
            </div>
            <p className="mt-[24px] font-poppins text-sm font-normal not-italic leading-[21px]">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-[16px] font-poppins text-sm font-normal not-italic leading-[21px] ">
              <Link href="tel:+8801611112222">Phone: +8801611112222</Link>
            </p>
          </div>
          <p className="border-b border-solid border-black opacity-50" />
          <div>
            <div className="flex items-center gap-[16px]">
              <Mail
                className="text-text-1 bg-second-3 p-2 rounded-full"
                size={40}
              />
              <span className="font-poppins text-base font-medium not-italic leading-6 text-text-2">
                Write To US
              </span>
            </div>
            <p className="mt-[24px] font-poppins text-sm font-normal not-italic leading-[21px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-[16px] font-poppins text-sm font-normal not-italic leading-[21px]">
              <Link href="mailto: customer@exclusive.com">
                Emails: customer@exclusive.com
              </Link>
            </p>
            <p className="mt-[16px] font-poppins text-sm font-normal not-italic leading-[21px]">
              <Link href="mailto: support@exclusive.com">
                Emails: support@exclusive.com
              </Link>
            </p>
          </div>
        </div>
        <div
          className={classNames(
            "max-w-[800px] max-h-[457px] flex flex-col gap-[32px] lg:mt-0 mt-[30px]",
            styles.shadow,
          )}
        >
          <div className="md:flex gap-[16px] block">
            <input
              className="max-w-[235px] bg-secondary py-[13px] px-[16px] rounded "
              type="name"
              placeholder="Your Name *"
              required
            />
            <input
              className="max-w-[235px] bg-secondary py-[13px] px-[16px] rounded md:mt-0 mt-[20px] md:ml-0 sm:ml-[20px]"
              type="email"
              placeholder="Your Email *"
              required
            />
            <input
              className="max-w-[235px] bg-secondary py-[13px] px-[16px] rounded md:mt-0 mt-[20px] md:ml-0 sm:ml-[20px]"
              type="phoneNumber"
              placeholder="Your Phone *"
              required
            />
          </div>
          <input
            className=" bg-secondary  px-[16px] rounded min-h-[207px] max-w-[737px] "
            type="name"
            placeholder="Your Massage"
            required
          />
          <div className="flex justify-end">
            <Button title="Send Massage" classCustom="px-[48px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
