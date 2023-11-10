import React, { memo } from "react";
import PropTypes from "prop-types";

function Card({ products }) {
  // eslint-disable-next-line no-console
  console.log("productDetails", products);
  return <div>aa</div>;
}
export default memo(Card);

Card.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
