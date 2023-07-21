import axios from "axios"
import { DELETE_PRODUCT } from "../action-type"

export const deleteProduct = (id) => {
    return (dispatch) => {
        const product = axios.delete(`https://back-server-pinturas-app.onrender.com/products/${id}`)
        dispatch({ type: DELETE_PRODUCT, payload: product })
    }
}