import React from 'react'
import { deleteProvider } from '../../../redux/actions/Providers/deleteProvider'
import { useDispatch } from 'react-redux'

const DeleteProviderButton = ({ providerId }) => {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    deleteProvider(providerId)(dispatch)
  }
  return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Eliminar</button>
        </div>
  )
}

export default DeleteProviderButton
