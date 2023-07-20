import Featured from "../Featured/Featured";
import img from "../../img/pintura.png";
import featuredBanner from "../../img/featured-banner.png";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Paginated from "../Paginated/Paginated";
const FeaturedContainer = () => {
  return (
    <div className="flex  w-full m-auto">
      <div className="flex flex-col justify-center m-0 w-full">
        <SearchBar />
        <img src={featuredBanner} alt="banner" className="w-full" />
        <div className="flex w-4/5 column-4 mt-4 self-center justify-around object-center">
          <Featured
            image={img}
            name="Lorem Ipsum"
            price="$ 2.340"
            prodpackage="20 Litros"
          />
          <Featured
            image={img}
            name="Lorem Ipsum"
            price="$ 1.890"
            prodpackage="1 Litro"
          />
          <Featured
            image={img}
            name="Lorem Ipsum"
            price="$ 3.660"
            prodpackage="5 Litros"
          />
          <Featured
            image={img}
            name="Lorem Ipsum"
            price="$ 890"
            prodpackage="0,5 Litros"
          />
        </div>
        <Paginated />
      </div>
    </div>
  );
};

export default FeaturedContainer;
