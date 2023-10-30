import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import WishList from "@/components/wishList";

function WhishListPage(props) {
  const { wishList } = props;

  return <WishList wishList={wishList} />;
}

export default WhishListPage;

WhishListPage.propTypes = {
  wishList: PropTypes.instanceOf(Array).isRequired,
};

export async function getServerSideProps() {
  try {
    const wishList = await axios.get("https://fakestoreapi.com/products?limit=4");

    return {
      props: {
        wishList: wishList.data,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
