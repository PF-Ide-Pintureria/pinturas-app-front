import Featured from '../Featured/Featured'
// import featuredBanner from '@img/featured-banner.png'
import React from 'react'
import { useSelector } from 'react-redux'

const FeaturedContainer = () => {
  const bestSellers = useSelector((state) => state.bestSell)

  return (
    <section className="relative flex flex-col items-center w-full bg-turquoise text-white">
      <div className="absolute bottom-full left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="relative block w-[calc(135%+1.3px)] fill-turquoise" viewBox="0 0 1200 120">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center w-[93%] mb-[100px]">
        {/* <img
          src={featuredBanner}
          alt="banner"
          className="w-full h-[120px] min-h-[100px] md:w-full object-cover"
        /> */}
        <h2 className="text-[clamp(1rem,calc(0.75rem+5vw),4rem)]">LOS MÁS VENDIDOS</h2>
        {/* <div className="container mt-10 mx-auto justify-center"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center mt-10 w-full">
          {
            bestSellers.map((bestSeller) => (
              <Featured
                key={bestSeller.idProduct}
                id={bestSeller.idProduct}
                image={bestSeller.image}
                name={bestSeller.name}
                price={bestSeller.price}
                prodpackage={bestSeller.prodpackage}
              />
            ))
          }
        </div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default FeaturedContainer
