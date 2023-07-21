import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "../../redux/actions/allCategories";
import validations from "./validations";

const UpdateForm = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch({type: 'GET_ALL_CATEGORIES'})
  // }, [dispatch])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inputsForm, setInputsForm] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    patent: "",
    image: "",
    color: "",
    package: "",
    stock: "",
  });


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allCategories())
    }, [dispatch])
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

    setInputsForm({ ...inputsForm, [property]: value });
    setErrors(validations({ ...inputsForm, [property]: value }));
  };

  const handleSelectedCategory = (event) => {
    const selectedOption = event.target.value;


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Se deberia modificar un producto')
    };
    
    const categories = useSelector(state => state.categories)
    return (

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Se deberia modificar un producto");
  };


  // const categories = useSelector(state => state.products)
  return (
    <div>
      <h2 className="text-primary uppercase font-bold  flex items-center justify-center">
        Actualizar producto
      </h2>
      <form className="justify-start" onSubmit={handleSubmit}>
        <div className="flex m-8">
          <label
            htmlFor="name"
            className="bg-quaternary rounded-l-xl w-40 h-8 flex-shrink-0 flex-grow-0 flex-basis-20 flex items-center justify-center"
          >
            ID:
          </label>
          <input
            className="bg-formBg rounded-r-lg flex-grow h-8"
            type="text"
            name="id"
            value={inputsForm.id}
            onChange={handleInputChange}
          />
        </div>
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
            value={selectedCategory}
            onChange={handleSelectedCategory}
          >
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
              name="name"
              accept="image/*"
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
