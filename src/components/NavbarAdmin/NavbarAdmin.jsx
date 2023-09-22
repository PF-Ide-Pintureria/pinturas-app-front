import React from 'react'

const NavbarAdmin = ({
  activeButton,
  handleButtonClick,
  user,
  backToAccountAction
}) => {
  return (
        <div>
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
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'products'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => handleButtonClick('products')}>
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
                        <span>Productos</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'sales'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => handleButtonClick('sales')}>
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
                        <span>Compras</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'users'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => handleButtonClick('users')}>
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
                        <span>Usuarios</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'blog'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => handleButtonClick('blog')}>
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
                        <span>Blog</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeButton === 'backToAccount'
                            ? 'bg-gray-200 focus:shadow-outline'
                            : 'hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline'
                            }`}
                        onClick={() => backToAccountAction()}>
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
                        <span className="text-red-600">Volver</span>
                    </a>
                </li>
            </ul>
        </div>)
}
export default NavbarAdmin
