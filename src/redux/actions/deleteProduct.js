import axios from "axios"
import { DELETE_PRODUCT } from "../action-type"

export const deleteProduct = (id) => {
    return (dispatch) => {
        const product = axios.delete(`http://localhost:3000/products/${id}`)
        dispatch({ type: DELETE_PRODUCT, payload: product })
    }
}