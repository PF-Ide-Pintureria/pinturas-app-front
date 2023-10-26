import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatAndPost } from './formatAndPost'
import { validation } from './validation'

const CreateProviderForm = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const [isLoading, setIsLoading] = useState(true)

  const [inputsForm, setInputsForm] = useState({
    name: '',
    discount: '',
    markup: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    discount: '',
    markup: '',
    empty: ''
  })

  useEffect(() => {
    // Simular una carga asincrónica de los datos del usuario
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputsForm({ ...inputsForm, [property]: value })
    setErrors(validation({ ...inputsForm, [property]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      await formatAndPost(inputsForm)
      navigate('/admin')
    }
  }

  if (user?.rol !== 'admin') {
    navigate('/')
  } else {
    return (
            <div className="flex flex-col justify-start">
            <div className="flex justify-center">
                <form className="blog-dash flex flex-col border  rounded-xl mt-2 mb-2" onSubmit={handleSubmit}
                    encType="multipart/form-data">
                    <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8 pl-2">Crear nuevo Proveedor</h1>
                    <div className=" flex m-8 pl-2 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-32 h-8 pl-2  flex items-center justify-center">Nombre</label>
                        <input
                            className="bg-formBg rounded-r-lg w-64 h-8 pl-2"
                            maxLength="25"
                            type='text'
                            name='name'
                            value={inputsForm.name}
                            onChange={handleChange} />
                    </div>
                    <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                      {errors.name
                        ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.name}</span>
                        : <span className='h-4'></span>}
                    </div>
                    <div className=" flex m-8 pl-2 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-32 h-8 pl-2  flex items-center justify-center">Descuento</label>
                        <input
                            className="bg-formBg rounded-r-lg w-44 h-8 pl-2 text-center"
                            maxLength="5"
                            type='text'
                            name='discount'
                            value={inputsForm.discount}
                            onChange={handleChange} />
                    </div>
                    <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                      {errors.discount
                        ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.discount}</span>
                        : <span className='h-4'></span>}
                    </div>
                    <div className=" flex m-8 pl-2 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-32 h-8 pl-2  flex items-center justify-center">Ganancia</label>
                        <input
                            className="bg-formBg rounded-r-lg w-44 h-8 pl-2 text-center"
                            maxLength="5"
                            type='text'
                            name='markup'
                            value={inputsForm.markup}
                            onChange={handleChange} />
                    </div>
                    <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                      {errors.markup
                        ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.markup}</span>
                        : <span className='h-4'></span>}
                    </div>
                    <div className="flex justify-center mt-4">
                    <button
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold "
                        type="submit"
                        disabled={inputsForm.name === '' || inputsForm.discount === '' || inputsForm.markup === ''}
                    >
                        <h2
                            className="text-primary uppercase font-bold flex items-center justify-center"
                            style={{ color: 'white', fontWeight: 'bold' }}
                        >
                            CREAR PROVEEDOR
                        </h2>
                    </button>
                    </div>
                    <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                      {errors.empty
                        ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.empty}</span>
                        : <span className='h-4'></span>}
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default CreateProviderForm
