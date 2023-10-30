import axios from 'axios'
import { BASE_URL } from '@redux/action-type'
import Swal from 'sweetalert2'

export const formatAndPost = async (inputsForm) => {
  try {
    await axios.post(`${BASE_URL}providers`, inputsForm, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    })
    Swal.fire({
      icon: 'success',
      text: 'Proveedor creado con exito',
      confirmButtonText: 'Ok'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo falló!',
      confirmButtonText: 'Ok'
    })
    console.log(error.response)
  }
}
