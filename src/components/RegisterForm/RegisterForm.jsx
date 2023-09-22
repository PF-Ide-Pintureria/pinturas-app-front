import React, { useState } from 'react'
import { postRegisterEmail } from '../../redux/actions/Mail/postRegisterEmail'
import { postRegisterUser } from '../../redux/actions/User/postRegisterUser'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const welcomeMessage = (`<html lang="en">

        <head>
            <meta charset="UTF-8">
                <title>Bienvenido a Ide Pinturerias</title>
        </head>

        <body>
            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                <div style="margin:50px auto;width:70%;padding:20px 0">
                    <div style="border-bottom:1px solid #eee">
                        <a href="http://localhost:5173"
                            style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Ide Pintureria</a>
                    </div>
                    <h3>Hola ${name}!</h3>
                    <p>Bienvenido a la familia de Ide Pintureria.</p>
                    <p>Puedes ir a modificar tus datos en la seccion de <a href="https://pinturas-app-front-git-pre-develop-pf-pinturas.vercel.app/account">Mi Cuenta</a></p>
                    <p>En esta sección tambien encontrarás tu pedidos, tus favoritos y podrás cerrar sesión. <br />

                    Ante cualquier cosa, no dudes en contactarnos a través de nuestro formulario de <a href="https://pinturas-app-front-git-pre-develop-pf-pinturas.vercel.app/contact">contacto</a>.
                        
                    <p style="font-size:0.9em;">Saludos,<br />Ide Pintureria</p>
                    <hr style="border:none;border-top:1px solid #eee" />
                    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                        <p>Ide Pintureria</p>
                        <p>Ruta 5 - Esquina La Isla
                            Anisacate, Córdoba</p>
                        <p>Argentina</p>
                    </div>
                </div>
            </div>
        </body>

    </html>`)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = {}

    if (!name.trim()) {
      errors.name = 'El nombre es obligatorio'
    }
    if (!lastName.trim()) {
      errors.lastName = 'El apellido es obligatorio'
    }

    if (!email.trim()) {
      errors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El correo electrónico no es válido'
    }

    if (!password) {
      errors.password = 'La contraseña es obligatoria'
    } else if (password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden'
    }

    if (Object.keys(errors).length === 0) {
      await postRegisterUser({ name, lastName, email, password })(dispatch).then((response) => {
        if (response.status === 200) {
          postRegisterEmail({ id: response.data.user.id, message: welcomeMessage })(dispatch)
          Swal.fire({
            icon: 'success',
            text: 'Usuario registrado correctamente'
          })
          navigate('/login')
        }
      })
    } else {
      setErrors(errors)
    }
  }

  return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center ">
                <div className="relative  sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-purple-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl px-20 py-5 bg-gray-100 shadow-md">
                        <label
                            htmlFor=""
                            className="block text-base pt-10 pb-5 text-gray-700 text-center font-semibold"
                        >
                            Registrate
                        </label>
                        <form onSubmit={handleSubmit} className="w-60">
                            <div >
                                <input
                                    type="text"
                                    placeholder="Nombres"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div className="mt-7">
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    value={lastName}
                                    onChange={(e) => setLastname(e.target.value)}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                )}
                            </div>

                            <div className="mt-7">
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="mt-7">
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div className="mt-7">
                                <input
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.confirmPassword
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                        }`}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            <div className=" pt-8 pb-10 ">
                                <button
                                    type="submit"
                                    className="bg-blue-500 w-full flex items-center justify-center py-3 rounded-xl text-white shadow-xl hover:bg-blue-600  hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterForm
