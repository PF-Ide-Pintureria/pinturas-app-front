import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productById } from '../../redux/actions/Products/productById'

const Featured = ({ id, name, image, price, prodpackage }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDetailClick = () => {
    dispatch(productById(id))
    navigate(`/products/${id}`)
  }

  return (
    <div className="w-64 h-96  flex flex-col items-center text-secondary justify-center bg-tertiary rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105">
      <div>
        <img src={image} alt="image" className="w-40 h-48 mx-auto" />
        <h3 className="text-center text-xl w-52 my-1">{name}</h3>
        <h4 className="text-center w-52">$ {price}</h4>
        <h4 className="text-center w-52">{prodpackage}</h4>
        <button
          onClick={handleDetailClick}
          className="relative inline-flex items-center justify-center p-0.5 mt-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
          <span className="relative inline-flex items-center justify-center px-5 py-2.5 transition-all ease-in duration-7 w-52 rounded-md group-hover:bg-opacity-0">
            Ver Producto
          </span>
        </button>
      </div>
    </div>
  )
}

export default Featured
