import axios from 'axios'
import { BASE_URL, DELETE_POST } from '../../action-type'
import Swal from 'sweetalert2'

const deletePost = (idBlog) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    const tokenLimpio = token.replace(/['"]+/g, '')
    const rawResponse = await axios.delete(`${BASE_URL}blogs/${idBlog}`, {
      headers: {
        Authorization: tokenLimpio
      }
    })
    const data = rawResponse?.data
    if (data.status === 'success') {
      Swal.fire({
        icon: 'success',
        text: 'Posteo eliminado'
      })
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Ha ocurrrido un error al eliminar el posteo'
      })
    }
    const response = data?.blog
    if (response) {
      dispatch({
        type: DELETE_POST,
        payload: response
      })
      return data
    }
  }
}

export default deletePost
