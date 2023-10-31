import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productById } from '@redux/actions/Products/productById'

const Featured = ({ id, name, image, price, prodpackage }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isHovered, setIsHovered] = useState(false)

  const handleDetailClick = () => {
    dispatch(productById(id))
    navigate(`/products/${id}`)
  }

  return (
    <div
      className=" flex flex-col items-center justify-between min-w-full min-h-full overflow-hidden rounded-3xl bg-white text-black shadow-gray-500 transition-all hover:outline hover:outline-[3.5px] hover:outline-orange hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDetailClick}
    >
      <div className="w-full">
        <img src={image} alt="image" className="w-full h-[18rem] mx-auto" />
        <div className="px-4 pt-3">
          <h3 className=" text-xl m-0 white">{name}</h3>
          <strong className="text-[clamp(.5rem,calc(.75rem+1vw),3rem)]">$ {price}</strong>
          <h4 className="">{prodpackage}</h4>
        </div>
      </div>
      <p className={`relative z-20 inline-flex items-center justify-center mt-4 p-4 w-full max-h-12 h-12 overflow-hidden text-sm uppercase font-medium focus:ring-4 focus:outline-none after:-z-10 after:absolute after:content[''] after:left-0 after:bg-orange after:h-full after:w-full after:transition-all ${isHovered ? 'after:top-0 text-white' : 'after:top-full text-black'}`}>
        Ver producto
      </p>
    </div>
  )
}

export default Featured
