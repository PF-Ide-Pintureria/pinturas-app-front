import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putUser } from '../../redux/actions/User/putUser'
import { useAuth0 } from '@auth0/auth0-react'
import { deleteUser } from '../../redux/actions/User/deleteUser'
import { logoutUser } from '../../redux/actions/User/logoutUser'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateUserValidation } from './updateUserValidation'

const UpdateUserForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)
  const { isAuthenticated } = useAuth0()

  const [inputsForm, setInputsForm] = useState({
    name: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    empty: ''
  })

  useEffect(() => {
    setInputsForm({
      name: user.name,
      lastName: user.lastName,
      email: user.email
    })
  }, [dispatch])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputsForm({ ...inputsForm, [property]: value })
    setErrors(updateUserValidation({ ...inputsForm, [property]: value }))
  }

  // ENVIAR FORMULARIO
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (Object.keys(errors).length === 0) {
      const { newPassword, confirmPassword, ...data } = inputsForm
      data.password = newPassword
      const response = await putUser(user.id, data)(dispatch)

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Cuenta actualizada'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ooops!',
          text: 'Error al actualizar su cuenta'
        })
      }
    }
  }
  // BOTON DELETE ELIMINAR CUENTA
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará tu cuenta permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar cuenta',
      cancelButtonText: 'Cancelar'
    })

    if (result.isConfirmed) {
      // Si el usuario confirma, eliminar la cuenta
      deleteUser(user.id)(dispatch)
      Swal.fire('Usuario eliminado', '', 'success')
      logoutUser(dispatch)
      navigate('/')
    }
  }

  if (isAuthenticated) {
    return (
            <div className="container mx-auto px-4">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Nombre
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={inputsForm.name}
                            onChange={handleChange}
                        />
                        <p className="text-gray-600 text-xs mt-1">
                            Así será como se mostrará tu nombre en la sección de tu cuenta.
                        </p>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Apellido
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-name"
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={inputsForm.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-email"
                        >
                            Actualiza dirección de correo electrónico
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border violeter-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={inputsForm.email}
                            onChange={handleChange}
                            disabled="true"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
                    </div>
                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-new-password"
                        >
                            Nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-new-password"
                            type="password"
                            name="newPassword"
                            placeholder="Contraseña Nueva"
                            value={inputsForm.newPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-confirm-password"
                        >
                            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-confirm-password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirma Contraseña"
                            value={inputsForm.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Guardar cambios
                        </button>
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleDelete}
                        >
                            Eliminar Cuenta
                        </button>
                    </div>
                </form>
                <footer style={{ textAlign: 'center', padding: '14.5px' }}></footer>
            </div>
    )
  } else {
    return (
            <div className="container mx-auto px-4">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Nombre
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            maxLength={30}
                            name="name"
                            placeholder="Nombre"
                            value={inputsForm.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Apellido
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-name"
                            type="text"
                            maxLength={30}
                            name="lastName"
                            placeholder="Apellido"
                            value={inputsForm.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.lastName}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-email"
                        >
                            Correo de tu cuenta
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border violeter-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            maxLength={30}
                            name="email"
                            placeholder="Correo electrónico"
                            value={inputsForm.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-new-password"
                        >
                            Nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-new-password"
                            type="password"
                            maxLength={30}
                            name="newPassword"
                            placeholder="Contraseña Nueva"
                            value={inputsForm.newPassword}
                            onChange={handleChange}
                        />
                        {errors.newPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.newPassword}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2"
                            htmlFor="grid-confirm-password"
                        >
                            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 roundedviolet3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-confirm-password"
                            type="password"
                            maxLength={30}
                            name="confirmPassword"
                            placeholder="Confirma Contraseña"
                            value={inputsForm.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            name="update"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Guardar cambios
                        </button>
                        <button
                            type="button"
                            name="delete"
                            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleDelete}
                        >
                            Eliminar Cuenta
                        </button>
                    </div>
                </form>
                <footer style={{ textAlign: 'center', padding: '14.5px' }}></footer>
            </div>
    )
  }
}

export default UpdateUserForm
