import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPage } from '@redux/actions/Page/setPage'
import { setCategory } from '@redux/actions/filters/setCategory'
// Banners
import category2 from '@img/especiales.png'
import category3 from '@img/esmalte.png'
import category4 from '@img/cal.png'
import category5 from '@img/fondos.png'
import category6 from '@img/tintas.png'
import category7 from '@img/ecologico.png'
import category8 from '@img/industriales.png'
import category9 from '@img/latex.png'
import category10 from '@img/impermeabilizante.png'
import category11 from '@img/fijadores.png'
import category13 from '@img/auxiliares.png'
import category14 from '@img/madera.png'

const CategoryContainer = () => {
  const dispatch = useDispatch()

  const handleCategory = (category) => {
    dispatch(setPage(1))
    dispatch(setCategory(category))
  }

  const CATEGORIES = [
    { image: category14, searchQuery: 'Linea Maderas' },
    { image: category3, searchQuery: 'Linea Esmaltes' },
    { image: category4, searchQuery: 'Linea Pinturas a la Cal' },
    { image: category5, searchQuery: 'Linea Fondos' },
    { image: category6, searchQuery: 'Linea Entonadores y Tintas' },
    { image: category7, searchQuery: 'Linea Ecologica' },
    { image: category8, searchQuery: 'Linea Esmaltes Industriales' },
    { image: category2, searchQuery: 'Linea Productos Especiales' },
    { image: category10, searchQuery: 'Linea Impermeabilizantes' },
    { image: category11, searchQuery: 'Linea Fijadores - Aditivos -' },
    { image: category9, searchQuery: 'Linea Latex' },
    // { image: category12, searchQuery: "Linea" },
    { image: category13, searchQuery: 'Linea Productos Auxiliares' }
  ]

  return (
    <section className="relative z-10 grid grid-cols-2 gap-6 my-[50px] w-[93%]">
      {
        CATEGORIES.map((category, idx) => (
          <Link
            key={idx}
            to={`/products?category=${encodeURIComponent(category.searchQuery)}`}
            onClick={() => handleCategory(category.searchQuery)}
          >
            <img
              src={category.image}
              alt={category.searchQuery}
              className="h-auto object-cover cursor-pointer rounded-3xl transition-all hover:outline hover:outline-4 hover:outline-orange hover:opacity-90"
            />
          </Link>
        ))
      }
      {/* <Link
        to={`/products?category=${encodeURIComponent(
          'Linea Bases Tintometricas'
        )}`}
        onClick={() => handleCategory('Linea Latex')}
      >
        <img
          src={category9}
          alt="category12"
          className="h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </Link> */}
    </section>
  )
}

export default CategoryContainer
