import { GET_ORDER_BY_ID, BASE_URL } from "../../action-type";
import axios from "axios";

export const getOrderById = (idOrder) => {
    return async (dispatch) => {
        try {
            const order = (await axios.get(`${BASE_URL}orders?idOrder=${idOrder}`)).data.orders[0]
            console.log('order', order)
            dispatch({ type: GET_ORDER_BY_ID, payload: order });
            return order;
        } catch (error) {
            console.log("getOrderById",error);
        }
    };
};