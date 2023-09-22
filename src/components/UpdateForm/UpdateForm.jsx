import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allCategories } from '../../redux/actions/Categories/allCategories'
import { productById } from '../../redux/actions/Products/productById'
import validations from './validations'
import { useNavigate, useParams } from 'react-router-dom'
import { formatAndEdit } from './formatAndEdit'
import Swal from 'sweetalert2'

const UpdateForm = () => {
  const { idProduct } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(allCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(productById(idProduct))
  }, [dispatch])

  const detail = useSelector((state) => state.detail)
  const categories = useSelector((state) => state.categories)
  const user = useSelector((state) => state.user)

  const [inputsForm, setInputsForm] = useState({
    name: '',
    price: '',
    category: '',
    patent: '',
    color: '',
    // package: "",
    stock: '',
    image: ''
  })

  useEffect(() => {
    if (detail) {
      setInputsForm({
        ...detail
      })
    }
  }, [detail])

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    color: '',
    stock: ''
  })

  const handleInputChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    if (property === 'image') {
      setInputsForm({
        ...inputsForm,
        image: event.target.files[0]
      })
    } else {
      setInputsForm({ ...inputsForm, [property]: value })
      setErrors(validations({ ...inputsForm, [property]: value }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const errors = validations(inputsForm)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      const response = await formatAndEdit(inputsForm, idProduct, dispatch)
      if (response) {
        Swal.fire({
          icon: 'success',
          text: 'Producto modificado con éxito'
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Hubo un error al modificar el producto'
      })
    }
  }
  if (user.rol !== 'admin') {
    Swal.fire({
      icon: 'error',
      text: 'No autorizado'
    })
    navigate(`/products/${idProduct}`)
  } else {
    if (!detail.active) {
      return (
        <div>
          <h2 className="text-primary uppercase font-bold  flex items-center justify-center">
            Actualizar producto
          </h2>
          <form
            className="justify-start"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
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
                disabled="true"
              />
            </div>
            <div className="flex my-0 pt-0 pl-8 justify-around">
              <p
                className={`text-warning text-xs font-extrabold py-0 m-0 ${
                  errors.name ? 'block' : 'hidden'
                }`}
              >
                {errors.name}
              </p>
            </div>
            <div className={`flex m-8 mb-0 ${errors.name ? 'mt-4' : 'mt-8'}`}>
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
                disabled="true"
              />
            </div>
            <div className="flex my-0 pt-0 pl-8 justify-around">
              {errors.price && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.price}
                </p>
              )}
            </div>

            <div className={`flex m-8 mb-0 ${errors.price ? 'mt-4' : 'mt-8'}`}>
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
                disabled="true"
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
                disabled="true"
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
                  accept="image/*"
                  // value={inputsForm?.image?.name}
                  onChange={handleInputChange}
                  disabled="true"
                />
              </label>
              <span className="bg-formBg rounded-r-lg w-72 h-8 flex items-center px-3">
                {inputsForm.image && `Imagen seleccionada: ${inputsForm.image}`}
              </span>
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
                disabled="true"
              />
            </div>
            <div className="flex mt-0 pt-0 pl-8 justify-around">
              {errors.stock && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.stock}
                </p>
              )}
            </div>
            <div className={`flex m-8 mb-0 ${errors.stock ? 'mt-4' : 'mt-8'}`}>
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
                disabled="true"
              />
            </div>
            <div className="flex mt-0 pt-0 pl-8 justify-around">
              {errors.color && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.color}
                </p>
              )}
            </div>
            <div
              className={`m-10 flex justify-center ${
                errors.color ? 'mt-4' : 'mt-8'
              }`}
            >
              <button
                className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                type="submit"
                disabled="true"
              >
                <h2
                  className="text-primary uppercase font-bold flex items-center justify-center"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  Actualizar producto
                </h2>
              </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="text-primary uppercase font-bold  flex items-center justify-center">
            Actualizar producto
          </h2>
          <form
            className="justify-start"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
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
                  errors.name ? 'block' : 'hidden'
                }`}
              >
                {errors.name}
              </p>
            </div>
            <div className={`flex m-8 mb-0 ${errors.name ? 'mt-4' : 'mt-8'}`}>
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
              {errors.price && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.price}
                </p>
              )}
            </div>

            <div className={`flex m-8 mb-0 ${errors.price ? 'mt-4' : 'mt-8'}`}>
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
                  accept="image/*"
                  // value={inputsForm?.image?.name}
                  onChange={handleInputChange}
                />
              </label>
              <span className="bg-formBg rounded-r-lg w-72 h-8 flex items-center px-3">
                {inputsForm.image && `Imagen seleccionada: ${inputsForm.image}`}
              </span>
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
              {errors.stock && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.stock}
                </p>
              )}
            </div>
            <div className={`flex m-8 mb-0 ${errors.stock ? 'mt-4' : 'mt-8'}`}>
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
              {errors.color && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.color}
                </p>
              )}
            </div>
            <div
              className={`m-10 flex justify-center ${
                errors.color ? 'mt-4' : 'mt-8'
              }`}
            >
              <button
                className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                type="submit"
              >
                <h2
                  className="text-primary uppercase font-bold flex items-center justify-center"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  Actualizar producto
                </h2>
              </button>
            </div>
          </form>
        </div>
      )
    }
  }
}
export default UpdateForm
