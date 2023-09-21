import axios from 'axios'
import { POST_LOGIN_USER, ACCESS_TOKEN, GET_CART_ID, BASE_URL } from '../../action-type'

export const postLoginUser = (userLogin) => {
  return async (dispatch) => {
    try {
      const response = (await axios.post(`${BASE_URL}users/login`, userLogin)).data
      if (response?.acceso?.user?.active) {
        const loginUser = response.acceso.user
        const token = response.acceso.token
        const cartId = response.acceso.user.idCart

        localStorage.setItem('user', JSON.stringify(loginUser))
        localStorage.setItem('token', JSON.stringify(token))

        dispatch({ type: GET_CART_ID, payload: cartId })
        dispatch({ type: ACCESS_TOKEN, payload: token })
        dispatch({ type: POST_LOGIN_USER, payload: loginUser })
      }
      return response
    } catch (error) {
      console.log('postLoginUser', error)

      return {
        status: 'fail',
        message: 'Los datos ingresados son incorrectos'
      }
    };
  }
}
