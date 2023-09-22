import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productByName } from '../../redux/actions/Products/productByName'
import { allProducts } from '../../redux/actions/Products/allProducts'
import { setPage } from '../../redux/actions/Page/setPage'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const thisPage = useSelector((state) => state.thisPage)
  const filterCategory = useSelector((state) => state.filterCategory)
  const { high, low } = useSelector((state) => state.price)

  const handleChange = (event) => {
    dispatch(setPage(1))
    setSearch(event.target.value)

    event.target.value.length
      ? dispatch(productByName(event.target.value, thisPage, filterCategory, low, high))
      : dispatch(allProducts())
  }

  return (
    <div className="h-32 bg-white flex flex-col justify-center items-center mb-10">
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <div
            className="relative flex z-50 bg-white rounded-full border-2 border-purple-600"
          >
            <input
              type="search"
              placeholder="Busca tu producto"
              className=" cursor-text rounded-full flex-1 px-6 py-4 text-white-700 focus:outline-none"
              value={search}
              onChange={handleChange}
              style={{ border: 'none' }}
            />
            <button
              className="bg-purple-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-purple-900 focus:bg-purple-600 focus:outline-none"
              type="submit"
              style={{ border: 'none' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M11.5171 6.36835C11.5171 9.8855 8.93889 12.7367 5.75854 12.7367C2.57819 12.7367 0 9.8855 0 6.36835C0 2.85121 2.57819 0 5.75854 0C8.93889 0 11.5171 2.85121 11.5171 6.36835ZM1.72756 6.36835C1.72756 8.83035 3.53229 10.8262 5.75854 10.8262C7.98478 10.8262 9.78951 8.83035 9.78951 6.36835C9.78951 3.90635 7.98478 1.91051 5.75854 1.91051C3.53229 1.91051 1.72756 3.90635 1.72756 6.36835Z"
                  fill="#C4C4C4"
                />
                <line
                  x1="2"
                  y1="-2"
                  x2="7.02699"
                  y2="-2"
                  transform="matrix(0.733018 0.68021 -0.604452 0.796642 8.38281 9.85938)"
                  stroke="#C4C4C4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
