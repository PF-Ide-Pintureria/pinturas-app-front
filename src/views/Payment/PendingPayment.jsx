import React from 'react'
import { Link } from 'react-router-dom'

const PendingPayment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-yellow-600 text-2xl font-bold mb-5 text-center">
          ¡Pago Pendiente!
        </h1>

        <p className="text-gray-600 text-justify">
          Tu pago está siendo procesado y se encuentra en estado pendiente. Por
          favor, espera unos momentos mientras verificamos la transacción. Si el
          pago no se confirma en breve, por favor, comunícate con nuestro
          servicio de atención al cliente al +54 351 306 1350 para obtener
          ayuda.
        </p>
        <img
          src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_MP/279794739274-210520-mla-mco-mlc-mlm-mlu-conoce-las-secciones-de-tu-cuenta-de-mercado-pago-icono-03.png"
          alt="Payment Pending"
          className="w-64 mt-8 mx-auto"
        />
        <Link to="/">
          <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm font-medium px-4 py-2 mt-8 rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform w-full">
            Volver a la Página Principal
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PendingPayment
