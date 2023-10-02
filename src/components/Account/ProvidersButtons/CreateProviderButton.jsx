import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProviderButton = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin/providers/create')
  }
  return (
        <div className="flex justify-start pr-4">
            <button onClick={handleClick} className="bg-primary rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Crear Proveedor</button>
        </div>
  )
}

export default CreateProviderButton
