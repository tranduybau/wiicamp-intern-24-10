import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";

import Button from "@/components/App/Button/Contain";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function Login() {
  //   const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    // eslint-disable-next-line no-console
    console.log({ data });
    reset();
  };

  //   const HandleSubmit = async (e) => {
  //     e.preventDefault();
  //   };
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
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="lg:ml-32 ml:0 lg:mt-0 mt-4 flex justify-center items-center"
      >
        <div className="min-w-[370px] h-3/4 flex flex-col">
          <span className="font-inter lg:text-4xl text-3xl font-medium leading-7 text-text-2 mb-6 lg:mt-0 mt-8">
            Log in to Exclusive
          </span>
          <span className="font-poppins text-base font-normal mb-12">
            Enter your details below
          </span>
          <div>
            <div className="mb-10">
              <input
                type="email"
                className="form-control border-b border-inherit border-solids w-full h-8 "
                placeholder="Email or Phone Number"
                {...register("email")}
              />
              <p className="text-second-3">{errors.email?.message}</p>
            </div>

            <div className="mb-10">
              <input
                type="password"
                className="form-control border-b border-inherit border-solids w-full h-8 "
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-second-3">{errors.password?.message}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              classCustom="px-[48px] py-[16px]"
              title="Login"
              //   submit={HandleSubmit}
              type="submit"
            />
            <Link href="./" className="py-4 text-second-3">
              Forget Password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default memo(Login);
