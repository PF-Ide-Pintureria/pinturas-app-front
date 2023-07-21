
import { postProduct } from "../../redux/actions/postProduct";
import React from "react";


export const formatAndPost = async ({ name, price, code, patent, imagen, color, prodPackage, stock }, selectedCategory ,dispatch) => { 
    try {
        const newProduct = {
            name: name,
            price: price,
            code: code,
            category: selectedCategory,
            patent: patent,
            imagen: imagen,
            color: color,
            package: prodPackage,
            stock: stock
        }
        console.log('Hasta aqui llegamos')
            // (await axios.post(`${BASE_URL}products`, newProduct)).producto
        await postProduct(newProduct)(dispatch);
        
    } catch (error) {
        alert(error.response.data.error)
    }
};