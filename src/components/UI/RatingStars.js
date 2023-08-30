import React from "react";

const RatingStars = ({ rating }) => {
  return (
    <>
      {Array(Math.floor(rating))
        .fill()
        .map((index) => (
          <span
            className="fa fa-star yellow__star"
            key={Math.random() + "#$" + Math.random().toString()}
          ></span>
        ))}
    </>
  );
};

export default RatingStars;
