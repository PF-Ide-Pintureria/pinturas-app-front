import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

const SideBarUser = ({
  activeButton,
  handleButtonClick,
  user,
  logout
}) => {
  const navigate = useNavigate()
  const loggedUser = useSelector((state) => state.user)

  if (loggedUser.rol === 'admin') {
    return (
            <div className="w-1/5 bg-white rounded p-3 shadow-lg">

                <div className="flex items-center space-x-4 p-2 mb-5">
                    <img className="h-12 rounded-full" src="https://i.ibb.co/hM4qPfP/blank-profile-picture-973460-960-720.webp" alt="Profile" />
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
                        <p
                            onClick={() => navigate('/admin')}
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
                                        d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
                                    />
                                    <path
                                        d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path
                                        d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path
                                        d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                </svg>
                            </span>
                            <span>Ir al Dashboard</span>
                        </p>
                    </li>
                    {/*
                    <li>
                        <p
                            onClick={() => handleButtonClick("sales")}
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
                                        d="M0 0h24v24H0z" />
                                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                    <path d="M12 17v1m0 -8v1" />
                                </svg>
                            </span>
                            <span>Ventas</span>
                        </p>
                    </li> */}

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
  } else {
    return (
            <div className="w-3/12 bg-white rounded p-3 shadow-lg">

                <div className="flex items-center space-x-4 p-2 mb-5">
                    <img className="h-12 rounded-full" src="https://i.ibb.co/hM4qPfP/blank-profile-picture-973460-960-720.webp" alt="Profile" />
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
}

export default SideBarUser
