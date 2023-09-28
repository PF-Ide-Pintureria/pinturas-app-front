import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProviders } from '../../redux/actions/Providers/getProviders'
import { formatAndPut } from './formatAndPut'
// import validations from './validations'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

const UpdatePricesForm = () => {
  const dispatch = useDispatch()
  const providers = useSelector(state => state.providers)

  const [inputsForm, setInputsForm] = useState({
    provider: '',
    excelFile: ''
  })

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  // Manejar estado local
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    await formatAndPut(inputsForm)
  }
  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Actualizar Precios</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="provider" className="block text-gray-700 text-sm font-bold mb-2">
            Selecciona un Proveedor
          </label>
          <select
                  className="bg-formBg rounded-r-lg w-72 h-8"
                  value={inputsForm.patent}
                  onChange={handleInputChange}
                  name="provider"
              >
                  <option style={{ textAlign: 'center' }} value="">
                      Selecciona una marca
                  </option>
                  {providers.map((provider, index) => (
                      <option key={index} name='patent' value={provider.name}>
                          {provider.name}
                      </option>
                  ))}
              </select>
        </div>
        <div className="mb-4">
          <label htmlFor="excelFile" className="block text-gray-700 text-sm font-bold mb-2">
            Cargar Lista de Precios (Excel)
          </label>
          <input
            type="file"
            accept=".xlsx, .xls"
            className="w-full"
            id="excelFile"
            name="excelFile"
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdatePricesForm
