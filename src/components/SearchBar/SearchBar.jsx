import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productByName } from '@redux/actions/Products/productByName'
import { allProducts } from '@redux/actions/Products/allProducts'
import { setPage } from '@redux/actions/Page/setPage'

import { Magnifier } from '../SVG'


const SearchBar = () => {

  const thisPage = useSelector((state) => state.thisPage)
  const filterCategory = useSelector((state) => state.filterCategory)
  const { high, low } = useSelector((state) => state.price)

  const [search, setSearch] = useState('')
  const [magnifierFocus, setMagnifierFocus] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setPage(1))
    setSearch(event.target.value)

    event.target.value.length
      ? dispatch(productByName(event.target.value, thisPage, filterCategory, low, high))
      : dispatch(allProducts())
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="search"
        placeholder="Busca en la tienda"
        className="py-[0.3rem] px-4 box-border rounded-full border-2 transition-colors text-[1.1rem] focus:outline-none focus:border-orange focus:border-2"
        value={search}
        onChange={handleChange}
        onFocus={() => setMagnifierFocus(true)}
        onBlur={() => setMagnifierFocus(false)}
      />
      <button
        type="submit"
        onFocus={() => setMagnifierFocus(true)}
        onBlur={() => setMagnifierFocus(false)}
      >
        <div className={`h-5 fill-black hover:fill-orange ${magnifierFocus ? "fill-orange" : ""}`}>
          <Magnifier />
        </div>
      </button>
    </div>
  )
}

export default SearchBar
