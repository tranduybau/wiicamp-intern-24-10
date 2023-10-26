import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import FlashSale from "@/components/flashSale";
import Slider from "@/components/slider";

export default function Home({ products }) {
  return (
    <main>
      <section>
        <Slider />
      </section>

      <section>
        <FlashSale products={products} />
      </section>
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    return {
      props: {
        products: response.data,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
