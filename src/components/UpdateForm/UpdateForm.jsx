import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_CATEGORIES } from "../../redux/action-type";
import validations from "./validations";


const UpdateForm = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({type: 'GET_ALL_CATEGORIES'})
    // }, [dispatch])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [inputsForm, setInputsForm] = useState({
        id: "",
        name: "",
        price: "",
        category: "",
        patent: "",
        image: "",
        color: "",
        package: "",
        stock: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        category: "",
        patent: "",
        image: "",
        color: "",
        package: "",
        stock: ""
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInputsForm({ ...inputsForm, [property]: value })
        setErrors(validations({ ...inputsForm, [property]: value }))
    };

    const handleSelectedCategory = (event) => {
        const selectedOption = event.target.value;
        
        const uniqueOptions = new Set(selectedCategory); 
        uniqueOptions.add(selectedOption);
        return uniqueOptions;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Se deberia modificar un producto')
    };
    
    // const categories = useSelector(state => state.products)
    return (


        <div>
            <h2 className="text-primary uppercase font-bold">Actualizar producto</h2>
            <form className="justify-start" onSubmit={handleSubmit}>
                <div className="m-8">
                    <label htmlFor="name" className='bg-quaternary rounded-xl w-40 h-8'>ID:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="id" value={inputsForm.id} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <label htmlFor="name" className='bg-quaternary rounded-xl w-40 h-8'>Nombre:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="name" value={inputsForm.name} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <label htmlFor="price" className='bg-quaternary rounded-xl w-40 h-8'>Precio:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="number" name="price" value={inputsForm.price} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <label htmlFor="category" className='bg-quaternary rounded-xl w-40 h-8'>Categoría:</label>
                    <select value={selectedCategory} onChange={handleSelectedCategory}>
                        {/* {categories.map((category, index) => (
                            <option key={index} value={category}>
                        {category}
                    </option>
                        ))} */}
                        <option value="">
                            Selecciona una categoria...
                        </option>
                        <option value="categoria1">Categoría 1</option>
                        <option value="categoria2">Categoría 2</option>
                        <option value="categoria3">Categoría 3</option>
                    </select>
                </div>
                <div className="m-8">
                    <label htmlFor="patent" className='bg-quaternary rounded-xl w-40 h-8'>Marca:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="patent" value={inputsForm.patent} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <label htmlFor="image" className='bg-quaternary rounded-xl w-40 h-8'>Image:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="file" name="name" accept="image/*" value={inputsForm.image} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <label htmlFor="stock" className='bg-quaternary rounded-xl w-40 h-8'>Stock:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="stock" value={inputsForm.stock} onChange={handleInputChange}/>
                </div>
                <div className="m-8">
                    <button className='rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold' type="submit">Actualizar producto</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateForm;