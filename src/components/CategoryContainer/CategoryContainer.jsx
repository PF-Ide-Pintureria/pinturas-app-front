import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../img/category1.png";
import category2 from "../../img/especiales.png";
import category3 from "../../img/esmalte.png";
import category4 from "../../img/cal.png";
import category5 from "../../img/fondos.png";
import category6 from "../../img/tintas.png";
import category7 from "../../img/ecologico.png";
import category8 from "../../img/industriales.png";
import category9 from "../../img/latex.png";
import category10 from "../../img/impermeabilizante.png";
import category11 from "../../img/fijadores.png";
import category12 from "../../img/bases.png";
import category13 from "../../img/auxiliares.png";
import category14 from "../../img/madera.png";

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
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category2}
              alt="category2"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category3}
              alt="category3"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category4}
              alt="category4"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category5}
              alt="category5"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category6}
              alt="category6"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category7}
              alt="category7"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category8}
              alt="category8"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category9}
              alt="category9"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category10}
              alt="category10"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category11}
              alt="category11"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category12}
              alt="category12"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/products?category=${Linea}">
            <img
              src={category13}
              alt="category13"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <Link to="/products?category=${Linea}">
          <img
            src={category14}
            alt="category14"
            className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 "
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryContainer;
