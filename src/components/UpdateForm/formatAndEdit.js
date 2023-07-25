
import { putProduct } from "../../redux/actions/putProducts";
import React from "react";


export const formatAndEdit = async (inputsForm, idProduct, dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name', inputsForm.name);
        formData.append('price', inputsForm.price);
        formData.append('category', inputsForm.category);
        formData.append('patent', inputsForm.patent);
        formData.append('color', inputsForm.color);
        // formData.append('package', inputsForm.package);
        formData.append('stock', inputsForm.stock);
        formData.append('image', inputsForm.image);

        console.log('formData', formData)
        await putProduct(idProduct, formData)(dispatch).then((res) => {
            console.log('respuesta', res)
            if (res.status === 201) {
                alert(`Producto ${res.data.product.idProduct} modificado correctamente`);
            } else {
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




// import putProducts from '../../redux/actions/putProducts.js';
// import React from "react";


// export const formatAndEdit = async (inputsForm, dispatch) => {
//     try {
//         const editedProduct = {
//             ...inputsForm,
//         };
//         await putProducts(editedProduct)(dispatch).then((res) => {
//             if (res.status === 201) {

//                 alert(`Producto ${res.data.product.idProduct} modificado correctamente`);
//             }else{
//                 console.log('res.status', res.status);
//             }
//         }).then(() => {
//             true;
//         }).catch((err) => {
//             console.error(err);
//         });

//     } catch (error) {
//         console.error(error);
//     };
// };
