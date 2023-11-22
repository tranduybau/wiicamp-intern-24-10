import React from "react";
import PropTypes from "prop-types";

import MoveTop from "../components/MoveTop";

import HomePage from "./HomePage";
// import SideBar from "./SideBar";

export default function Home({ products, categories, thisMonth, ourProducts }) {
  return (
    <main>
      {/* <SideBar /> */}
      <HomePage
        products={products}
        categories={categories}
        thisMonth={thisMonth}
        ourProducts={ourProducts}
      />
      <MoveTop />
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
  const responseProduct = await fetch("https://fakestoreapi.com/products");
  const resCategories = await fetch("https://fakestoreapi.com/products");
  const resThisMonth = await fetch("https://fakestoreapi.com/products");
  const resOurProducts = await fetch("https://fakestoreapi.com/products");
  const rawDataProduct = await responseProduct.json();
  const rawDataCategory = await resCategories.json();
  const rawDataThisMonth = await resThisMonth.json();
  const rawDataOurProduct = await resOurProducts.json();
  const products = addDiscountById(rawDataProduct);
  const categories = addDiscountById(rawDataCategory);
  const thisMonth = addDiscountById(rawDataThisMonth);
  const ourProducts = addDiscountById(rawDataOurProduct);

  return {
    props: {
      products,
      categories,
      thisMonth,
      ourProducts,
    },
  };
}

Home.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  thisMonth: PropTypes.instanceOf(Array).isRequired,
  ourProducts: PropTypes.instanceOf(Array).isRequired,
};
