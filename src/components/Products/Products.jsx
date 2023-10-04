import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = ({ idProduct, name, image, price, prodpackage }) => {
  return (
    <div className="w-64 h-96 flex flex-col items-center text-secondary justify-center bg-tertiary rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
        <img src={image} alt="image" className="w-40 h-48 mx-auto object-contain" />
        <h3 className="text-center text-xl w-52 my-1 h-14 overflow-hidden">{name}</h3>
        <h4 className="text-center w-52 text-primary">$ {price}</h4>
        <h4 className="text-center w-52">{prodpackage}</h4>
        <NavLink
          to={`/products/${idProduct}`}
          className="relative inline-flex items-center justify-center p-0.5 mt-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <button className="relative inline-flex items-center justify-center px-5 py-2.5 duration-7 w-52 rounded-md ">
            Ver Producto
          </button>
        </NavLink>
    </div>
  )
}

export default Products
