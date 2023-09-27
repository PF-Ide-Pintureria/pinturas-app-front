import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allCategories } from '../../redux/actions/Categories/allCategories'
import validations from './validations'
import { formatAndPost } from './formatAndPost'
import { getProviders } from '../../redux/actions/Providers/getProviders'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const CreateForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const providers = useSelector(state => state.providers)

  useEffect(() => {
    dispatch(allCategories())
    dispatch(getProviders())
  }, [dispatch])

  const [inputsForm, setInputsForm] = useState({
    name: '',
    price: '',
    code: '',
    category: '',
    patent: '',
    color: '',
    package: '',
    stock: '',
    image: '',
    description: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    code: '',
    category: '',
    patent: '',
    image: '',
    color: '',
    package: '',
    stock: '',
    description: ''
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
    };
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const errors = validations(inputsForm)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      // const response = await axios.post(`${BASE_URL}products`,inputsForm)
      const response = await formatAndPost(inputsForm, dispatch)
      navigate('/products')
      if (response) {
        Swal.fire({
          icon: 'success',
          text: 'Producto creado con éxito'
        })
      };
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Hubo un error al crear el producto'
      })
    };
  }

  const categories = useSelector(state => state.categories)

  if (user?.rol !== 'admin') {
    Swal.fire({
      icon: 'error',
      title: 'No tienes permisos para realizar esta acción.'
    })
    navigate('/')
  } else {
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
                            className={`text-warning text-xs font-extrabold py-0 m-0 ${errors.name ? 'block' : 'hidden'
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
                            Precio de lista:
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

                    <div className={`flex m-8 mb-0 ${errors.price ? 'mt-4' : 'mt-8'}`}>
                        <label
                            htmlFor="code"
                            className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                        >
                            Código:
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
                            <option style={{ textAlign: 'center' }} value="">
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
                            htmlFor="category"
                            className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                        >
                            Proveedor:
                        </label>
                        <select
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            value={inputsForm.patent}
                            onChange={handleInputChange}
                            name="patent"
                        >
                            <option style={{ textAlign: 'center' }} value="">
                                Selecciona una marca
                            </option>
                            {providers.map((provider, index) => (
                                <option key={index} name='patent' value={provider.name}>
                                    {provider.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex m-8">
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
                                // value={inputsForm.image}
                                onChange={handleInputChange}
                            />
                        </label>
                        <span className="bg-formBg rounded-r-lg w-72 h-8 flex items-center px-3">
                            {inputsForm.image && `Imagen seleccionada: ${inputsForm.image}`}
                        </span>
                    </div>
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
                        {errors.color && <p className="text-warning text-xs font-extrabold py-0 m-0">{errors.color}</p>}
                    </div>
                    <div className="flex mt-8 ml-8">
                      <label
                        htmlFor="description"
                        className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                      >
                        Descripción:
                      </label>
                      <textarea
                        className="bg-formBg rounded-r-lg w-72 h-40 resize-none"
                        name="description"
                        value={inputsForm.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex my-0 pt-0 pl-8 justify-around">
                      {errors.description && (
                        <p className="text-warning text-xs font-extrabold py-0 m-0">{errors.description}</p>
                      )}
                    </div>
                    <div className={`flex justify-center ${errors.description ? 'mt-4' : 'mt-8'}`}>
                        <button
                            className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                            type="submit"
                        >
                            <h2
                                className="text-primary uppercase font-bold flex items-center justify-center"
                                style={{ color: 'white', fontWeight: 'bold' }}
                            >
                                CREAR PRODUCTO
                            </h2>
                        </button>

                    </div>
                </form>
            </div>
    )
  }
}

export default CreateForm
