import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPage } from '../../redux/actions/Page/setPage'
import { setCategory } from '../../redux/actions/filters/setCategory'
// Banners
import category1 from '../../img/category1.png'
import category2 from '../../img/especiales.png'
import category3 from '../../img/esmalte.png'
import category4 from '../../img/cal.png'
import category5 from '../../img/fondos.png'
import category6 from '../../img/tintas.png'
import category7 from '../../img/ecologico.png'
import category8 from '../../img/industriales.png'
// import category9 from "../../img/latex.png";
import category10 from '../../img/impermeabilizante.png'
import category11 from '../../img/fijadores.png'
import category12 from '../../img/bases.png'
import category13 from '../../img/auxiliares.png'
import category14 from '../../img/madera.png'

const CategoryContainer = () => {
  const dispatch = useDispatch()

  const handleCategory = (category) => {
    dispatch(setPage(1))
    dispatch(setCategory(category))
  }

  return (
    <div>
      <div className="flex flex-col w-full my-10">
        <div className="w-full">
          <Link
            to={`/products?category=${encodeURIComponent('Linea Latex')}`}
            onClick={() => handleCategory('Linea Latex')}
          >
            <img
              src={category1}
              alt="category1"
              className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent('Linea Maderas')}`}
              onClick={() => handleCategory('Linea Maderas')}
            >
              <img
                src={category14}
                alt="category14"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent('Linea Esmaltes')}`}
              onClick={() => handleCategory('Linea Esmaltes')}
            >
              <img
                src={category3}
                alt="category3"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Pinturas a la Cal'
              )}`}
              onClick={() => handleCategory('Linea Pinturas a la Cal')}
            >
              <img
                src={category4}
                alt="category4"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent('Linea Fondos')}`}
              onClick={() => handleCategory('Linea Fondos')}
            >
              <img
                src={category5}
                alt="category5"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Entonadores y Tintas'
              )}`}
              onClick={() => handleCategory('Linea Entonadores y Tintas')}
            >
              <img
                src={category6}
                alt="category6"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent('Linea Ecologica')}`}
              onClick={() => handleCategory('Linea Ecologica')}
            >
              <img
                src={category7}
                alt="category7"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Esmaltes Industriales'
              )}`}
              onClick={() => handleCategory('Linea Esmaltes Industriales')}
            >
              <img
                src={category8}
                alt="category8"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Productos Especiales'
              )}`}
              onClick={() => handleCategory('Linea Productos Especiales')}
            >
              <img
                src={category2}
                alt="category2"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Impermeabilizantes'
              )}`}
              onClick={() => handleCategory('Linea Impermeabilizantes')}
            >
              <img
                src={category10}
                alt="category10"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Fijadores - Aditivos -'
              )}`}
              onClick={() => handleCategory('Linea Fijadores - Aditivos -')}
            >
              <img
                src={category11}
                alt="category11"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-fulll">
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Bases Tintometricas'
              )}`}
            >
              <img
                src={category12}
                alt="category12"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
          <div className="w-full sm:w-1/2">
            <Link
              to={`/products?category=${encodeURIComponent(
                'Linea Productos Auxiliares'
              )}`}
              onClick={() => handleCategory('Linea Productos Auxiliares')}
            >
              <img
                src={category13}
                alt="category13"
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryContainer
