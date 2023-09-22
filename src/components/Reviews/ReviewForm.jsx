import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveReview } from '../../redux/actions/Review/postSaveReview'
import Rating from '../Reviews/Rating'
import './Rating.css'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../redux/actions/Orders/getOrderById'

const ReviewForm = () => {
  const { orderId } = useParams()
  const dispatch = useDispatch()

  const [characterCount, setCharacterCount] = useState(0)
  const [isReviewFocused, setIsReviewFocused] = useState(false)
  const reviewTextRef = useRef(null)
  const [ratingValue, setRatingValue] = useState(0)
  const [ratingProduct, setRatingProduct] = useState([])
  const [reviewText, setReviewText] = useState('')

  const productsArray = ratingProduct

  useEffect(() => {
    getOrderById(orderId)(dispatch)
  }, [])

  const detail = useSelector(state => state.orderDetail)
  const productsRaw = detail?.products
  const products = productsRaw?.map((product) => JSON.parse(product))

  const handleReviewInput = () => {
    const text = reviewTextRef.current.innerText
    setCharacterCount(text.length)
    setReviewText(text)
  }

  const handleReviewFocus = () => {
    setIsReviewFocused(true)
  }

  const handleReviewBlur = () => {
    setIsReviewFocused(false)
  }

  const handleRatingSelected = (productId, rating) => {
    const index = productsArray.indexOf(productId)
    const productToSend = { id: productId, rating }

    if (index === -1) {
      productsArray.push(productToSend)
    } else {
      productsArray.splice(index, 1, productToSend)
    }

    setRatingProduct(productsArray)
  }

  console.log('Products fuera del submit', productsArray)
  const handleSaveChanges = async (event) => {
    event.preventDefault()
    const filteredReviews = []

    ratingProduct.forEach((product) => {
      const cb = (element) => element.id === product.id
      const index = filteredReviews.findIndex(cb)
      if (index > -1) {
        filteredReviews[index].rating = product.rating
      } else {
        filteredReviews.push({ ...product })
      }
    })
    const filteredReviewsJson = filteredReviews.map(product => JSON.stringify(product))
    if (ratingValue > 0) {
      const userReviewData = {
        rating: ratingValue,
        description: reviewText,
        productsReviews: filteredReviewsJson
      }
      try {
        console.log('productsReview', userReviewData.productsReviews)
        await dispatch(saveReview(userReviewData, orderId))

        await Swal.fire('Éxito', '¡Datos enviados con éxito!', 'success')

        setRatingValue(0)
        setReviewText('')
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Por favor, selecciona una estrella antes de guardar los cambios.')
    }
  }

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
                        ¿Qué te pareció tu compra?
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Da la puntuación a tu compra
                    </p>
                    <Rating
                        onRatingSelected={(rating) => setRatingValue(rating)}
                        currentRating={ratingValue}
                    />
                </div>

                <div className="grid grid-cols-3 items-center pb-10">
                    {products?.map((product) => {
                      return (
                            <div className="flex flex-col align-center" key={product.id}>
                                <img className="w-12" src={product.image} alt={product.name} />
                                <h5>{product.name}</h5>
                                <Rating
                                    onRatingSelected={(rating) => {
                                      handleRatingSelected(product.id, rating)
                                    }}
                                    currentRating={product.rating}
                                />
                            </div>
                      )
                    })}
                </div>
            </div>
            <div className="rating">
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black ">
                        Cuéntanos más acerca de tu compra
                    </h5>
                    <p className="mb dark:text-gray-400">Da tu opinión de la compra</p>
                    <div>
                        <div
                            className={`review-container ${isReviewFocused ? 'review-container-focused' : ''
                                }`}
                        >
                            <div
                                ref={reviewTextRef}
                                className={`review-text ${characterCount === 0 ? 'placeholder-text' : ''
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
                    onClick={handleSaveChanges}
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-pointer "
                >
                    Guardar cambios
                </button>
            </div>
        </div>
  )
}

export default ReviewForm
