import React, { memo } from "react";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-text-1">
      <div className="container">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-[82px] pb-[60px] ">
          <div className="lg:block flex justify-center">
            <div className="max:w-[217px]">
              <p className="font-inter font-semibold text-2xl leading-6 tracking-wider mb-6">
                <Link href="./home">Exclusive</Link>
              </p>
              <p className="font-poppins font-medium text-xl mb-6">
                <Link href="./Subscribe">Subscribe</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4">
                Get 10% off your first order
              </p>
              <div className="relative border-solid border border-current max-w-[217px]">
                <input
                  type="send"
                  id="default-send"
                  className=" p-3 bg-black "
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  id="sendemail"
                  aria-label="sendemail"
                  className="text-text-1 absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg sm:absolute:none "
                >
                  <SendHorizontal />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:ml-[80px] ml-0">
            <div className="max-w-[175px] sm:mt-0 mt-10 ">
              <p className="font-poppins font-medium text-xl leading-6 tracking-wider mb-6">
                Support
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="mailto: exclusive@gmail.com" aria-label="email">
                  exclusive@gmail.com
                </Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="tel:+88015-88888-9999" aria-label="phone">
                  +88015-88888-9999
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:ml-[84px] ml-0">
            <div className="max-w-[123px] md:mt-0 mt-[20px]">
              <p className="font-poppins  font-medium text-xl leading-6 tracking-wider mb-6">
                Account
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./MyAccount">My Account</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./SignUp">Login / Register</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./Cart"> Cart</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="Wishlist">Wishlist</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./">Shop</Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:ml-[22px] ml-0">
            <div className="lg:min-w-[109px] md:min-w-[217px] md:mt-0 mt-[20px]">
              <p className="font-poppins  font-medium text-xl leading-6 tracking-wider mb-6">
                Quick Link
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./">Privacy Policy</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./">Terms Of Use</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./">FAQ</Link>
              </p>
              <p className="font-poppins text-base font-normal mb-4 leading-6">
                <Link href="./Contact">Contact</Link>
              </p>
              {/* </div> */}
            </div>
          </div>
          <div className="flex justify-center lg:ml-[35px] ml-0">
            <div className="min-w-[198px] ">
              <p className="font-poppins font-medium text-xl leading-6 tracking-wider mb-6">
                Download App
              </p>
              <p className="font-poppins text-xs font-medium opacity-70">
                Save $3 with App New User Only
              </p>
              <div className="flex mt-2">
                <Link href="/img/qrcode.jpg">
                  <Image
                    src="/img/qrcode.jpg"
                    alt="qrcode"
                    className="mr-2"
                    width={80}
                    height={80}
                    priority
                  />
                </Link>
                <div>
                  <Link href="http" className="w-auto h-auto">
                    <Image
                      src="/img/googleplay.png"
                      alt="googleplay"
                      className="mr-2"
                      width={110}
                      height={80}
                      priority
                    />
                  </Link>
                  <Link href="http" className="w-auto h-auto">
                    <Image
                      src="/img/appstore.png"
                      alt="appstore"
                      className="mr-2 mt-2"
                      width={110}
                      height={80}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="flex mt-[24px] gap-[24px]">
                <Link
                  href="https://www.facebook.com/hoangvinh02"
                  aria-label="facebook"
                >
                  <Facebook size={24} />
                </Link>
                <Link href="https://www.twitter.com" aria-label="twitter">
                  <Twitter size={24} />
                </Link>
                <Link href="https://www.instagram.com" aria-label="instagram">
                  <Instagram size={24} />
                </Link>
                <Link href="https://www.instagram.com" aria-label="in">
                  <Linkedin size={24} />
                </Link>
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
