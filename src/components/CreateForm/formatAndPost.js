import { postProduct } from "../../redux/actions/postProduct";
import React from "react";


export const formatAndPost = async ({ name, price, code, category, patent, image, color, prodPackage, stock }) => { 
    try {
        const newProduct = {
            name: name,
            price: price,
            code: code,
            category: category,
            patent: patent,
            image: image,
            color: color,
            package: prodPackage,
            stock: stock
        }
        postProduct(newProduct);
        
    } catch (error) {
        alert(error.response.data.error)
    }
};