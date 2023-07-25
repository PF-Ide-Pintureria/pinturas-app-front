import { GET_PRODUCT_BY_ID, BASE_URL } from "../action-type";
import axios from "axios";

export const productById = (idProduct) => {
  return async (dispatch) => {
    const product = (await axios.get(`${BASE_URL}details/${idProduct}`)).data.product;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};