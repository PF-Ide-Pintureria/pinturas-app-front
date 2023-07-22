
import { postProduct } from "../../redux/actions/postProduct";
import React from "react";


export const formatAndPost = async (inputsForm, dispatch) => {
    try {
        const newProduct = {
            ...inputsForm,
        };
        await postProduct(newProduct)(dispatch).then((res) => {
            if (res.status === 201) {
                console.log('Producto creado correctamente');
                alert("Producto creado correctamente");
            }else{
                console.log('res.status', res.status);
            }
        }).then(() => {
            true;
        }).catch((err) => {
            console.error(err);
        });

    } catch (error) {
        console.error(error);
    };
};
