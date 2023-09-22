import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putUser } from '../../redux/actions/User/putUser.js'
import { useParams } from 'react-router-dom'
import getUserById from '../../redux/actions/User/getUserById'
import Swal from 'sweetalert2'

const UpdateUserForm = () => {
  const { idUser } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    getUserById(idUser)(dispatch)
  }, [dispatch])

  const findUser = useSelector((state) => state.userId)

  const [inputs, setInputs] = useState({
    name: '',
    lastName: '',
    email: '',
    active: true,
    rol: 'client',
    isBanned: false,
    address: '',
    locality: '',
    province: '',
    phone: ''
  })
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (findUser) {
      setInputs({
        name: findUser?.name,
        lastName: findUser?.lastName,
        email: findUser?.email,
        active: findUser?.active,
        rol: findUser?.rol,
        isBanned: findUser?.isBanned,
        address: findUser?.address || '',
        locality: findUser?.locality || '',
        province: findUser?.province || '',
        phone: findUser?.phone || ''
      })
    }
  }, [findUser])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setInputs({ ...inputs, [property]: value })
    setFormData({
      ...formData,
      [property]: value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await putUser(findUser.id, formData)(dispatch).then(response => {
      if (!response) { Swal.fire('error') }
    })
    Swal.fire({
      icon: 'success',
      text: 'Usuario modificado correctamente'
    })
  }

  if (findUser.active) {
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Apellido: </label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={inputs.lastName}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Email: </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={inputs.email}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Status: </label>
                        <input
                            type="checkbox"
                            name="active"
                            onChange={handleChange}
                            checked={inputs.active}
                            value={inputs.active ? 'true' : 'false'}
                            className="bg-formBg rounded-r-lg w-72 h-8 p-0 m-0"
                        />
                        {inputs.active ? <span className="m-0 p-0">Activo</span> : <span className="m-0 p-0">Inactivo</span>}
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Rol: </label>
                        <select
                            type="select"
                            name="rol"
                            onChange={handleChange}
                            value={inputs.rol}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        >
                            <option value="admin">Admin</option>
                            <option value="client">Cliente</option>
                        </select>
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Baneo: </label>
                        <input
                            type="checkbox"
                            name="isBanned"
                            onChange={handleChange}
                            checked={inputs.isBanned}
                            value={inputs.isBanned ? 'true' : 'false'}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                        {inputs.isBanned ? <span className="m-0 p-0">Bloqueado</span> : <span className="m-0 p-0">No bloqueado</span>}
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Dirección: </label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={inputs.address}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Localidad: </label>
                        <input
                            type="text"
                            name="locality"
                            onChange={handleChange}
                            value={inputs.locality}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Provincia: </label>
                        <input
                            type="text"
                            name="province"
                            onChange={handleChange}
                            value={inputs.province}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Teléfono: </label>
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={inputs.phone}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                    ><h2
                        className="text-primary uppercase font-bold flex items-center justify-center"
                        style={{ color: 'white', fontWeight: 'bold' }}
                    >
                            Actualizar usuario
                        </h2>
                    </button>
                </form>
            </div>
    )
  } else {
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Apellido: </label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={inputs.lastName}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Email: </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={inputs.email}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Status: </label>
                        <input
                            type="checkbox"
                            name="active"
                            onChange={handleChange}
                            checked={inputs.active}
                            value={inputs.active ? 'true' : 'false'}
                            className="bg-formBg rounded-r-lg w-72 h-8 p-0 m-0"
                            disabled="true"
                        />
                        {inputs.active ? <span className="m-0 p-0">Activo</span> : <span className="m-0 p-0">Inactivo</span>}
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Rol: </label>
                        <select
                            type="select"
                            name="rol"
                            onChange={handleChange}
                            value={inputs.rol}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        >
                            <option value="admin">Admin</option>
                            <option value="client">Cliente</option>
                        </select>
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Baneo: </label>
                        <input
                            type="checkbox"
                            name="isBanned"
                            onChange={handleChange}
                            checked={inputs.isBanned}
                            value={inputs.isBanned ? 'true' : 'false'}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                        {inputs.isBanned ? <span className="m-0 p-0">Bloqueado</span> : <span className="m-0 p-0">No bloqueado</span>}
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Dirección: </label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={inputs.address}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Localidad: </label>
                        <input
                            type="text"
                            name="locality"
                            onChange={handleChange}
                            value={inputs.locality}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Provincia: </label>
                        <input
                            type="text"
                            name="province"
                            onChange={handleChange}
                            value={inputs.province}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <div className=" flex m-8 mb-0">
                        <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Teléfono: </label>
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={inputs.phone}
                            className="bg-formBg rounded-r-lg w-72 h-8"
                            disabled="true"
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                        disabled="true"
                    ><h2
                        className="text-primary uppercase font-bold flex items-center justify-center"
                        style={{ color: 'white', fontWeight: 'bold' }}
                    >
                            Actualizar usuario
                        </h2>
                    </button>
                </form>
            </div>
    )
  }
}

export default UpdateUserForm
