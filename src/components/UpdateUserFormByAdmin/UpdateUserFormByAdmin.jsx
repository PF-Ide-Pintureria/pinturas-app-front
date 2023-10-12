import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import getUserById from '../../redux/actions/User/getUserById'
import Swal from 'sweetalert2'
import axios from 'axios'
import { BASE_URL } from '../../redux/action-type.js'

const UpdateUserFormByAdmin = () => {
  const { idUser } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getUserById(idUser)(dispatch)
  }, [dispatch])

  const userToUpdate = useSelector((state) => state.userId)

  const [inputs, setInputs] = useState({
    name: '',
    lastName: '',
    email: '',
    active: true,
    rol: 'client',
    address: '',
    locality: '',
    province: '',
    phone: ''
  })
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (userToUpdate) {
      setInputs({
        name: userToUpdate.name,
        lastName: userToUpdate.lastName,
        email: userToUpdate.email,
        active: userToUpdate.active,
        rol: userToUpdate.rol,
        address: userToUpdate.address || '',
        locality: userToUpdate.locality || '',
        province: userToUpdate.province || '',
        phone: userToUpdate.phone || ''
      })
    }
  }, [userToUpdate])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setInputs({ ...inputs, [property]: value })
    setFormData({ ...formData, [property]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`${BASE_URL}users/${userToUpdate.id}`, formData)
      Swal.fire('Usuario actualizado con exito')
      navigate('/admin')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo actualizar el usuario'
      })
    }
  }

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
}

export default UpdateUserFormByAdmin
