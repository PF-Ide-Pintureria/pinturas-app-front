import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "../../redux/actions/allCategories";
import {productById} from "../../redux/actions/productById"
import validations from "./validations";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../redux/action-type";

const UpdateForm = () => {

    const {idProduct} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allCategories())
    }, [dispatch])
    
    useEffect(() => {
        dispatch(productById(idProduct))
    }, [dispatch]);
    
    const detail = useSelector(state => state.detail);
    const categories = useSelector(state=> state.categories)
    
    const [inputsForm, setInputsForm] = useState({
        name: "",
        price: "",
        category: "",
        patent: "",
        image: "",
        color: "",
        package: "",
        stock: "",
        file: ''
    });


    useEffect(() => {
        if (detail) {      
            setInputsForm({
                name: detail.name,
                price: detail.price,
                category: detail.category,
                patent: detail.patent,
                image: detail.image,
                color: detail.color,
                package: detail.package,
                stock: detail.stock
            })
        }
    },
    [detail]);

    const [errors, setErrors] = useState({
        price: "",
        color: "",
        stock: ""
    });

const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInputsForm({ ...inputsForm, [property]: value })
        setErrors(validations({ ...inputsForm, [property]: value }))
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        //Hasta aqui funcionaba. Metiendo validaciones:
        const errors = validations(inputsForm);
        setErrors(errors);

        const response = axios.put(`${BASE_URL}products/${idProduct}`, inputsForm);
        if (response) {
            console.log("producto actualizado");
        }
        // const errors = validations(inputsForm);
        // setErrors(errors);
        // // if (Object.keys(errors).length === 0) {
        //     const response = await formatAndEdit(inputsForm, dispatch);
        //     if (response) {
        //         alert('Producto modificado con éxito');
        //         setInputsForm(defaultValues);
        //     };
    // } 
        // else {
        //     alert('Hubo un error al editar el producto');
        // };
    };

    return (

        <div>
            <h2 className="text-primary uppercase font-bold  flex items-center justify-center">
                Actualizar producto
            </h2>
            <form className="justify-start" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="flex m-8">
                    <label
                        htmlFor="name"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                    >
                        Nombre:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="name"
                        value={inputsForm.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="price"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                    >
                        Precio:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="number"
                        name="price"
                        value={inputsForm.price}
                        onChange={handleInputChange}
                    />
                    <span className="text-warning font-extrabold">{ errors.price}</span>
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="category"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                    >
                        Categoría:
                    </label>
                    <select
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        value={inputsForm.category}
                        onChange={handleInputChange}
                        name="category"
                    >
                        <option value="">Seleccione una categoría</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="patent"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                    >
                        Marca:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="patent"
                        value={inputsForm.patent}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex m-8">
                    <label
                        htmlFor="image"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center cursor-pointer"
                    >
                        Selecciona tu img:
                        <input
                            className="opacity-0 absolute"
                            type="file"
                            name="image"
                            accept="image/png, .jpeg, .jpg, image/gif"
                            onChange={handleInputChange}

                        />
                    </label>
                    <span className="bg-formBg rounded-r-lg w-72 h-8 flex items-center px-3">
                        {inputsForm.image && `Imagen seleccionada: ${inputsForm.image}`}
                    </span>
                </div>

                <div className="flex m-8">
                    <label
                        htmlFor="stock"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                    >
                        Stock:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="stock"
                        value={inputsForm.stock}
                        onChange={handleInputChange}
                    />
                    <span className="text-warning font-extrabold">{ errors.stock}</span>
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="color"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                    >
                        Color:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="color"
                        value={inputsForm.color}
                        onChange={handleInputChange}
                    />
                    <span className="text-warning font-extrabold">{ errors.color}</span>
                </div>
                <div className="m-10 flex justify-center">
                    <button
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                        type="submit"
                    >
                        <h2
                            className="text-primary uppercase font-bold flex items-center justify-center"
                            style={{ color: "white", fontWeight: "bold" }}
                        >
                            Actualizar producto
                        </h2>
                    </button>
                </div>
            </form>
        </div>
    );
};
export default UpdateForm;
