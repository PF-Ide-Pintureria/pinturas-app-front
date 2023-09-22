import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/actions/User/deleteUser'
import Swal from 'sweetalert2'

const DeleteUserButton = ({ idUser }) => {
  const dispatch = useDispatch()

  const handleClick = async () => {
    deleteUser(idUser)(dispatch)
    Swal.fire('Usuario eliminado')
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Eliminar</button>
        </div>
  )
}

export default DeleteUserButton
