import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "../../redux/actions/allCategories";
import validations from "./validations";
import { formatAndPost } from "./formatAndPost";
import { BASE_URL } from "../../redux/action-type";
import axios from "axios";

// const defaultValues = {
//     name: "Probando Formulario",
//     price: 0,
//     code: "123",
//     category: "Linea Fondos",
//     patent: "FADEPA",
//     imagen: "",
//     color: "Blanco",
//     package: "2 Lts.",
//     stock: 12,
//     file: null,
// };

const CreateForm = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allCategories());
    }, [dispatch])

    const [inputsForm, setInputsForm] = useState({
        // ...defaultValues,
        name: "",
        price: "",
        code: "",
        category: "",
        patent: "",
        // image: "",
        color: "",
        package: "",
        stock: "",
        // file: null,
    });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        code: "",
        category: "",
        patent: "",
        // image: "",
        color: "",
        package: "",
        stock: ""
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (property === 'imagen') {
            setInputsForm({
                ...inputsForm,
                file: event.target.files[0],
                imagen: value,
            });
        } else {
            setInputsForm({ ...inputsForm, [property]: value });
            setErrors(validations({ ...inputsForm, [property]: value }));
        };
        console.log(inputsForm)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', inputsForm.name);
        formData.append('price', inputsForm.price);
        formData.append('code', inputsForm.code);
        formData.append('category', inputsForm.category);
        formData.append('patent', inputsForm.patent);
        // formData.append('image', inputsForm.image);
        formData.append('color', inputsForm.color);
        formData.append('package', inputsForm.package);
        formData.append('stock', inputsForm.stock);
        // formData.append('file', inputsForm.file);
        const errors = validations(inputsForm);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // const response = await axios.post(`${BASE_URL}products`,inputsForm)
            const response = await formatAndPost(formData, dispatch);
            if (response) {
                alert('Producto creado con éxito');
                setInputsForm(defaultValues);
            };
        } else {
            alert('Hubo un error al crear el producto');
        };

        console.log(inputsForm)
    };



    const categories = useSelector(state => state.categories)
    return (
        <div className="justify-start">
            <h2 className="text-primary uppercase font-bold  flex items-center justify-center">
                Crear Producto
            </h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className=" flex m-8 mb-0">
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
                <div className="flex my-0 pt-0 pl-8 justify-around">
                    <p
                        className={`text-warning text-xs font-extrabold py-0 m-0 ${
                        errors.name ? "block" : "hidden"
                        }`}
                    >
                        {errors.name}
                    </p>
                </div>
                <div className={`flex m-8 mb-0 ${errors.name ? "mt-4" : "mt-8"}`}>
                    <label
                        htmlFor="price"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
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
                </div>
                    <div className="flex my-0 pt-0 pl-8 justify-around">
                        {errors.price && <p className="text-warning text-xs font-extrabold py-0 m-0">{errors.price}</p>}  
                    </div>

                <div className={`flex m-8 mb-0 ${errors.price ? "mt-4" : "mt-8"}`}>
                    <label
                        htmlFor="code"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                    >
                        SKU:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="code"
                        value={inputsForm.code}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="category"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                    >
                        Categoría:
                    </label>
                    <select
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        value={inputsForm.category}
                        onChange={handleInputChange}
                        name="category"
                    >
                        <option style={{ textAlign: "center" }} value="">
                            Selecciona una categoria
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} name='category' value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex m-8">
                    <label
                        htmlFor="patent"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
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
                {/* <div className="flex m-8">
                    <label
                        htmlFor="file"
                        className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center cursor-pointer"
                    >
                        Selecciona tu img:
                        <input
                            className="opacity-0 absolute"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleInputChange}
                        />
                    </label>
                    <span className="bg-formBg rounded-r-lg w-72 h-8 flex items-center px-3">
                        {inputsForm.imagen && `Imagen seleccionada: ${inputsForm.imagen}`}
                    </span>
                </div> */}
                <div className="flex m-8">
                    <label
                        htmlFor="package"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                    >
                        Package:
                    </label>
                    <input
                        className="bg-formBg rounded-r-lg w-72 h-8"
                        type="text"
                        name="package"
                        value={inputsForm.package}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex m-8 mb-0">
                    <label
                        htmlFor="stock"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
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
                </div>
                    <div className="flex mt-0 pt-0 pl-8 justify-around">
                        {errors.stock && <p className="text-warning text-xs font-extrabold py-0 m-0">{errors.stock}</p>}  
                    </div>
                <div className={`flex m-8 mb-0 ${errors.stock ? "mt-4" : "mt-8"}`}>
                    <label
                        htmlFor="color"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
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
                </div>
                    <div className="flex mt-0 pt-0 pl-8 justify-around">
                        {errors.color && <p className="text-warning text-xs font-extrabold py-0 m-0">{errors.color}</p>}  
                    </div>
                <div className={`m-10 flex justify-center ${errors.color ? "mt-4" : "mt-8"}`}>
                    <button
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                        type="submit"
                    >
                        <h2
                            className="text-primary uppercase font-bold flex items-center justify-center"
                            style={{ color: "white", fontWeight: "bold" }}
                        >
                            CREAR PRODUCTO
                        </h2>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default CreateForm;
