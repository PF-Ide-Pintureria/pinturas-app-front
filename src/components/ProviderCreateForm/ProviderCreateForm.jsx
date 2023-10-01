import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatAndPost } from './formatAndPost'

const CreateProvider = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const [inputsForm, setInputsForm] = useState({
    name: '',
    discount: '',
    markup: ''
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputsForm({ ...inputsForm, [property]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await formatAndPost(inputsForm)
    navigate('/admin')
  }

  if (user.rol !== 'admin') {
    navigate('/account')
  } else {
    return (
            <div className="flex flex-col justify-start">
            <div className="flex justify-around">
                <form className="blog-dash flex flex-col border  rounded-xl mt-2 mb-2" onSubmit={handleSubmit}
                    encType="multipart/form-data">
                    <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8">Crear un nuevo Proveedor</h1>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Nombre</label>
                        <input
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            type='text'
                            name='name'
                            value={inputsForm.name}
                            onChange={handleChange} />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Descuento</label>
                        <input
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            type='text'
                            name='discount'
                            value={inputsForm.discount}
                            onChange={handleChange} />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Ganancia</label>
                        <input
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            type='text'
                            name='markup'
                            value={inputsForm.markup}
                            onChange={handleChange} />
                    </div>
                    <button
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                        type="submit"
                    >
                        <h2
                            className="text-primary uppercase font-bold flex items-center justify-center"
                            style={{ color: 'white', fontWeight: 'bold' }}
                        >
                            CREAR PROVEEDOR
                        </h2>
                    </button>
                </form>
            </div>
        </div>
    )
  }
}

export default CreateProvider
