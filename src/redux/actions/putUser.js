import axios from "axios";
import { PUT_USER, BASE_URL } from '../action-type';

export const putUser = (id, formData) => {
    return async (dispatch) => {
        const response = await axios.put(`${BASE_URL}users/${id}`, formData);
        const updateUser = response.status === 201 ? response.user : {};
        dispatch({ type: PUT_USER, payload: updateUser });
        return response;
    }
}