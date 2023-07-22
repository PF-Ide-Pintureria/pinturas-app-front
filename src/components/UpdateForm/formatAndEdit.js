
import putProducts from '../../redux/actions/putProducts.js';
import React from "react";


export const formatAndEdit = async (inputsForm, dispatch) => {
    try {
        const editedProduct = {
            ...inputsForm,
        };
        await putProducts(editedProduct)(dispatch).then((res) => {
            if (res.status === 201) {
                console.log('Producto modificado correctamente');
                alert(`Producto ${res.data.product.idProduct} modificado correctamente`);
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
