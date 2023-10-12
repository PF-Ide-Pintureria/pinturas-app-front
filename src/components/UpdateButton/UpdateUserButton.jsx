import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateUserButton = ({ idUser }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/admin/edit/${idUser}`)
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-28 h-12 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Administrar</button>
        </div>
  )
}

export default UpdateUserButton
