import React, { memo } from "react";
import { Eye, ShoppingCart, Star, Trash2 } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ButtonCart from "@/components/App/Button/ButtonCart";
import Button from "@/components/App/Button/Outline";
import RatingDisplay from "@/components/App/Button/RatingDisplay";

import useCartStore from "@/Store/CartStore";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = React.useState([]);

  React.useEffect(() => {
    const WishData = localStorage.getItem("wishlists");

    setWishlistItems(WishData ? JSON.parse(WishData) : []);
  }, []);

  const listCard = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      discount: "40",
      price: "160",
      img: "/img/toys.png",
      star: <Star className="fill-current " size={20} />,
      review: "88",
    },
    {
      id: "2",
      name: "AK-900 Wired Keyboard",
      price: "1160",
      img: "/img/keyboard.png",
      star: <Star className="fill-current" size={20} />,
      review: "75",
    },
    {
      id: "3",
      name: "IPS LCD Gaming Monitor",
      discount: "30",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
    {
      id: "4",
      name: "IPSS-Series Comfort Chair",
      price: "400",
      img: "/img/screen.png",
      star: <Star className="fill-current" size={20} />,
      review: "99",
    },
  ];

  const HandleView = () => {
    // eslint-disable-next-line no-console
    console.log("View");
  };

  const { addToCart } = useCartStore();
  const handleAddCart = (productId) => {
    addToCart(productId);
  };

  const HandleDelete = (id) => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlists")) || [];

    const updatedWishlist = existingWishlist.filter((item) => item.id !== id);

    localStorage.setItem("wishlists", JSON.stringify(updatedWishlist));

    setWishlistItems(updatedWishlist);
  };

  const handleClearWishlist = () => {
    localStorage.removeItem("wishlists");
    setWishlistItems([]);
  };

  return (
    <div className="container mt-[80px] lg:px-0 px-[16px]">
      <Head>
        <title>WishList - Exclusive</title>
        <meta name="description" content="Add to WishList" />
      </Head>
      <div className="flex items-center justify-between mb-[60px]">
        <p className="font-poppins text-xl font-normal leading-6 text-text-2">
          Wishlist ({wishlistItems.length})
        </p>
        <Button title="Move All To Bag" link={handleClearWishlist} />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[26px]  justify-center">
        {wishlistItems &&
          wishlistItems.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="bg-white min-w-[270px]  h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
                  <Link href={`${item.id}`}>
                    <Image
                      src={item.image}
                      alt={index}
                      width={160}
                      height={160}
                      priority
                    />
                  </Link>
                  <ButtonCart
                    classCustom="flex justify-center gap-[8px]"
                    icon={<ShoppingCart />}
                    title="Add to cart"
                    link={() => handleAddCart(item.id)}
                  />
                  <div className="!absolute top-3 right-3">
                    <button
                      type="button"
                      id="delete"
                      aria-label="delete"
                      className="rounded-full bg-white p-1.5 cursor-pointer"
                      onClick={() => HandleDelete(item.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                  <div className="!absolute top-3 left-3">
                    {item.discount && (
                      <div className="bg-second-3 p-0.5 rounded ">
                        <p className="font-poppins text-xs font-normal py-1 px-3 text-text-1">
                          -{item.discount}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-base font-bold font-poppins text-text-2 md:truncate">
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
                </div>
                <div className="flex  ">
                  <span className="text-second-4 flex mr-2">
                    <RatingDisplay rate={item.rating.rate} />
                  </span>
                  <span className="font-medium opacity-50 font-poppins text-base">
                    ({item.rating.count})
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-[80px] flex justify-between">
        <div className="flex gap-2 text-center items-center">
          <p className="w-5 h-10 bg-second-3 rounded " />
          <p className="text-text-2 font-poppins text-xl font-normal leading-6 not-italic">
            Just For You
          </p>
        </div>
        <Button title="See All" link={HandleView} />
      </div>
      <div className="mt-[60px] mb-[140px] gap-[44px] grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 justify-center">
        {listCard.map((item, index) => {
          return (
            <div className="mb-[30px]" key={item.id}>
              <div className="bg-second-2 min-w-[270px]  min-h-[250px] shadow-none group relative inline-flex justify-center overflow-hidden items-center">
                <Link href="./product/id">
                  <Image
                    src={item.img}
                    alt={index}
                    width={160}
                    height={160}
                    priority
                  />
                </Link>

                <ButtonCart
                  classCustom="flex justify-center gap-[8px]"
                  icon={<ShoppingCart />}
                  title="Add to cart"
                  link={handleAddCart}
                />
                <div className="!absolute top-3 right-3">
                  <button
                    type="button"
                    onClick={HandleView}
                    className="rounded-full bg-white p-1.5"
                  >
                    <Eye />
                  </button>
                </div>
                <div className="!absolute top-3 left-3">
                  {item.new && (
                    <div className="bg-green p-0.5 rounded ">
                      <p className="font-poppins text-xs font-normal py-1 px-3 text-text-1">
                        {item.new}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-base font-bold font-poppins text-text-2 ">
                  {item.name}
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
                    {item.star}
                    {item.star}
                    {item.star}
                    {item.star}
                    {item.star}
                  </p>
                  <p className="font-medium opacity-50 font-poppins text-base">
                    {item.review}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default memo(Wishlist);
