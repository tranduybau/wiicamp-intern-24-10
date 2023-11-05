import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button/ButtonRed";

function SignUp() {
  const HandleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log("login");
  };
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
        <div className="min-w-[370px] h-3/4 flex flex-col">
          <p className="font-inter lg:text-4xl text-3xl font-medium leading-7 text-text-2 mb-6 lg:mt-0 mt-8">
            Log in to Exclusive
          </p>
          <p className="font-poppins text-base font-normal mb-12">
            Enter your details below
          </p>
          <div>
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
          <div className="flex justify-between">
            <Button
              classCustom="px-[48px]"
              title="Login"
              submit={HandleSubmit}
            />
            <Link href="./" className="py-4 text-second-3">
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SignUp);
