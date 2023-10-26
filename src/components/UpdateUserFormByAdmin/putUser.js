import axios from 'axios'
import { BASE_URL } from '@redux/action-type'
import Swal from 'sweetalert2'

export const putUser = async (id, inputs) => {
  const token = localStorage.getItem('token')
  try {
    await axios.put(`${BASE_URL}users/${id}`, inputs, {
      headers: {
        Authorization: JSON.parse(token)
      }
    })
    Swal.fire('Usuario actualizado con exito')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se pudo actualizar el usuario'
    })
    console.log(error)
  }
}
