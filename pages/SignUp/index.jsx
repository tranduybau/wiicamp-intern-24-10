import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import * as yup from "yup";

import Button from "@/components/App/Button/Contain";

import axios from "../../libraries/axiosClient";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(32).required("Password is required"),
});

function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = () => {
    // e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    try {
      axios.post("https://fakestoreapi.com/auth/login", payload);
      // eslint-disable-next-line no-console
      console.log("payload", payload);
      toast.success("Registered successfully!");
    } catch (error) {
      toast.warning("Registration failed!", 1.5);
    }
    reset();
  };

  return (
    <div className="container mt-16 mb-36 lg:flex block min-h-[781px]">
      <div className="lg:max-w-[805px] ">
        <Image
          src="/img/login.png"
          alt="sign up"
          width={805}
          height={781}
          priority
          className="h-full"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="lg:ml-32 ml:0 lg:mt-0 mt-4 flex justify-center items-center "
      >
        <div className="min-w-[370px] flex flex-col">
          <span className="font-inter lg:text-4xl text-3xl font-medium leading-7 text-text-2 mb-6 lg:mt-0 mt-8">
            Create an account
          </span>
          <span className="font-poppins text-base font-normal mb-12">
            Enter your details below
          </span>
          <div>
            <div className="mb-10">
              <input
                type="type"
                className="form-control border-b border-inherit border-solids w-full h-8"
                placeholder="Name"
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-second-3">{errors.name?.message}</p>
            </div>

            <div className="mb-10">
              <input
                type="email"
                className="form-control border-b border-inherit border-solids w-full h-8 "
                placeholder="Email or Phone Number"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-second-3">{errors.email?.message}</p>
            </div>
            <div className="mb-10">
              <input
                type="password"
                className="form-control border-b border-inherit border-solids w-full h-8 "
                placeholder="Password"
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-second-3">{errors.password?.message}</p>
            </div>
          </div>
          <Button
            classCustom="px-[122px] mb-4 py-[16px]"
            title="Create Account"
            type="submit"
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
        </div>
      </form>
    </div>
  );
}
export default memo(SignUp);
