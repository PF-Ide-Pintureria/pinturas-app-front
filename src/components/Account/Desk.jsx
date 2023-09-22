import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Desk = () => {
  const { isAuthenticated, user } = useAuth0()

  return (
    <div>
      {isAuthenticated
        ? (
          <>
            <h2>Hola {user.name}</h2>
            <p>
              <br></br> Desde el escritorio de tu cuenta puedes ver tus pedidos
              recientes, gestionar <br></br> tus direcciones de envío y
              facturación y los detalles de tu cuenta.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-purple-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Direcciones
                </span>
              </button>
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Mis Pedidos
                </span>
              </button>
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Lista De Deseos
                </span>
              </button>
            </div>
          </>
          )
        : (
          <p>Inicia sesión para ver el contenido.</p>
          )
      }
    </div>
  )
}

export default Desk
