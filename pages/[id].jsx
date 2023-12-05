import React, { memo } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Heart, Minus, Plus, RefreshCcw, Truck } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import Button from "@/components/App/AppButtonContain";
import RatingDisplay from "@/components/App/AppRatingDisplay";

import axiosClient from "@/libraries/axiosClient";

function ProductDetails({ product }) {
  const listImg = [
    {
      id: "1",
      img: product ? `${product.image}` : "",
    },
    {
      id: "2",
      img: product ? `${product.image}` : "",
    },
    {
      id: "3",
      img: product ? `${product.image}` : "",
    },
    {
      id: "4",
      img: product ? `${product.image}` : "",
    },
  ];

  const [counter, setCounter] = React.useState(1);

  const HandleIncrease = () => {
    setCounter(counter + 1);
  };

  let HandleDecrease = () => {
    setCounter(counter - 1);
  };

  if (counter <= 1) {
    HandleDecrease = () => setCounter(1);
  }

  const HandleAddWishList = (id, title, price, image, rate, count) => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlists")) || [];

    const isProductInWishlist = existingWishlist.some((item) => {
      return item.id === id;
    });

    if (isProductInWishlist) {
      toast.error("The product already exists in the wishlist!");
    } else {
      const productToAdd = {
        id,
        title,
        price,
        discount: 10,
        image,
        rating: {
          rate,
          count,
        },
      };
      existingWishlist.push(productToAdd);
      localStorage.setItem("wishlists", JSON.stringify(existingWishlist));

      toast.success("Add to wishlist successfully");
    }
  };

  const [selectedSize, setSelectedSize] = React.useState(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const colors = [
    { id: 1, color: "green" },
    { id: 2, color: "second-3" },
  ];
  const [selectedColor, setSelectedColor] = React.useState(null);

  return (
    <div>
      <Head>
        <title>{product.title} - Exclusive</title>
        <meta name="description" content="Create an account" />
      </Head>
      {product ? (
        <div
          className="container mt-[80px] mb-[140px] xl:px-0 px-[16px] "
          key={product.id}
        >
          <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5 ">
            <Link href="./" className="opacity-50">
              Home
            </Link>
            <p className="opacity-50">/</p>
            <Link href="./" className="opacity-50">
              Gaming
            </Link>
            <p className="opacity-50">/</p>
            <Link href="./Contact" className="active:text-text-2 truncate">
              {product.title}
            </Link>
          </div>
          <div className="lg:flex block lg:mt-[80px] mt-[40px]">
            <div className="flex">
              <div className=" flex flex-col gap-[16px] ">
                {listImg &&
                  listImg.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="object-contain md:min-w-[170px] md:min-h-[138px] max-w-[170px] max-h-[138px] bg-white flex justify-center items-center "
                      >
                        <Image
                          src={item.img}
                          alt={index}
                          width={121}
                          height={141}
                          priority
                          className="object-contain"
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="ml-[30px] md:min-w-[500px] md:min-h-[600px] max-w-[500px] max-h-[600px] bg-white flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fluid
                  width={446}
                  height={315}
                  priority
                  className="object-contain mx-[27px]"
                />
              </div>
            </div>
            <div className="lg:ml-[71px] ml-0 flex flex-col gap-[40px] lg:mt-0 mt-[20px]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                  <span className="font-inter text-2xl font-semibold leading-6 tracking-[0.72px]">
                    {product.title}
                  </span>
                  <div className="flex items-center font-poppins text-sm font-normal leading-[21px]">
                    <p className="text-second-4 flex mr-2">
                      <RatingDisplay rate={product.rating.rate} />
                    </p>
                    <span className=" opacity-50 lg:ml-[8px] ml-0">
                      ({product.rating.count} Reviews)
                    </span>
                    <span className="opacity-50 sm:ml-[16px] ml-[2px]">|</span>
                    <span className="opacity-60 sm:ml-[16px] ml-[2px] text-text-3">
                      {product.countInStok > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <span className="font-inter text-2xl font-normal leading-6 tracking-[0.72px]">
                    ${product.price}
                  </span>
                </div>
                <span className="font-poppins text-sm font-normal leading-[21px]">
                  {product.description}
                </span>
                <p className="border-b border-solid border-inherit " />
                <div className="flex gap-[24px]">
                  <span className="font-inter text-xl font-normal leading-5 tracking-[0.6px]">
                    Colours:
                  </span>
                  <div className="flex gap-[8px]">
                    {colors.map((item) => (
                      <div
                        key={item.id}
                        className={`${
                          item.color === selectedColor
                            ? "border-black border-2 w-[20px] h-[20px]"
                            : `bg-${item.color} `
                        }  flex items-center justify-center rounded-full w-[20px] h-[20px] relative `}
                      >
                        <div
                          className={`w-full h-full rounded-full  ${
                            selectedColor === item.color
                              ? `border-white bg-${item.color} border-2`
                              : `border-white `
                          } absolute `}
                        />
                        <input
                          name="color"
                          type="radio"
                          id={`${item.color}`}
                          value={item.color}
                          onChange={() => setSelectedColor(item.color)}
                          className="w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex xl:gap-[24px] gap-[12px] items-center">
                  <span className="font-inter text-xl font-normal leading-5 tracking-[0.6px]">
                    Size:
                  </span>
                  <div className="flex xl:gap-[16px] gap-[8px]">
                    {sizes.map((item) => {
                      return (
                        <label
                          key={item}
                          htmlFor={`size${item}`}
                          className={`${
                            selectedSize === item
                              ? "bg-second-3 text-text-1 border-none"
                              : "border-black-0/50"
                          } font-poppins border border-solid border-inherit min-w-[32px] min-h-[32px] rounded flex justify-center items-center cursor-pointer `}
                        >
                          <input
                            onChange={() => {
                              setSelectedSize(item);
                            }}
                            className="hidden"
                            type="radio"
                            id={`size${item}`}
                            name="size"
                            value={item}
                          />
                          <span className="text-[14px] leading-[14px]">
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex ">
                    <button
                      type="button"
                      className="border border-solid border-inherit px-[8px] py-[10px] hover:bg-second-3 hover:text-text-1 rounded-l-md"
                      onClick={HandleDecrease}
                    >
                      <Minus size={24} />
                    </button>
                    <input
                      min="1"
                      value={counter}
                      type="text"
                      className=" border border-solid border-inherit lg:max-w-[75px] max-w-[50px] min-h-[44px] font-poppins text-xl font-medium leading-7 lg:px-[25px] px-[15px]"
                    />
                    <button
                      type="button"
                      className="border border-solid border-inherit lg:px-[8px] px-0 py-[10px]  hover:bg-second-3 hover:text-text-1  rounded-r-md"
                      onClick={HandleIncrease}
                    >
                      <Plus />
                    </button>
                  </div>
                  <Button
                    title="Buy Now"
                    classCustom="md:px-[48px] px-[20px] ml-[16px] rounded py-[10px]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      HandleAddWishList(
                        product.id,
                        product.title,
                        product.price,
                        product.image,
                        product.rating.rate,
                        product.rating.count,
                      )
                    }
                    className="rounded p-2 border ml-[19px] flex justify-center items-center w-[40px] h-[40px]"
                  >
                    <Heart size={32} />
                  </button>
                </div>
              </div>
              <div className="max-w-[399px] min-h-[180px] border rounded flex flex-col gap-[16px]">
                <div className="ml-[16px] mt-[24px] flex gap-[16px] items-center">
                  <Truck size={40} />
                  <div className="flex flex-col gap-[8px]">
                    <span className="font-poppins text-base font-medium leading-6">
                      Free Delivery
                    </span>
                    <span className="font-poppins text-xs font-medium leading-[18px] underline">
                      Enter your postal code for Delivery Availability
                    </span>
                  </div>
                </div>
                <p className="border-b" />
                <div className="ml-[16px] flex gap-[16px]">
                  <RefreshCcw size={40} />
                  <div className="flex flex-col gap-[8px]">
                    <span className="font-poppins text-base font-medium leading-6">
                      Return Delivery
                    </span>
                    <span className="font-poppins text-xs font-medium leading-[18px]">
                      Free 30 Days Delivery Returns.
                      <Link href="./Detail" className="underline ml-[2px]">
                        Details
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
export default memo(ProductDetails);

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(req) {
  try {
    const { params } = req;
    const response = await axiosClient.get(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    return {
      props: {
        product: response.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("err", error);
    return {
      notFound: true,
    };
  }
}

ProductDetails.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
