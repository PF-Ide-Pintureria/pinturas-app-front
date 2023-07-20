import { NavLink } from "react-router-dom";
import React from "react";

const Products = ({ name, image, price, prodpackage }) => {
  return (
    <div className="w-72 h-100 m-2 flex flex-col items-center text-secondary justify-center bg-tertiary rounded-3xl">
      <NavLink to="/products/id">
        <img src={image} alt="image" className="w-52 mx-auto" />
        <h3 className="text-center text-xl w-52">{name}</h3>
        <h4 className="text-center w-52">{price}</h4>
        <h4 className="text-center w-52">{prodpackage}</h4>
        <button className="relative inline-flex items-center justify-center p-0.5 mt-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue-600 w-52 rounded-md group-hover:bg-opacity-0">
            Ver Producto
          </span>
        </button>
      </NavLink>
    </div>
  );
};

export default Products;
