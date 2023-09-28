import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { allCategories } from '../../redux/actions/Categories/allCategories'
// import validations from './validations'
// import { formatAndPost } from './formatAndPost'
import { getProviders } from '../../redux/actions/Providers/getProviders'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

const UpdatePricesForm = () => {
  const dispatch = useDispatch()
  const providers = useSelector(state => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Formulario</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="provider" className="block text-gray-700 text-sm font-bold mb-2">
            Selecciona un Proveedor
          </label>
          <select
                  className="bg-formBg rounded-r-lg w-72 h-8"
                  // value={inputsForm.patent}
                  // onChange={handleInputChange}
                  name="patent"
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
          <label htmlFor="priceList" className="block text-gray-700 text-sm font-bold mb-2">
            Cargar Lista de Precios (Excel)
          </label>
          <input
            type="file"
            accept=".xlsx, .xls"
            className="w-full"
            id="priceList"
            name="priceList"
            // onChange={handleFileUpload}
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
