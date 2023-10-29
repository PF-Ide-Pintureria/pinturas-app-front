import React, { useState } from 'react'
import { formValidation } from './formValidation'
import { formatAndSend } from './formatAndSend'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

const Contact = () => {
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    form: ''
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputs({ ...inputs, [property]: value })
    setErrors(formValidation(inputs))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!inputs.name || !inputs.email || !inputs.message) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, complete todos los campos obligatorios.'
      })
      return
    }

    const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRegex.test(inputs.email)) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, ingrese un correo electrónico válido.'
      })
      return
    }

    const errores = formValidation(inputs)
    setErrors(errores)
    if (Object.keys(errors).length === 0) {
      formatAndSend(inputs, dispatch)
    }

    setInputs({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
        <div className="flex- justify-center items-center">
            <div className="bg-contain rounded p-2">
                <div
                    className="container mx-auto  flex flex-wrap  rounded-lg bg-formBg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
} dark:shadow-black/20 md:py-16   backdrop-blur-[30px]"
                >
                        <form onSubmit={handleSubmit}>
                            <div className="flex m-8">
                                <label
                                    htmlFor="name"
                                    className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                                >
                                    Nombre:
                                </label>
                                <input
                                    className=" rounded-r-lg w-72 h-8 placeholder: italic pl-9 "
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={inputs.name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
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

                            <div className={`flex ${errors.name ? 'm-4' : 'm-8'}`}>
                                <label
                                    htmlFor="name"
                                    className="bg-quaternary rounded-l-xl w-40 h-8 flex items-center justify-center"
                                >
                                    Correo :
                                </label>
                                <input
                                    className=" rounded-r-lg w-72 h-8 placeholder: italic pl-9 "
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                    placeholder="Correo electrónico"
                                />
                            </div>
                            <div className="flex my-0 pt-0 pl-8 justify-around">
                                <p
                                    className={`text-warning text-xs font-extrabold py-0 m-0 ${errors.email ? 'block' : 'hidden'
                                        }`}
                                >
                                    {errors.email}
                                </p>
                            </div>

                            <div className="flex m-8">
                                <label
                                    htmlFor="name"
                                    className="bg-quaternary rounded-l-xl w-40 h-32  flex items-center justify-center"
                                >
                                    Tu Mensaje:
                                </label>
                                <textarea
                                    className=" rounded-r-lg w-72 h-32 placeholder: italic pl-2 pt-2 resize-none"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    cols="10"
                                    wrap="soft"
                                    value={inputs.message}
                                    onChange={handleChange}
                                    placeholder="escribe tu mensaje aquí..."
                                />
                            </div>
                            <div className="flex my-0 pt-0 pl-8 justify-around">
                                <p
                                    className={`text-warning text-xs font-extrabold py-0 m-0 ${errors.message ? 'block' : 'hidden'
                                        }`}
                                >
                                    {errors.message}
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex  items-center justify-center"
                            >
                                <h2
                                    className="text-primary uppercase font-bold flex items-center justify-center"
                                    style={{ color: 'white', fontWeight: 'bold' }}
                                >
                                    Enviar
                                </h2>
                            </button>
                        </form>
                </div>
            </div>
        </div>
  )
}

export default Contact
