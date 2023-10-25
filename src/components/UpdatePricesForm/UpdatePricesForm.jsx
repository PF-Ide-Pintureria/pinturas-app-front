import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProvidersActive } from '@redux/actions/Providers/getProvidersActive'
import { formatAndPut } from './formatAndPut'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const UpdatePricesForm = () => {
  const dispatch = useDispatch()
  const providers = useSelector(state => state.providers)
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [inputsForm, setInputsForm] = useState({
    provider: '',
    excelFile: ''
  })

  useEffect(() => {
    dispatch(getProvidersActive())
  }, [dispatch])

  // MANEJAR ESTADO LOCAL
  const handleInputChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    if (property === 'excelFile') {
      setInputsForm({
        ...inputsForm,
        excelFile: event.target.files[0]
      })
    } else {
      setInputsForm({ ...inputsForm, [property]: value })
    }
  }

  // ENVIAR FORMULARIO
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    if (inputsForm.provider !== '' && inputsForm.excelFile !== '') {
      await formatAndPut(inputsForm)
    }
    setIsLoading(false)
    // LIPIAR DATOS LUEGO DEL SUBMIT PARA ENVITAR ERRORES
    setInputsForm({
      provider: '',
      excelFile: ''
    })
    document.getElementById('excelFile').value = ''
  }

  if (user?.rol !== 'admin') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes permisos para realizar esta acción.'
    })
    navigate('/')
  } else {
    return (
    <div className=" flex-column ">
      <h1 className="text-3xl text-primary mt-10 uppercase font-bold flex items-center justify-center">Actualizar Precios</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex items-center justify-center m-8">
          <label htmlFor="provider" className="bg-quaternary rounded-l-xl w-40 h-8 w-36 flex items-center justify-center">
            Proveedor
          </label>
          <select
                  className="bg-formBg rounded-r-lg w-72 h-8"
                  value={inputsForm.provider}
                  onChange={handleInputChange}
                  name="provider"
              >
                  <option style={{ textAlign: 'center' }} value="">
                      Selecciona un proveedor
                  </option>
                  {providers.map((provider, index) => (
                      <option key={index} name='patent' value={provider.name}>
                          {provider.name}
                      </option>
                  ))}
              </select>
        </div>
        <div className="max-w-[450px] flex items-center justify-center m-8">
        {isLoading
          ? (
                <img
                  src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                  alt="loading"
                  className="w-44 h-44"
                />
            )
          : (<span className="inline-block text-red-500 text-lg m-8 justify-center">
                * Para actualizar masivamente los productos debes cargar un excel donde una columna `codigo` tenga los códigos y otra `precio` tenga los precios respectivamente
              </span>)}

        </div>
        <div className="flex items-center justify-center p-2 m-2">
          <input
            type="file"
            accept=".xlsx, .xls"
            className="ml-8"
            id="excelFile"
            name="excelFile"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-center text-center">
        <button
                  className="rounded-xl w-auto p-4 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                  type="submit"
              >
                  <h2
                      className="text-primary uppercase font-bold flex items-center justify-center"
                      style={{ color: 'white', fontWeight: 'bold' }}
                  >
                      ACTUALIZAR
                  </h2>
              </button>
        </div>
      </form>
    </div>
    )
  }
}

export default UpdatePricesForm
