import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../img/category1.png";
import category2 from "../../img/Esmalte.png";
import category3 from "../../img/Maderas.png";
import category4 from "../../img/Fondos.png";
import category5 from "../../img/Pisos.png";
import category6 from "../../img/Piletas.png";
import category7 from "../../img//Poliuretanos.png";
import category8 from "../../img/Impermeabilizante.png";
import category9 from "../../img/Industrial.png";

const CategoryContainer = () => {
  return (
    <div className="flex flex-col w-full my-10">
      <div className="w-full">
        <Link to="/products?category=${Linea}">
          <img
            src={category1}
            alt="category1"
            className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
          />
        </Link>
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category2}
              alt="category2"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category3}
              alt="category3"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>{" "}
      <div className="flex w-full">
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category4}
              alt="category4"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category5}
              alt="category5"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>{" "}
      <div className="flex w-full">
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category6}
              alt="category6"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category7}
              alt="category7"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>{" "}
      <div className="flex w-full">
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category8}
              alt="category8"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/products?category=${Linea}">
            <img
              src={category9}
              alt="category9"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
