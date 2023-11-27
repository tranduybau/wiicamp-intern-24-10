// no import swpier
import React, { memo } from "react";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import ArrowIcon from "@/components/App/AppArrow";
import Button from "@/components/App/AppButtonCart";
import RatingDisplay from "@/components/App/AppRatingDisplay";
import CurrencyFormatter from "@/components/FomatNumber";

import useCartStore from "@/Store/CartStore";

function CardSales({ products }) {
  const router = useRouter();
  const { addToCart } = useCartStore();

  const handleAddCart = (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please log in!", 1.5);
      router.push("/Login");
      return;
    }
    try {
      addToCart(productId);
      toast.success("Add to cart successfully", 1.5);
    } catch (error) {
      toast.warning("Add to cart failed!!", 1.5);
    }
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

  const maxProducts = 8;

  return (
    <>
      <div className="flex mt-[20px] justify-between">
        <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl items-center tracking-[1.44px] leading-[48px]">
          Explore Our Products
        </h2>
        <div className="flex gap-2 items-center">
          <ArrowIcon
            icon={
              <ArrowLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
            }
          />
          <ArrowIcon
            icon={
              <ArrowRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
            }
          />
        </div>
      </div>
      <div className="mt-[60px] gap-[44px] sm:grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-col items-center justify-center">
        {products &&
          products.slice(0, maxProducts).map((item, index) => {
            return (
              <div className="mb-[16px]" key={item.id}>
                <div className="min-w-[270px] h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
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
                      id="heartOurproduct"
                      aria-label="heartOurproduct"
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
                      <Heart
                        className="rounded-full bg-white p-1.5"
                        size={32}
                      />
                    </button>
                    <Link href={`/${item.id}`} aria-label="view">
                      <Eye className="rounded-full bg-white p-1.5 " size={32} />
                    </Link>
                  </div>
                  <div className="!absolute top-3 left-3">
                    {item.discount && (
                      <p className="bg-green rounded  font-poppins text-xs font-normal py-[4px] px-[12px] text-text-1">
                        {item.discount}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] mt-4">
                  <h3 className="text-base font-bold font-poppins text-text-2 sm:truncate ">
                    {item.title}
                  </h3>
                  <div className="flex gap-2 text-base font-poppins font-medium ">
                    <span className="text-second-3">
                      <CurrencyFormatter
                        amount={
                          item.price - (item.price * item.discount * 1) / 100
                        }
                      />
                    </span>
                    <span className="line-through font-medium opacity-50">
                      <CurrencyFormatter amount={item.price} />
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-second-4 flex mr-2">
                      <RatingDisplay rate={item.rating.rate} />
                    </span>
                    <span className="font-medium opacity-50 font-poppins text-base">
                      ({item.rating.count})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default memo(CardSales);

CardSales.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
