import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "../../redux/actions/allCategories";
import validations from "./validations";


const CreateForm = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allCategories())
    }, [dispatch])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [inputsForm, setInputsForm] = useState({
        name: "",
        price: "",
        code: "",
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
        code: "",
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
        setSelectedCategory(selectedOption);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Se deberia crear un producto')
    };
    
    const categories = useSelector(state => state.categories)
    return (


        <div className="justify-start">
            <h2 className="text-primary uppercase font-bold">Crear producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="m-4">
                    <label htmlFor="name" className='bg-quaternary rounded-xl w-40 h-8'>Nombre:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="name" value={inputsForm.name} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="price" className='bg-quaternary rounded-xl w-40 h-8'>Precio:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="number" name="price" value={inputsForm.price} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="code" className='bg-quaternary rounded-xl w-40 h-8'>SKU:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="code" value={inputsForm.code} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="category" className='bg-quaternary rounded-xl w-40 h-8'>Categoría:</label>
                    <select value={selectedCategory} onChange={handleSelectedCategory}>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                        {category}
                    </option>
                        ))}
                        {/* <option>Seleccione una categoria...</option>
                        <option>Categoría 1</option>
                        <option>Categoría 2</option>
                        <option>Categoría 3</option> */}
                    </select>
                </div>
                <div className="m-4">
                    <label htmlFor="patent" className='bg-quaternary rounded-xl w-40 h-8'>Marca:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="patent" value={inputsForm.patent} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="image" className='bg-quaternary rounded-xl w-40 h-8'>Image:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="file" name="name" accept="image/*" value={inputsForm.image} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="package" className='bg-quaternary rounded-xl w-40 h-8'>Package:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="package" value={inputsForm.package} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="stock" className='bg-quaternary rounded-xl w-40 h-8'>Stock:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="stock" value={inputsForm.stock} onChange={handleInputChange}/>
                </div>
                <div className="m-4">
                    <label htmlFor="color" className='bg-quaternary rounded-xl w-40 h-8'>Color:</label>
                    <input className='bg-formBg rounded-r-lg w-72 h-8' type="text" name="color" value={inputsForm.color} onChange={handleInputChange}/>
                </div>
                <div className='justify-around m-4'>
                    <button className='rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold' type="submit">Crear producto</button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;