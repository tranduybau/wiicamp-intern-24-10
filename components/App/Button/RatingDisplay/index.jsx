import React from "react";
import { Star } from "lucide-react";

// eslint-disable-next-line react/prop-types
function RatingDisplay({ rate }) {
  const fullStars = Math.floor(rate); // Số sao màu đầy
  const halfStar = rate - fullStars >= 0.5; // Có nửa sao màu không?

  // Tạo mảng các sao màu và không màu
  const stars = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="fill-current" size={20} />);
  }

  if (halfStar) {
    stars.push(<Star key={fullStars} className="fill-current" size={20} />);
  }

  const emptyStars = 5 - stars.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={i + fullStars} size={20} />);
  }

  return (
    <div className="flex">
      {stars.map((star) => (
        <span key={star}>{star}</span>
      ))}
    </div>
  );
}

export default RatingDisplay;
