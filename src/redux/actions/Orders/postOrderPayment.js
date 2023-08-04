import axios from "axios";
import { POST_ORDER_PAYMENT, BASE_URL } from '../../action-type';

export const postOrderPayment = (idOrder) => {
    return async (dispatch) => {
        try {
            const body = {idOrder} 
            console.log('body', body)
            const response = (await axios.post(`${BASE_URL}orders/payment`, body)).data;

            console.log('response N9 postOrderPayment', response)
            dispatch({type: POST_ORDER_PAYMENT, payload: response})

            return response;

        } catch (error) {
            console.log("postOrderPayment error:", error);

        }
    }
}