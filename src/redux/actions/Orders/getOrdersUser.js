import axios from "axios";
import { BASE_URL, GET_ORDERS_USER } from "../../action-type";

const getAllOrdersUser = () => {
    return async (dispatch) => {
        try {
            const rawResponse = await axios.get(`${BASE_URL}orders`);
            const response = rawResponse?.data?.orders;

            dispatch({ type: GET_ORDERS_USER, payload: response })
            return response
        }
        catch (error) {
            console.error(error);
        }
    }
}

export default getAllOrdersUser;