import React, { memo } from "react";
import PropTypes from "prop-types";

function FomatNumber({ amount }) {
  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return (
    <span className="flex items-center">{numberFormat.format(amount)}</span>
  );
}
export default memo(FomatNumber);

FomatNumber.propTypes = {
  amount: PropTypes.number.isRequired,
};
