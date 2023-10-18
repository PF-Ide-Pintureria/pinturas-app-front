import React from 'react'
import axios from 'axios'
import { allProducts } from '../../redux/actions/Products/allProducts'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { BASE_URL } from '../../redux/action-type'

const DeleteButton = ({ idProduct }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const handleClick = async () => {
    try {
      await axios.delete(`${BASE_URL}products/${idProduct}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: JSON.parse(token)
        }
      })

      Swal.fire('Borrado de producto:' + idProduct)
      dispatch(allProducts())
    } catch (error) {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error
      })
    }
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Borrar</button>
        </div>
  )
}

export default DeleteButton
