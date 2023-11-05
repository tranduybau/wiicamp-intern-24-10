import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../Button/ButtonRed";

function SignUp() {
  const router = useRouter();
  const HandleSignUp = () => {
    router.push("/SignUp");
  };

  return (
    <div className="container mt-16 mb-36 lg:flex block max-h-[781px]">
      <div className="lg:max-w-[805px] w-full h-full ">
        <Image
          src="/img/login.png"
          alt="sign up"
          width={805}
          height={781}
          priority
          className="h-full"
        />
      </div>
      <form className="lg:ml-32 ml:0 lg:mt-0 mt-4 flex justify-center items-center max-w-[370px]  flex-col">
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
        <Button
          classCustom="px-[122px] mb-4"
          title="Create Account"
          submit={HandleSignUp}
        />
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
      </form>
    </div>
  );
}
export default memo(SignUp);
