import React from 'react'
// import { useNavigate } from 'react-router-dom'

const CreateProviderButton = () => {
  // const navigate = useNavigate()
  const handleClick = () => {
    // navigate('/provider/create')
  }
  return (
        <div className="flex justify-end pr-4 mb-4">
            <button onClick={handleClick} className="bg-primary text-quaternary font-extrabold border border-solid border-black rounded-xl w-24 h-12">Crear Proveedor</button>
        </div>
  )
}

export default CreateProviderButton
