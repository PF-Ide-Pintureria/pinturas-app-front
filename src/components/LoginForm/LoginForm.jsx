import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { postLoginUser } from '../../redux/actions/User/postLoginUser'
import { logoutUser } from '../../redux/actions/User/logoutUser'
import Swal from 'sweetalert2'

const LoginForm = () => {
  const { isAuthenticated, loginWithPopup, user } = useAuth0()

  const [userInfo, setUserInfo] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated && !userInfo) {
      setUserInfo(user)
    }
  }, [isAuthenticated, userInfo, user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = {}

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

    if (Object.keys(errors).length === 0) {
      let primeraRes

      try {
        primeraRes = await postLoginUser({ email, password })(dispatch)
      } catch (err) {
        console.error(err)
      };

      if (primeraRes.status === 'fail') {
        Swal.fire({
          icon: 'error',
          text: primeraRes.message
        })
      } else if (primeraRes?.acceso?.user?.active === false) {
        Swal.fire({
          icon: 'error',
          text: 'Usuario no encontrado'
        })
        logoutUser(dispatch)
        navigate('/login/register')
      } else if (primeraRes.status === 'success') {
        Swal.fire({
          icon: 'success',
          text: 'Usuario Logueado correctamente'
        })
      }
      // });
    } else {
      setErrors(errors)
    }
  }

  const navigateToRegister = () => {
    navigate('/login/register')
  }

  return (
        <div className="font-sans">
            <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div className="card bg-purple-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div className="relative w-full rounded-3xl  px-16 py-5 bg-gray-100 shadow-md">
                    <label
                        htmlFor=""
                        className="block text-base pt-10 pb-5 text-gray-700 text-center font-semibold"
                    >
                        Iniciar sesión
                    </label>
                    <form onSubmit={handleSubmit}>
                        <div>
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

                        <div className="pt-10">
                            <button
                                type="submit"
                                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:bg-blue-600 hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>

                    <div className="mt-7">
                        <button
                            onClick={() => loginWithPopup()}
                            type="submit"
                            className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:bg-blue-600 hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                        >
                            Iniciar con Google
                        </button>
                    </div>

                    <p className="text-gray-400 pt-5 pb-10 text-m ">
                        ¿No tienes una cuenta?{' '}
                        <a
                            className="text-center text-blue-600 hover:text-blue-800"
                            href="#"
                            onClick={navigateToRegister}
                        >
                            Registrate
                        </a>{' '}
                    </p>
                </div>
                <div className="mt-7">

                </div>
            </div>
        </div>
  )
}

export default LoginForm
