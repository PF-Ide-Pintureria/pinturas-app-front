import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { saveReview } from "../../redux/actions/Review/postSaveReview";
import Rating from "../Reviews/Rating";
import "./Rating.css";
import Swal from "sweetalert2";

const ReviewForm = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [isReviewFocused, setIsReviewFocused] = useState(false);
  const reviewTextRef = useRef(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const dispatch = useDispatch();

  const handleReviewInput = () => {
    const text = reviewTextRef.current.innerText;
    setCharacterCount(text.length);
    setReviewText(text);
  };

  const handleReviewFocus = () => {
    setIsReviewFocused(true);
  };

  const handleReviewBlur = () => {
    setIsReviewFocused(false);
  };

  const handleSaveChanges = () => {
    if (ratingValue > 0) {
      const userReviewData = {
        rating: ratingValue,
        reviewText: reviewText,
      };
      dispatch(saveReview(userReviewData)); // Llamada a la acción saveReview utilizando el dispatcher de Redux
    } else {
      alert("Por favor, selecciona una estrella antes de guardar los cambios.");
    }
  };

  return (
    <div>
      <div className="rating">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://arnoldmadrid.com/wp-content/uploads/2015/01/Captura-de-pantalla-2015-01-12-a-las-11.51.26.png"
            alt="Product"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
            ¿Qué te pareció tu producto?
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Da la puntuación a tu producto
          </p>
          <Rating onRatingSelected={(rating) => setRatingValue(rating)} />
        </div>
      </div>
      <div className="rating">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black ">
            Cuéntanos más acerca de tu producto
          </h5>
          <p className="mb dark:text-gray-400">Da tu opinión del producto</p>
          <div>
            <div
              className={`review-container ${
                isReviewFocused ? "review-container-focused" : ""
              }`}
            >
              <div
                ref={reviewTextRef}
                className={`review-text ${
                  characterCount === 0 ? "placeholder-text" : ""
                }`}
                contentEditable="true"
                onFocus={handleReviewFocus}
                onBlur={handleReviewBlur}
                onInput={handleReviewInput}
              />
              {characterCount === 0 && (
                <p className="text-holder">Escribe aquí tu opinión...</p>
              )}
            </div>
            <div className="character-counter">
              {characterCount} / 1500 caracteres
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          type="button"
          disabled={ratingValue === 0} // El botón estará deshabilitado solo cuando ratingValue sea igual a cero
          onClick={handleSaveChanges}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-pointer "
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
