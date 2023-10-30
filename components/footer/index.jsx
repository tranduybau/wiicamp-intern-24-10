import React from "react";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";

import OnTop from "../buttons/onTop";

function Footer() {
  return (
    <div className="bg-text-2 min-h-[27.5rem] h-fit mt-[8.75rem] pt-[5rem] pb-[1.5rem]">
      <div className="relative grid grid-cols-12 container">
        <OnTop />

        <div className="col-span-12 sm:col-span-6 xl:col-span-3 min-w-[13.5625rem] mb-10 xl:mb-0 flex flex-col items-center xl:items-start gap-[1rem]">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <span className="text-text-1 font-inter text-[1.5rem] font-[700] leading-[1.5rem] tracking-[0.045rem]">
              Exclusive
            </span>

            <span className="text-text-1 font-poppins text-[1.25rem] font-[500] leading-[1.75rem]">Subscribe</span>

            <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">
              Get 10% off your first order
            </span>
          </div>

          <form className="flex w-[13.5625rem] items-center gap-[2rem] rounded-[0.25rem] border-solid border-[1.5px] border-text-1 pt-[0.75rem] pb-[0.75rem] pl-[1rem]">
            <input
              placeholder="Enter your email"
              type="text"
              className="text-text-1 bg-text-2 font-poppins text-[1rem] font-[400] leading-[1.5rem] opacity-[0.4] w-[8.125rem]"
            />

            <button type="submit" className="w-[1.5rem] h-[1.5rem] flex-shrink-0">
              <SendHorizontal color="#FAFAFA" />
            </button>
          </form>
        </div>

        <div className="col-span-12 sm:col-span-6 xl:col-span-3 min-w-[10.9375rem] mb-10 xl:mb-0 flex flex-col items-center xl:items-start">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <span className="text-text-1 font-poppins text-[1.25rem] font-[500] leading-[1.75rem]">Support</span>

            <div className="flex flex-col items-start gap-[1rem]">
              <span className="w-[10.9375rem] text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">
                exclusive@gmail.com
              </span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">
                +88015-88888-9999
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 xl:col-span-2 min-w-[7.6875rem] mb-10 xl:mb-0 flex flex-col items-center xl:items-start">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <span className="text-text-1 font-poppins text-[1.25rem] font-[500] leading-[1.75rem]">Account</span>

            <div className="flex flex-col items-start gap-[1rem]">
              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">My Account</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Login / Register</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Cart</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Wishlist</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Shop</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 xl:col-span-2 min-w-[6.8125rem] mb-10 xl:mb-0 flex flex-col items-center xl:items-start">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <span className="text-text-1 font-poppins text-[1.25rem] font-[500] leading-[1.75rem]">Quick Link</span>

            <div className="flex flex-col items-start gap-[1rem]">
              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Privacy Policy</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Terms Of Use</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">FAQ</span>

              <span className="text-text-1 font-poppins text-[1rem] font-[400] leading-[1.5rem]">Contact</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 xl:col-span-2 min-w-[12.375rem] mb-10 lg:mb-0 flex flex-col items-center xl:items-start">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <span className="text-text-1 font-poppins text-[1.25rem] font-[500] leading-[1.75rem]">Download App</span>

            <div className="flex flex-col items-start gap-[0.5rem]">
              <span className="text-text-1 font-poppins text-[0.75rem] font-[500] leading-[1.125rem]">
                Save $3 with App New User Only
              </span>

              <div className="flex items-center gap-[0.5rem]">
                <div className="flex w-[5rem] h-[5rem] p-[0.125rem] justify-center items-center">
                  <Image src="/assets/images/footer/qrCode.png" width={76} height={76} priority alt="..." />
                </div>

                <div className="flex flex-col items-start gap-[0.25rem]">
                  <div className="w-[6.875rem] h-[2.5rem]">
                    <Image src="/assets/images/footer/googlePlay.png" width={110} height={40} priority alt="..." />
                  </div>

                  <div className="w-[6.875rem] h-[2.5rem]">
                    <Image src="/assets/images/footer/appStore.png" width={110} height={40} priority alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;