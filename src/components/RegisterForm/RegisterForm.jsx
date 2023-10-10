import React, { useState } from 'react'
import { postRegisterEmail } from '../../redux/actions/Mail/postRegisterEmail'
import { postRegisterUser } from '../../redux/actions/User/postRegisterUser'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { welcomeMessage } from './welcomeMessage'
import Swal from 'sweetalert2'
import { validation } from './validation'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputsForm, setInputsForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    empty: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputsForm({ ...inputsForm, [name]: value })
    setErrors(validation({ ...inputsForm, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (Object.keys(errors).length === 0) {
        const { status, user } = (await postRegisterUser(inputsForm)(dispatch)).data
        if (status === 'success') {
          await postRegisterEmail({ id: user.id, message: welcomeMessage(inputsForm.name) })(dispatch)
          Swal.fire({
            icon: 'success',
            text: 'Usuario registrado correctamente'
          })
          navigate('/login')
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Error al registrar usuario'
      })
    }
  }

  return (
        <div className="font-sans">
            <div className="relative sm:max-w-sm w-full">
                <div className="relative  sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-purple-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl px-20 py-5 bg-gray-100 shadow-md">
                        <label
                            htmlFor=""
                            className="block text-base pt-2 pb-5 text-gray-700 text-center font-semibold"
                        >
                            Registrate
                        </label>
                        <form onSubmit={handleSubmit} className="w-60">
                            <div >
                                <input
                                    type="text"
                                    placeholder="Nombres"
                                    name='name'
                                    value={inputsForm.name}
                                    onChange={handleInputChange}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                <div className="flex my-0 pt-2 pl-8 pl-2 justify-around">
                                  {errors.name
                                    ? <span className="text-warning text-xs py-0 m-0">{errors.name}</span>
                                    : <span className='h-4'></span>}
                                </div>
                            </div>

                            <div className="mt-7">
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    name="lastName"
                                    value={inputsForm.lastName}
                                    onChange={handleInputChange}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                <div className="flex my-0 pt-2 pl-8 pl-2 justify-around">
                                  {errors.lastName
                                    ? <span className="text-warning text-xs py-0 m-0">{errors.lastName}</span>
                                    : <span className='h-4'></span>}
                                </div>
                            </div>

                            <div className="mt-7">
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={inputsForm.email}
                                    onChange={handleInputChange}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                <div className="flex my-0 pt-2 pl-8 pl-2 justify-around">
                                  {errors.email
                                    ? <span className="text-warning text-xs py-0 m-0">{errors.email}</span>
                                    : <span className='h-4'></span>}
                                </div>
                            </div>

                            <div className="mt-7">
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={inputsForm.password}
                                    onChange={handleInputChange}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                <div className="flex my-0 pt-2 pl-8 pl-2 justify-around">
                                  {errors.password
                                    ? <span className="text-warning text-xs py-0 m-0">{errors.password}</span>
                                    : <span className='h-4'></span>}
                                </div>
                            </div>

                            <div className="mt-7">
                                <input
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    name="confirmPassword"
                                    value={inputsForm.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.confirmPassword
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                        }`}
                                />
                                <div className="flex my-0 pt-2 pl-8 pl-2 justify-around">
                                  {errors.confirmPassword
                                    ? <span className="text-warning text-xs py-0 m-0">{errors.confirmPassword}</span>
                                    : <span className='h-4'></span>}
                                </div>
                            </div>

                            <div className=" pt-8">
                                <button
                                    type="submit"
                                    className="bg-blue-500 w-full flex items-center justify-center py-3 rounded-xl text-white shadow-xl hover:bg-blue-600  hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                >
                                    Registrarse
                                </button>
                            </div>
                            <div className="w-64">
                              <span className='mt-2 text-xs text-justify text-gray-400'>
                                Contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número
                              </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterForm
