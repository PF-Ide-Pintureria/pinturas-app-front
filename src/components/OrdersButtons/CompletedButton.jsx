import React from 'react'
import { useDispatch } from 'react-redux'
import putOrder from '../../redux/actions/Orders/putOrder'
import Swal from 'sweetalert2'

const CompletedButton = ({ idOrder }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const edition = { state: 'completed' }
    try {
      putOrder(idOrder, edition)(dispatch).then(response => {
        console.log('response en el submit', response)
        Swal.fire({
          icon: 'success',
          text: 'Estado modificado con éxito'
        })
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
            <button onClick={handleClick} className="bg-green-500 rounded-xl w-20 h-12 m-8 text-white border-2 border-solid border-gray-300 shadow-md font-bold" > Completado</button >
        </div>
  )
}

export default CompletedButton
