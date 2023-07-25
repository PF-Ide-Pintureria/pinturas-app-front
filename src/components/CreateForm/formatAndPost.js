
import { postProduct } from "../../redux/actions/postProduct";
import React from "react";


export const formatAndPost = async (inputsForm, dispatch) => {
    try {
        console.log('file',inputsForm.file)
        // const newProduct = {
        //     ...inputsForm,
        // };
        const formData = new FormData();
        formData.append('name', inputsForm.name);
        formData.append('price', inputsForm.price);
        formData.append('code', inputsForm.code);
        formData.append('category', inputsForm.category);
        formData.append('patent', inputsForm.patent);
        formData.append('color', inputsForm.color);
        formData.append('package', inputsForm.package);
        formData.append('stock', inputsForm.stock);
        formData.append('image', inputsForm.file);

        console.log('formData', formData)
        await postProduct(formData)(dispatch).then((res) => {
            console.log('respuesta', res.data)
            if (res.status === 201) {
                console.log('Producto creado correctamente');
                alert(`Producto creado correctamente con el id: ${res.data.product[0].idProduct}`);
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
