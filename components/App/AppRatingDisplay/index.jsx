import React from "react";
import { Star } from "lucide-react";
import PropTypes from "prop-types";

function RatingDisplay({ rate }) {
  const fullStars = Math.floor(rate);
  const halfStar = rate - fullStars >= 0.5;

  const stars = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star className="fill-current" size={20} />);
  }

  if (halfStar) {
    stars.push(<Star className="fill-current" size={20} />);
  }

  const emptyStars = 5 - stars.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star size={20} />);
  }

  return (
    <div className="flex">
      {stars.map((star, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default RatingDisplay;

RatingDisplay.propTypes = {
  rate: PropTypes.number.isRequired,
};
