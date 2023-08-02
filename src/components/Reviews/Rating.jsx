import React, { useState, useEffect } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem("rating");
    return storedRating ? parseInt(storedRating, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("rating", rating.toString());
  }, [rating]);

  const handleRatingChange = (value) => {
    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <label
          key={value}
          className={`heart ${rating >= value ? "active" : ""}`}
          onClick={() => handleRatingChange(value)}
        >
          &#x2605;
        </label>
      ))}
    </div>
  );
};

export default Rating;
