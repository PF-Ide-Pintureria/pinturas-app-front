import Featured from '../Featured/Featured'
import featuredBanner from '../../img/featured-banner.png'
import React from 'react'
import { useSelector } from 'react-redux'

const FeaturedContainer = () => {
  const bestSellers = useSelector((state) => state.bestSell)

  return (
    <div className="flex  justify-center w-full m-auto">
      <div className="flex flex-col m-0 w-full">
        <img
          src={featuredBanner}
          alt="banner"
          className="w-full h-[120px] min-h-[100px] md:w-full object-cover mt-2"
        />
        <div className="container mt-10 mx-auto justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {bestSellers.map((bestSeller) => (
              <div key={bestSeller.idProduct}
              className="bg-violet-300 p-4 mb-4 rounded-md shadow-md"
            >
              <Featured
                id={bestSeller.idProduct}
                image={bestSeller.image}
                name={bestSeller.name}
                price={bestSeller.price}
                prodpackage={bestSeller.prodpackage}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedContainer
