import React from 'react'
import { Link } from 'react-router-dom'
import banner4 from '../../img/banner4.png'

const BannerCarousel = () => {
  return (
    <div className="mt-15 mb-15">
      <div className="w-full h-full">
        <Link to="/blog">
          <img
            src={banner4}
            alt="banner4"
            className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      </div>
    </div>
  )
}

export default BannerCarousel
