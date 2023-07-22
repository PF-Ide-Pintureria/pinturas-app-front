import Featured from "../Featured/Featured";
import featuredBanner from "../../img/featured-banner.png";
import React from "react";
import { useSelector } from "react-redux";

const FeaturedContainer = () => {
  const bestSellers = useSelector((state) => state.bestSell);
  
  return (
    <div className="flex  w-full m-auto">
      <div className="flex flex-col justify-center m-0 w-full">
        
        <img src={featuredBanner} alt="banner" className="w-full" />
        <div className="flex w-4/5 column-4 mt-4 self-center justify-around object-center">
          {bestSellers.map((bestSeller) => (
            <Featured
              key={bestSeller.id}
              id={bestSeller.id}
              image={bestSeller.image}
              name={bestSeller.name}
              price={bestSeller.price}
              prodpackage={bestSeller.prodpackage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContainer;
