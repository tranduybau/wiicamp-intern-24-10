import React from "react";
import PropTypes from "prop-types";

import axios from "../libraries/axiosClient";

// import { Inter } from "next/font/google";
import HomePage from "./HomePage";
import SideBar from "./SideBar";

// const inter = Inter({ subsets: ["latin"] });
const apiName = "https://fakestoreapi.com/products";

export default function Home({ products }) {
  return (
    // <main className={`p-24 bg-white ${inter.className}`}>
    //   <SideBar />
    //   <HomePage />
    // </main>
    <main>
      <SideBar />
      <HomePage products={products} />
    </main>
  );
}

const addDiscountById = (data) => {
  const array = [...data];
  return array.map((item) => {
    return {
      ...item,
      discount: 10, // hardcode discount = 10
    };
  });
};

export async function getServerSideProps() {
  const response = await axios.get(apiName);
  const products = addDiscountById(response.data);

  return {
    props: {
      products,
    },
  };
}

Home.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
