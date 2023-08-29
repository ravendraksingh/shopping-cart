import React from "react";

const RatingStars = ({ rating }) => {
  return (
    <>
      {Array(Math.floor(rating))
        .fill()
        .map(() => (
          <span className="fa fa-star yellow__star"></span>
        ))}
    </>
  );
};

export default RatingStars;
