import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrderById } from '../../redux/actions/Orders/getOrderById'

const DetailButton = ({ idOrder }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    getOrderById(idOrder)(dispatch).then((response) => {
      if (response) {
        navigate(`/orders/${idOrder}`)
      }
    }).catch((error) => console.log('error', error))
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-indigo-800 rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Ver detalle</button>
        </div>
  )
}

export default DetailButton
