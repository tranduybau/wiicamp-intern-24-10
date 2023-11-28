import React, { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import classNames from "classnames";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

import Button from "@/components/App/AppButtonContain";
import InputPass from "@/components/App/Input/PasswordChangeInputs";
import Input from "@/components/App/Input/ProfileInput";

import axios from "@/libraries/axiosClient";
import styles from "@/styles/account.module.css";

function Account() {
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userId = decoded.sub;
    axios
      .get(`https://fakestoreapi.com/users/${userId}`)
      .then((response) => {
        const { data } = response;
        setUser(data);
        setFirstName(data.name.firstname);
        setLastName(data.name.lastname);
        setEmail(data.email);
        setAddress(`${data.address.city},${data.address.street}`);
        setFullName(`${data.name.firstname}${data.name.lastname}`);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  const HandleReMove = () => {
    // eslint-disable-next-line no-console
    console.log("remove");
  };

  const handleSave = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userId = decoded.sub;
    axios
      .patch(`https://fakestoreapi.com/users/${userId}`, {
        firstName,
        lastName,
        address,
        email,
      })
      .then(() => {
        axios
          .get(`https://fakestoreapi.com/users/${userId}`)
          .then((response) => {
            const { data } = response;
            setUser(data);
            toast.success("Cập nhật thông tin thành công!", 1.5);
          });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <div>
      {user && user ? (
        <div
          key={user.sub}
          className="container lg:mt-[80px] mt-[50px] lg:mb-[140px] mb-[70px] lg:px-0 px-[16px]"
        >
          <div className="flex  font-poppins text-sm font-normal leading-5 justify-between">
            <div className="flex gap-[12px]">
              <Link href="./" className="opacity-50">
                Home
              </Link>
              <p>/</p>
              <Link href="./Account" className="active:text-text-2">
                Account
              </Link>
            </div>
            <div className="font-poppins text-sm font-normal leading-[21px] flex gap-[4px] ">
              <span className="text-text-2">Welcome!</span>
              <span className="text-second-3">{fullName}</span>
            </div>
          </div>
          <div className="lg:flex block lg:mt-[80px] mt-[50px] justify-between">
            <div className="flex flex-col">
              <Link href="./Account">
                <span className="font-poppins text-base font-medium leading-6">
                  Manage My Account
                </span>
              </Link>
              <div className="flex flex-col gap-[8px] mt-[16px] ml-[35px]">
                <Link href="./Account">
                  <span>My Profile</span>
                </Link>
                <Link href="./Location">
                  <span>Address Book</span>
                </Link>
                <Link href="./Payment">
                  <span>My Payment Options</span>
                </Link>
              </div>
              <Link href="./order" className="mt-[24px]">
                <span className="font-poppins text-base font-medium leading-6 ">
                  My Orders
                </span>
              </Link>
              <div className="flex flex-col gap-[8px] mt-[16px] ml-[35px]">
                <span>My Returns</span>
                <span>My Cancellations</span>
              </div>
              <Link href="./WishList" className="mt-[24px]">
                <span className="font-poppins text-base font-medium leading-6 ">
                  My WishList
                </span>
              </Link>
            </div>
            <div
              className={classNames(
                "lg:min-w-[870px] max:w-[870px] md:px-[80px] px-[20px] py-[40px] lg:mt-0 mt-[20px]",
                styles.shadow,
              )}
            >
              <span className="font-poppins text-xl font-medium leading-7 text-second-3">
                Edit Your Profile
              </span>
              <div className="md:flex block gap-[50px]">
                <div className="mt-[16px] flex flex-col  gap-[24px]">
                  <Input
                    text="First Name"
                    type="name"
                    value={firstName}
                    placeholder={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    text=" Email"
                    type="email"
                    placeholder={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-[16px] flex flex-col gap-[24px]">
                  <Input
                    text="Last Name"
                    type="name"
                    placeholder={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Input
                    text="Address"
                    type="address"
                    placeholder={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-[24px]">
                <span className="font-poppins text-base font-normal leading-6">
                  Password Changes
                </span>
                <div className="flex flex-col gap-[16px] mt-[8px] w-full">
                  <InputPass
                    type="password"
                    placeholder="Current Passwod"
                    required
                  />
                  <InputPass
                    type="password"
                    placeholder="New Passwod"
                    required
                  />
                  <InputPass
                    type="password"
                    placeholder="Confirm New Passwod"
                    required
                  />
                </div>
              </div>
              <div className="mt-[24px] flex justify-end gap-[32px] items-center">
                <button
                  type="button"
                  className="font-poppins text-base font-normal leading-6"
                  onClick={HandleReMove}
                >
                  Cancel
                </button>
                <Button
                  title="Save Changes"
                  classCustom="px-[48px] py-[16px]"
                  link={handleSave}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span>Loading....</span>
      )}
    </div>
  );
}
export default memo(Account);
