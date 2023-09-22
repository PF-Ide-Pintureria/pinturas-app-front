import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const Favorities = () => {
  const favorites = useSelector((state) => state.allFavorites)

  return (
    <div className="container mx-auto px-4">
      {' '}
      <li>
        <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
          <span className=" text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <span>Favoritos</span>
        </p>
      </li>
      <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-tertiary grid grid-cols-2">

        {
          favorites.length > 0
            ? (
                favorites.map((favorite) => (
                <div key={favorite.id}>
                  <FavoriteCard
                    id={favorite.idProduct}
                    image={favorite.image}
                    name={favorite.name}
                    stock={favorite.stock}
                    active={favorite.active}
                    price={favorite.price}
                  />
                </div>
                ))
              )
            : (
              <p className="flex items-center space-x-3 text-gray-500 p-2 ">
                No tienes favoritos
              </p>
              )}
      </div>
      <div className="flex justify-between m-10">
        <Link to="/products">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Favorities
