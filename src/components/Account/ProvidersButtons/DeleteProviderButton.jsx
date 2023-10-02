import React from 'react'
import { BASE_URL } from '../../../redux/action-type'
import axios from 'axios'

const DeleteProviderButton = ({ providerId }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await axios.delete(`${BASE_URL}providers/${providerId}`)
  }
  return (
        <div className="justify-start">
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Eliminar</button>
        </div>
  )
}

export default DeleteProviderButton
