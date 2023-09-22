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
            <div className="bg-contain m-10 rounded p-2">
                <div
                    className="container my-24 mx-auto  flex flex-wrap  rounded-lg bg-formBg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
} dark:shadow-black/20 md:py-16   backdrop-blur-[30px] mt-20"
                >
                    <div className="w-full md:w-5/12 md:px-3 lg:w-5/12 lg:px-6">
                        <form onSubmit={handleSubmit}>
                            <div className="flex m-8">
                                <label
                                    htmlFor="name"
                                    className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                                >
                                    Nombre:
                                </label>
                                <input
                                    className=" rounded-r-lg w-72 h-8  "
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
                                    className=" rounded-r-lg w-72 h-8"
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
                                    className=" rounded-r-lg w-72 h-32"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    cols="10"
                                    wrap="soft"
                                    value={inputs.message}
                                    onChange={handleChange}
                                    placeholder="Tu mensaje"
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
                    <div className="w-full md:w-7/12">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                                <div className="flex items-start mb-12">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="h-12 w-12"
                                            >
                                                <rect width="100%" height="100%" fill="pink" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-balck">
                                            Información
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            info@idepinturerias.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            +54 351 306 1350
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                                <div className="flex items-start mb-12">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="h-12 w-12"
                                            >
                                                <rect width="100%" height="100%" fill="pink" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-black">
                                            Soporte técnico
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            soporte@idepinturerias.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            +54 351 306 1350
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                                <div className="flex items-start mb-12">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="h-12 w-12"
                                            >
                                                <rect width="100%" height="100%" fill="pink" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-black">
                                            Contabilidad
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            contabilidad@idepinturerias.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-black-200">
                                            +54 351 306 1350
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
