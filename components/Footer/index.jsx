import React, { memo } from "react";
import { Copyright, SendHorizontal } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black text-text-1 ">
      <div className="container">
        <div className="lg:flex block gap-[87px] pt-[82px] pb-[60px]">
          <div className="sm:flex block gap-[87px]">
            <div className="w-[217px]">
              <p className="font-inter font-semibold text-2xl leading-6 tracking-wider mb-6">
                <a href="./home">Exclusive</a>
              </p>
              <p className="font-poppins font-medium text-xl mb-6">Subscribe</p>
              <p className="font-poppins text-base font-normal mb-4">
                Get 10% off your first order
              </p>
              <div className="relative border-solid border border-current ">
                <input
                  type="send"
                  id="default-send"
                  className=" p-3 bg-black "
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="text-text-1 absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg sm:absolute:none "
                >
                  <SendHorizontal />
                </button>
              </div>
            </div>

            <div className="w-[175px] sm:mt-0 mt-10">
              <p className="font-poppins font-medium text-xl leading-6 tracking-wider mb-6">
                Support
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                exclusive@gmail.com
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                +88015-88888-9999
              </p>
            </div>
          </div>
          <div className="sm:flex block gap-[87px]  lg:mt-0 mt-10">
            <div className="lg:min-w-[123px] min-w-[217px]">
              <p className="font-poppins  font-medium text-xl leading-6 tracking-wider mb-6">
                Account
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                My Account
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                Login / Register
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                Cart
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                Wishlist
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                Shop
              </p>
            </div>

            <div className="lg:min-w-[109px] ">
              <p className="font-poppins  font-medium text-xl leading-6 tracking-wider mb-6">
                Quick Link
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <a href="./csbm">Privacy Policy</a>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <a href="./dk">Terms Of Use</a>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <a href="./faq">FAQ</a>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <a href="./contact">Contact</a>
              </p>
            </div>
          </div>
          <div className="flex  lg:mt-0 mt-10 min-w-[217px]">
            <div className="min-w-[198px] ">
              <p className="font-poppins font-medium text-xl leading-6 tracking-wider mb-6">
                Download App
              </p>
              <p className="font-poppins text-xs font-medium opacity-70">
                Save $3 with App New User Only
              </p>
              <div className="flex mt-2">
                <a href="/img/qrcode.jpg">
                  <Image
                    src="/img/qrcode.jpg"
                    alt="qrcode"
                    className="mr-2"
                    width={80}
                    height={80}
                    priority
                  />
                </a>
                <div>
                  <a href="http">
                    <Image
                      src="/img/googleplay.png"
                      alt="googleplay"
                      className="mr-2"
                      width={110}
                      height={80}
                      priority
                    />
                  </a>
                  <a href="http">
                    <Image
                      src="/img/appstore.png"
                      alt="appstore"
                      className="mr-2 mt-2"
                      width={110}
                      height={80}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-solid border-inherit opacity-40">
        <div className="flex mt-4 pb-6 ">
          <Copyright />
          <p className="ml-2">Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
}
export default memo(Footer);
