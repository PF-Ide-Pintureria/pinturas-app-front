import React from 'react'
import ReviewForm from '@components/Reviews/ReviewForm'

const ReviewsPage = () => {
  return (
    <div className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      {/* <Reviews /> */}
      <ReviewForm />
    </div>
  )
}

export default ReviewsPage
