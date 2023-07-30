import axios from "axios";
import { POST_CART, BASE_URL } from '../action-type';
import { useSelector } from "react-redux";

export const postCart = (cart) => {
    const user = useSelector((state) => state.user);
    const cartToPost = {
        idUser: user.id,
        products: cart
    }

    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/carts`, cartToPost);
    
            const newCart =  response.data;
            dispatch({ type: POST_CART, payload: newCart });
            return response;
            
        } catch (error) {
            console.log(error);
        }
    }
}