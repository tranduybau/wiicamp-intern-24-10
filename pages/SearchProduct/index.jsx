"use client";

import React, { memo } from "react";
import { toast } from "react-toastify";
import { Eye, Heart } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import Button from "@/components/App/Button/ButtonCart";
import RatingDisplay from "@/components/App/Button/RatingDisplay";

import useCartStore from "@/Store/CartStore";

function SearchProduct({ products }) {
  const { addToCart } = useCartStore();

  const handleAddCart = (productId) => {
    addToCart(productId);
  };

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

  return (
    <div className="mt-[60px] gap-[44px] grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center container mb-[140px]">
      <Head>
        <title>Search - Exclusive</title>
        <meta name="description" content="Search products by name's" />
      </Head>
      {products &&
        products.map((item, index) => {
          return (
            <div className="mb-[16px]" key={item}>
              <div className=" min-w-[270px] h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
                <Link href={`${item.id}`}>
                  <Image
                    src={item.image}
                    alt={index}
                    width={160}
                    height={160}
                    priority
                    className="object-contain"
                  />
                </Link>
                <Button
                  title=" Add to cart"
                  link={() => handleAddCart(item.id)}
                />
                <div className="!absolute top-1 right-3 flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      HandleAddWishList(
                        item.id,
                        item.title,
                        item.price,
                        item.image,
                        item.rating.rate,
                        item.rating.count,
                      )
                    }
                  >
                    <Heart className="rounded-full bg-white p-1.5" size={32} />
                  </button>
                  <Link href={`/${item.id}`}>
                    <Eye className="rounded-full bg-white p-1.5 " size={32} />
                  </Link>
                </div>
                <div className="!absolute top-3 left-3">
                  {item.discount && (
                    <p className="bg-second-3 rounded  font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                      {item.discount}%
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[8px] mt-4">
                <h3 className="text-base font-bold font-poppins text-text-2 truncate">
                  {item.title}
                </h3>
                <div className="flex gap-2 text-base font-poppins font-medium ">
                  <span className="text-second-3">
                    ${item.price - (item.price * item.discount * 1) / 100}
                  </span>
                  <span className="line-through font-medium opacity-50">
                    ${item.price}
                  </span>
                </div>
                <div className="flex">
                  <p className="text-second-4 flex mr-2">
                    <RatingDisplay rate={item.rating.rate} />
                  </p>
                  <p className="font-medium opacity-50 font-poppins text-base">
                    ({item.rating.count})
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default memo(SearchProduct);

const addDiscountById = (data) => {
  const array = [...data];
  return array.map((item) => {
    return {
      ...item,
      discount: 10, // hardcode discount = 10
    };
  });
};

export async function getServerSideProps({ query }) {
  const searchQuery = query.q || "";

  const response = await fetch(`https://fakestoreapi.com/products`);

  const rawData = await response.json();

  const filteredProducts = addDiscountById(rawData).filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    props: {
      products: filteredProducts,
    },
  };
}

SearchProduct.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
