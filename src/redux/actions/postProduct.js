import axios from "axios";
import { POST_PRODUCT, BASE_URL } from '../action-type';

export const postProduct = (productCreate) => {
    return async (dispatch) => {
        console.log('Avanzamos un poco')
        const response = await axios.post(`${BASE_URL}products`, productCreate)
        console.log('Respuesta server: ', response)
        const newProduct = response.status === 'success' ? response.producto : {};
        
        // const newProduct = (await axios.post(`${BASE_URL}products`, productCreate)).data.producto
        dispatch({ type: POST_PRODUCT, payload: newProduct });
    }
}