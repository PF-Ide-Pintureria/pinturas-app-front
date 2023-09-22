import React from 'react'

const SideBarAuth = ({
  isAuthenticated,
  user,
  activeButton,
  handleButtonClick,
  logout
}) => {
  if (!isAuthenticated) {
    return null
  }

  return (
        <div className="w-1/5 bg-white rounded p-3 shadow-lg">

            <div className="flex items-center space-x-4 p-2 mb-5">
                <img className="h-12 rounded-full" src={user.picture} alt="Profile" />
                <div>
                    <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                        {user.name}
                    </h4>
                    <span className="text-sm tracking-wide flex items-center space-x-1">
                        <svg
                            className="h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        <span className="text-gray-600">Verificado</span>
                    </span>
                </div>
            </div>
            <ul className="space-y-2 text-sm">
                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'dashboard'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => handleButtonClick('account')}>
                        <span className="text-gray-600">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                        <span>Mi Cuenta</span>
                    </a>
                </li>

                <li>
                    <p
                        onClick={() => handleButtonClick('addresses')}
                        className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className=" text-gray-600">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
                        <span>Direcciones</span>
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => handleButtonClick('orders')}
                        className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                            </svg>
                        </span>
                        <span>Mis Pedidos</span>
                    </p>
                </li>
                <li>
                    <p
                        onClick={() => handleButtonClick('favorities')}
                        className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className=" text-gray-600">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </span>
                        <span>Favoritos</span>
                    </p>
                </li>

                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'logout'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => logout()}>
                        <span className="text-red-600">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </span>
                        <span className="text-red-600">Cerrar sesión</span>
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default SideBarAuth
