import axios from "axios";
import { PUT_USER, BASE_URL } from '../../action-type';

export const putUser = (idUser, formData) => {
    return async (dispatch) => {
        console.log('id', idUser)
        console.log('Form data 1: ', formData)
        const response = await axios.put(`${BASE_URL}users/${idUser}`, formData);
        const updateUser = response.usuario;
        dispatch({ type: PUT_USER, payload: updateUser });
        console.log('response: ', response)
        return response;
    }
}