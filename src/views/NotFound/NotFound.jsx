import React from 'react'
import { Link } from 'react-router-dom'
import img404 from '../../img/404.png'

const NotFound = () => {
  return (
    <div className="flex flex-col mt-5 items-center justify-center min-h-screen">
      <h2 className="text-secondary text-lg mb-8">
        La página que estás buscando no parece existir
      </h2>
      <img src={img404} alt="404" className="w-90" />
      <Link to="/">
        <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm font-medium px-4 py-2 mt-8 rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform">
          Ir Página Principal
        </button>
      </Link>
    </div>
  )
}

export default NotFound
