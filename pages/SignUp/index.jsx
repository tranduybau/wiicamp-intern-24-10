import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

// import Button from "../Button";

function SignUp() {
  return (
    <div className="container mt-16 mb-36 lg:flex block ">
      <div className="lg:w-3/5 w-full">
        <Image
          src="/img/login.png"
          alt="sign up"
          width={700}
          height={700}
          priority
          className="w-full"
        />
      </div>
      <div className="lg:ml-32 ml:0 lg:mt-0 mt-4 flex justify-center items-center">
        <div className="max-w-[371px] h-3/4 flex flex-col">
          <p className="font-inter lg:text-4xl text-3xl font-medium leading-7 text-text-2 mb-6 lg:mt-0 mt-8">
            Create an account
          </p>
          <p className="font-poppins text-base font-normal mb-12">
            Enter your details below
          </p>
          <div>
            <input
              type="text"
              className="form-control border-b border-inherit border-solids w-full h-8 mb-10"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-control border-b border-inherit border-solids w-full h-8 mb-10"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              className="form-control border-b border-inherit border-solids w-full h-8 mb-10"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="w-full bg-second-3 text-text-1 py-4 font-poppins text-base font-medium mb-4"
          >
            Create Account
          </button>
          {/* <Button classCustom="px-[117px] mb-4" title="Create Account" /> */}
          <Link
            href="https://www.google.com.vn/"
            className="border border-inherit border-solids py-4 w-full flex justify-center mb-8"
          >
            <Image
              src="/img/Icon-Google.png"
              alt="sign up"
              width={20}
              height={20}
              priority
            />
            <p className="ml-4 font-poppins text-base font-normal leading-6">
              Sign up with Google
            </p>
          </Link>
          <div className="flex font-poppins text-base  text-text-2 opacity-70 justify-center">
            <p className=" font-normal mr-4">Already have account?</p>
            <Link href="./Login" className="font-medium underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SignUp);
