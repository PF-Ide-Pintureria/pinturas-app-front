import { GET_ALL_CATEGORIES, BASE_URL } from '../../action-type'
import axios from 'axios'

export const allCategories = () => {
  return async (dispatch) => {
    const all = (await axios.get(`${BASE_URL}categories/`)).data
    dispatch({ type: GET_ALL_CATEGORIES, payload: all })
  }
}
