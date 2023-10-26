import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import getUserById from '@redux/actions/User/getUserById'
import { updateUserValidation } from './updateUserValidation'
import { putUser } from './putUser'

const UpdateUserFormByAdmin = () => {
  const { idUser } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getUserById(idUser)(dispatch)
  }, [dispatch])

  const userToUpdate = useSelector((state) => state.userId)

  const [errors, setErrors] = useState({})
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
    setErrors(updateUserValidation({ ...inputs, [property]: value }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      await putUser(userToUpdate.id, inputs)
    }
    navigate('/admin')
  }

  return (
          <div className='flex self-center justify-around'>
          <form onSubmit={handleSubmit}>
              <div className=" flex m-8 mb-0">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Nombre: </label>
                  <input
                      type="text"
                      maxLength={30}
                      name="name"
                      onChange={handleChange}
                      value={inputs.name}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <div className="flex my-0 pt-2 pl-8 justify-around">
                <p
                    className={`text-warning text-xs py-0 m-0 ${errors.name ? 'block' : 'hidden'
                        }`}
                >
                    {errors.name}
                </p>
            </div>
              <div className={`flex m-8 mb-0 ${errors.name ? 'mt-4' : 'mt-8'}`}>
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Apellido: </label>
                  <input
                      type="text"
                      maxLength={30}
                      name="lastName"
                      onChange={handleChange}
                      value={inputs.lastName}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <div className="flex my-0 pt-2 pl-8 justify-around">
                <p
                    className={`text-warning text-xs py-0 m-0 ${errors.lastName ? 'block' : 'hidden'
                        }`}
                >
                    {errors.lastName}
                </p>
            </div>
              <div className={`flex m-8 mb-0 ${errors.lastName ? 'mt-4' : 'mt-8'}`}>
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Email: </label>
                  <input
                      type="email"
                      maxLength={30}
                      name="email"
                      onChange={handleChange}
                      value={inputs.email}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />

              </div>
              <div className="flex my-0 pt-2 pl-8 justify-around">
                <p
                    className={`text-warning text-xs py-0 m-0 ${errors.email ? 'block' : 'hidden'
                        }`}
                >
                    {errors.email}
                </p>
            </div>
              <div className={`flex m-8 mb-0 ${errors.email ? 'mt-4' : 'mt-8'}`}>
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Estado: </label>
                  <input
                      type="checkbox"
                      name="active"
                      onChange={handleChange}
                      checked={inputs.active}
                      value={inputs.active ? 'true' : 'false'}
                      className="text-center bg-formBg rounded-r-lg w-36 h-8 p-0 m-0"
                  />
                  {inputs.active ? <span className="m-0 p-0">Activo</span> : <span className="m-0 p-0">Inactivo</span>}
              </div>
              <div className="flex m-8 mb-0 mt-10">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Rol: </label>
                  <select
                      type="select"
                      name="rol"
                      onChange={handleChange}
                      value={inputs.rol}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  >
                      <option value="admin">Admin</option>
                      <option value="client">Cliente</option>
                  </select>
              </div>
              <div className="flex m-8 mb-0 mt-10">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Dirección: </label>
                  <input
                      type="text"
                      maxLength={30}
                      name="address"
                      onChange={handleChange}
                      value={inputs.address}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <div className="flex m-8 mb-0 mt-10">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Localidad: </label>
                  <input
                      type="text"
                      maxLength={30}
                      name="locality"
                      onChange={handleChange}
                      value={inputs.locality}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <div className="flex m-8 mb-0 mt-10">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Provincia: </label>
                  <input
                      type="text"
                      maxLength={30}
                      name="province"
                      onChange={handleChange}
                      value={inputs.province}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <div className="flex m-8 mb-0 mt-10">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Teléfono: </label>
                  <input
                      type="tel"
                      maxLength={30}
                      name="phone"
                      onChange={handleChange}
                      value={inputs.phone}
                      className="text-center bg-formBg rounded-r-lg w-72 h-8"
                  />
              </div>
              <button
                  type="submit"
                  className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-8 font-bold flex items-center justify-center"
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
