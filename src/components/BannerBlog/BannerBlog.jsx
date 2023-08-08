import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../img/banner4.png";

const BannerCarousel = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 md:h-120">
      <Link to="/blog">
        <img
          src={banner4}
          alt="banner4"
          className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default BannerCarousel;
