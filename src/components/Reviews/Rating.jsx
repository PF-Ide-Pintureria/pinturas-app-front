/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import './Rating.css'

const Rating = ({ onRatingSelected, currentRating }) => {
  const [rating, setRating] = useState(currentRating)

  useEffect(() => {
    setRating(currentRating)
  }, [currentRating])

  const handleRatingChange = (value) => {
    if (value === rating) {
      setRating(0)
      onRatingSelected(0)
    } else {
      setRating(value)
      onRatingSelected(value)
    }
  }

  return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <label
                    key={value}
                    className={`heart ${rating >= value ? 'active' : ''}`}
                    onClick={() => handleRatingChange(value)}
                >
                    &#x2605;
                </label>
            ))}
        </div>
  )
}

export default Rating
