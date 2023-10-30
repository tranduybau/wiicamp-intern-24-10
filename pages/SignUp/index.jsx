import React, { memo } from "react";
import Image from "next/image";

function SignUp() {
  return (
    <div className="container mt-16 mb-36 lg:flex block ">
      <div className="w-3/5">
        <Image
          src="/img/login.png"
          alt="sign up"
          width={700}
          height={700}
          priority
          className="w-full"
        />
      </div>
      <div className="lg:ml-32 ml:0 lg:mt-0 mt-4">aa</div>
    </div>
  );
}
export default memo(SignUp);
