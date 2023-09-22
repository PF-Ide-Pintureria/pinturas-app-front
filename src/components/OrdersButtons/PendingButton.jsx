import React from 'react'
import { useDispatch } from 'react-redux'
import putOrder from '../../redux/actions/Orders/putOrder'
import Swal from 'sweetalert2'

const PendingButton = ({ idOrder }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const edition = { state: 'pending' }
    try {
      putOrder(idOrder, edition)(dispatch)
      Swal.fire({
        icon: 'success',
        text: 'Estado modificado con éxito'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message
      })
    }
  }
  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold" > Pendiente</button >
        </div>
  )
}

export default PendingButton
