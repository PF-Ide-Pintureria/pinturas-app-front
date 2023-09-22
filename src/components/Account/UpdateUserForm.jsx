import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putUser } from '../../redux/actions/User/putUser'
import { useAuth0 } from '@auth0/auth0-react'
import { deleteUser } from '../../redux/actions/User/deleteUser'
import { logoutUser } from '../../redux/actions/User/logoutUser'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateUserForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [inputs, setInputs] = useState({
    name: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    passwordMatch: true
  })
  const [dataToSend, setDataToSend] = useState({})

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth0()

  // Funciones para manejar los cambios en los campos
  // const handleNameChange = (e) => setName(e.target.value);
  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  // const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  // const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  useEffect(() => {
    if (user) {
      setInputs({
        name: user?.name,
        lastName: user?.lastName,
        email: user?.email
      })
    }
  }, [user])

  useEffect(() => {
    setDataToSend({
      name: inputs.name,
      lastName: inputs.lastName,
      email: inputs.email
    })
    console.log('data en el effect', dataToSend)
  }, [inputs])

  console.log('user', user)

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    // Special case for password fields to check if they match
    if (property === 'newPassword' || property === 'confirmPassword') {
      const passwordMatch =
                property === 'newPassword'
                  ? inputs.confirmPassword === value
                  : inputs.newPassword === value
      setInputs({
        ...inputs,
        [property]: value,
        passwordMatch
      })
    } else {
      setInputs({
        ...inputs,
        [property]: value
      })
    }
    console.log('data en el change', dataToSend)
  }

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validar que los campos no estén vacíos
    if (!inputs.name || !inputs.email) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, completa todos los campos.'
      })
      return
    }

    setDataToSend({
      name: inputs.name,
      lastName: inputs.lastName,
      email: inputs.email
    })
    console.log('dataToSend', dataToSend)

    // Validar que las contraseñas coincidan
    if (inputs.newPassword !== inputs.confirmPassword) {
      setInputs({
        ...inputs,
        passwordMatch: false
      })
      return
    } else {
      setInputs({
        ...inputs,
        passwordMatch: true
      })
    }

    if (inputs.newPassword) {
      setDataToSend({
        ...dataToSend,
        password: inputs.newPassword
      })
    } else {
      setDataToSend({
        ...dataToSend,
        name: inputs.name,
        lastName: inputs.lastName,
        email: inputs.email
      })
    }
    await putUser(user.id, dataToSend)(dispatch).then((response) => {
      console.log('response', response)
      if (response.status === 200) {
        Swal.fire('Usuario Modificado')
      } else {
        Swal.fire('HUBO UN ERROR PTTMMMMMMM')
      }
    })
  }
  const handleDelete = () => {
    deleteUser(user.id)(dispatch)
    Swal.fire('Usuario eliminado')
    logoutUser(dispatch)
    navigate('/')
  }
  if (isAuthenticated) {
    return (
            <div className="container mx-auto px-4">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Nombre
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={inputs.name}
                            onChange={handleChange}
                        />
                        <p className="text-gray-600 text-xs mt-1">
                            Así será como se mostrará tu nombre en la sección de tu cuenta.
                        </p>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Apellido
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-name"
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={inputs.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-email"
                        >
                            Actualiza dirección de correo electrónico
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={inputs.email}
                            onChange={handleChange}
                            disabled="true"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-current-password"
                        >
                            Contraseña actual (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-current-password"
                            type="password"
                            name="currentPassword"
                            placeholder="Contraseña Actual"
                            value={inputs.currentPassword}
                            onChange={handleChange}
                            autoComplete="false"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-new-password"
                        >
                            Nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-new-password"
                            type="password"
                            name="newPassword"
                            placeholder="Contraseña Nueva"
                            value={inputs.newPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-confirm-password"
                        >
                            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${!inputs.passwordMatch ? 'border-red-500' : 'border-gray-200'
                                }`}
                            id="grid-confirm-password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirma Contraseña"
                            value={inputs.confirmPassword}
                            onChange={handleChange}
                        />
                        {!inputs.passwordMatch && (
                            <p className="text-red-500 text-xs mt-1">
                                Las contraseñas no coinciden.
                            </p>
                        )}
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
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Nombre
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={inputs.name}
                            onChange={handleChange}
                        />
                        <p className="text-gray-600 text-xs mt-1">
                            Así será como se mostrará tu nombre en la sección de tu cuenta.
                        </p>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Apellido
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-name"
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={inputs.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-email"
                        >
                            Actualiza dirección de correo electrónico
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-current-password"
                        >
                            Contraseña actual (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-current-password"
                            type="password"
                            name="currentPassword"
                            placeholder="Contraseña Actual"
                            value={inputs.currentPassword}
                            onChange={handleChange}
                            autoComplete="false"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-new-password"
                        >
                            Nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="grid-new-password"
                            type="password"
                            name="newPassword"
                            placeholder="Contraseña Nueva"
                            value={inputs.newPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-confirm-password"
                        >
                            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${!inputs.passwordMatch ? 'border-red-500' : 'border-gray-200'
                                }`}
                            id="grid-confirm-password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirma Contraseña"
                            value={inputs.confirmPassword}
                            onChange={handleChange}
                        />
                        {!inputs.passwordMatch && (
                            <p className="text-red-500 text-xs mt-1">
                                Las contraseñas no coinciden.
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
