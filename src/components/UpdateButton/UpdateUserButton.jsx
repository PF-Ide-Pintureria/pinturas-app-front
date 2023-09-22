import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateUserButton = ({ idUser }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/admin/edit/${idUser}`)
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Editar</button>
        </div>
  )
}

export default UpdateUserButton
