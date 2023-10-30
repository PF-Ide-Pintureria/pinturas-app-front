import axios from 'axios'
import { BASE_URL } from '@redux/action-type'
import Swal from 'sweetalert2'

export const formatAndPut = async (inputsForm) => {
  try {
    const formData = new FormData()
    formData.append('providerName', inputsForm.provider)
    formData.append('excelFile', inputsForm.excelFile)

    const token = localStorage.getItem('token')
    const response = await axios.put(`${BASE_URL}products/update/prices`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: JSON.parse(token)
      }
    })

    Swal.fire({
      icon: 'success',
      text: `${response.data}`
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.error ? error.response.data.error : error.response.data}`
    })
    console.error(error)
  };
}
