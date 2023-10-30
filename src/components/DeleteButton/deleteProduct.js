import axios from 'axios'
import Swal from 'sweetalert2'
import { BASE_URL } from '@redux/action-type'

export const deleteProduct = async (idProduct) => {
  const token = localStorage.getItem('token')
  try {
    await axios.delete(`${BASE_URL}products/${idProduct}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: JSON.parse(token)
      }
    })

    Swal.fire('Borrado de producto:' + idProduct)
  } catch (error) {
    console.error(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.error
    })
  }
}
