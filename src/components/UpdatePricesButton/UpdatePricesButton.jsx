import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdatePricesButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/admin/products/update/prices')
  }

  return (
        <button onClick={handleClick} className="bg-primary rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Actualizar precios</button>
  )
}

export default UpdatePricesButton
