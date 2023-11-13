import React, { memo } from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Button from "@/components/App/Button/ButtonCart";
import RatingDisplay from "@/components/App/Button/RatingDisplay";

function CardSales({ products }) {
  const router = useRouter();
  const HandleAddCart = () => {
    // eslint-disable-next-line no-console
    console.log("Add to Cart");
  };

  const HandleAddWishList = () => {
    router.push("/WishList");
  };

  const HandleView = () => {
    router.push("/id");
  };
  const maxProducts = 4;

  return (
    <div className="mt-[60px] grid xl:grid-cols-4 lg:grid-cols-3 gap-[44px] sm:grid-cols-2 grid-cols-1 justify-center">
      {products &&
        products.slice(0, maxProducts).map((item, index) => {
          return (
            <div className=" " key={item}>
              <div className=" min-w-[270px]  min-h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
                <Link href="./product">
                  <Image
                    src={item.image}
                    alt={index}
                    width={160}
                    height={160}
                    priority
                    className="object-contain"
                  />
                </Link>
                <Button title="Add to cart" link={HandleAddCart} />
                <div className="!absolute top-3 right-3 flex flex-col">
                  <button type="button" onClick={HandleAddWishList}>
                    <Heart className="rounded-full bg-white p-1.5" size={32} />
                  </button>
                  <button type="button" onClick={HandleView}>
                    <Eye className="rounded-full bg-white p-1.5 " size={32} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-[8px] mt-4">
                <h3 className="text-base font-bold font-poppins text-text-2 truncate ">
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
                <div className="flex  ">
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
export default memo(CardSales);

CardSales.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
