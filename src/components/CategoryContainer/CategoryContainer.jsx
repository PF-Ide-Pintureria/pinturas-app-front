import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../img/category1.png";
import category2 from "../../img/category2.png";
import category3 from "../../img/category3.png";

const CategoryContainer = () => {
  return (
    <div className="flex flex-col w-full my-10">
      <div className="w-full">
        <Link to="/products?category=${Linea Latex}">
          <img
            src={category1}
            alt="category1"
            className="w-full h-auto object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <Link to="/products?category=${Linea Esmaltes}">
            <img
              src={category2}
              alt="category2"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/products?category=${Linea Maderas}">
            <img
              src={category3}
              alt="category3"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
