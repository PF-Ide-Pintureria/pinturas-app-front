import React from 'react'
import { Link } from 'react-router-dom'

const SuccessfulPayment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-gray-800 text-2xl font-bold mb-5 text-center">
          ¡Pago Exitoso!
        </h1>

        <p className="text-gray-600 text-justify">
          Su operación de pago ha sido completada. Tu pago ha sido registrado
          con éxito, puedes mirarlo en tu cuenta en mis pedidos. Cualquier duda,
          comunícate directamente con nosotros: +54 351 306 1350
        </p>
        <img
          src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_MP/279794739274-210520-mla-mco-mlc-mlm-mlu-conoce-las-secciones-de-tu-cuenta-de-mercado-pago-icono-01.png"
          alt="Payment Success"
          className="w-64 mt-8 mx-auto"
        />
        <Link to="/">
          <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm font-medium px-4 py-2 mt-8 rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform w-full">
            Finalizar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SuccessfulPayment
