import React, { useState, useEffect } from 'react'
import { putUser } from '../../redux/actions/User/putUser'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Addresses = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [inputs, setInputs] = useState({
    address: '',
    locality: '',
    province: ''
  })

  useEffect(() => {
    setInputs({
      address: user.address ? user.address : ' ',
      locality: user.locality ? user.locality : ' ',
      province: user.province ? user.province : ' '
    })
  }, [user])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputs({
      ...inputs,
      [property]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await putUser(user.id, inputs)(dispatch)
      Swal.fire({
        icon: 'success',
        text: 'Información modificada correctamente'
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <li>
        <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:bg-gray-200 focus:shadow-outline">
          <span className=" text-gray-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 21H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 21V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4L19 8L10 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Mi Dirección</span>
        </p>
      </li>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <p className="text-gray-600 text-xs mt-1">Dirección </p>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            placeholder="Mariano Moreno 206"
            onChange={handleChange}
            name="address"
            value={inputs.address}
            maxLength={45}
          />
          <p className="text-gray-600 text-xs mt-1">Localidad </p>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            placeholder="Villa Maria"
            onChange={handleChange}
            name="locality"
            value={inputs.locality}
            maxLength={30}
          />
          <p className="text-gray-600 text-xs mt-1">Provincia </p>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            placeholder="Cordoba"
            onChange={handleChange}
            name="province"
            value={inputs.province}
            maxLength={30}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar cambios
          </button>
        </div>
      </form>
      <footer style={{ textAlign: 'center', padding: '14.5px' }}></footer>
    </div>
  )
}

export default Addresses
