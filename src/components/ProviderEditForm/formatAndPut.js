import axios from 'axios'
import { BASE_URL } from '@redux/action-type'
import Swal from 'sweetalert2'

export const formatAndPut = async (inputsForm, id) => {
  try {
    await axios.put(`${BASE_URL}providers/edit/${id}`, inputsForm, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    })
    Swal.fire({
      icon: 'success',
      text: 'Proveedor editado con exito',
      confirmButtonText: 'Ok'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo falló!',
      confirmButtonText: 'Ok'
    })
    console.log(error.response.data)
  }
}
