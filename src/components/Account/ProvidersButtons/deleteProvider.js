import Swal from 'sweetalert2'
import { BASE_URL } from '@redux/action-type'
import axios from 'axios'

export const deleteProvider = async (providerId) => {
  try {
    await axios.delete(`${BASE_URL}providers/${providerId}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    })
    Swal.fire({
      icon: 'success',
      title: 'Exito!',
      text: 'El proveedor se eliminó correctamente'
    })
  } catch (error) {
    console.error(error.response)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo falló!'
    })
  }
}
