import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../img/banner1.png'
import banner2 from '../../img/banner2.png'
import banner3 from '../../img/banner3.png'

const BannerCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    {
      src: banner1,
      link: '/products'
    },
    {
      src: banner2,
      link: '/products'
    },
    {
      src: banner3,
      link: '/products'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    )
  }

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  return (
    <div className="hidden sm:block">
      <div className="relative w-full h-80 sm:h-96 md:h-120">
        {images.map((image, index) => (
          <Link
            key={index}
            to={image.link}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="absolute w-full h-full object-cover"
            />
          </Link>
        ))}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <button
            className="w-8 h-8 p-1 bg-gray-800 bg-opacity-20 text-white rounded-full focus:outline-none"
            onClick={goToPrevImage}
          >
            &lt;
          </button>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button
            className="w-8 h-8 p-1 bg-gray-800 bg-opacity-20 text-white rounded-full focus:outline-none"
            onClick={goToNextImage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default BannerCarousel
