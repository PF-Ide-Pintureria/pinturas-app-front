import React from 'react'
import { putUser } from '../../redux/actions/User/putUser'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

const BanUserButton = ({ idUser }) => {
  const dispatch = useDispatch()

  const formData = {
    isBanned: true,
    active: false
  }

  const handleClick = async (event) => {
    event.preventDefault()
    await putUser(idUser, formData)(dispatch)
    Swal.fire('Usuario Banneado')
  }

  return (
        <div>
            <button className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold" onClick={handleClick}>Bloquear</button>
        </div>
  )
}

export default BanUserButton
