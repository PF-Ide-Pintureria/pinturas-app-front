import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../img/logoIde.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

const Nav = () => {
  const userBd = useSelector((state) => state.user)
  const { isAuthenticated, user } = useAuth0()

  return (
    <div className="w-full h-32 flex justify-around items-center font-inter bg-gradient-to-b from-white to-white via-purple-300">
      <NavLink
        to="/products"
        className="bg-yellow-400 bg-opacity-75 rounded-lg px-3 font-inter cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
      >
        Productos
      </NavLink>
      <NavLink
        to="/contact"
        className="bg-yellow-400 bg-opacity-75 rounded-lg px-3 font-inter cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
      >
        Contacto
      </NavLink>
      <NavLink
        to="/about"
        className="bg-yellow-400 bg-opacity-75 rounded-lg px-3 font-inter cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
      >
        Nosotros
      </NavLink>
      <NavLink className="hidden sm:block" to="/">
        <img
          src={logo}
          alt="logo Ide Pinturerias"
          className="w-40 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </NavLink>
      <div>
        <NavLink
          to="/blog"
          className="flex justify-center items-center font-inter cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <div className="w-6 mx-2 hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M30.0811 0H11.9189V7.72414H30.0811V0ZM8.51351 10.6207V2.41379H0V42H42V2.41379H33.4865V10.6207H8.51351Z"
                fill="black"
              />
            </svg>
          </div>
          <p>Blog</p>
        </NavLink>
      </div>
      <div className="font-mono flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125">
        <NavLink
          to="/cart"
          className="flex justify-center items-center font-inter"
        >
          <div className="w-10 mx-2 hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              id="shopping-cart"
            >
              <path d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z"></path>
            </svg>
          </div>
          Mi carrito
        </NavLink>
      </div>
      {!userBd.id && !isAuthenticated && (
        <div className="flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125">
          <NavLink
            to="/account"
            className="flex justify-center items-center font-inter"
          >
            <div className="w-6 mx-2 hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M21 0C14.3726 0 9 5.37258 9 12V22H33V12C33 5.37258 27.6274 0 21 0ZM21 26C13.783 26 6.98562 27.822 1.04864 31.0326L0 31.5996V42H42V31.5996L40.9514 31.0326C35.0144 27.822 28.217 26 21 26Z"
                  fill="black"
                />
              </svg>
            </div>
            Log in
          </NavLink>
        </div>
      )}
      {userBd.id && (
        <div className="flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125">
          <NavLink
            to="/account"
            className="flex justify-center items-center font-inter"
          >
            <div className="w-6 mx-2 hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M21 0C14.3726 0 9 5.37258 9 12V22H33V12C33 5.37258 27.6274 0 21 0ZM21 26C13.783 26 6.98562 27.822 1.04864 31.0326L0 31.5996V42H42V31.5996L40.9514 31.0326C35.0144 27.822 28.217 26 21 26Z"
                  fill="black"
                />
              </svg>
            </div>
            {userBd.name}
          </NavLink>
        </div>
      )}
      {isAuthenticated && (
        <div className="flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125">
          <NavLink
            to="/account"
            className="flex justify-center items-center font-inter"
          >
            <div className="w-6 mx-2 hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M21 0C14.3726 0 9 5.37258 9 12V22H33V12C33 5.37258 27.6274 0 21 0ZM21 26C13.783 26 6.98562 27.822 1.04864 31.0326L0 31.5996V42H42V31.5996L40.9514 31.0326C35.0144 27.822 28.217 26 21 26Z"
                  fill="black"
                />
              </svg>
            </div>
            {user.name} {user.lastName}
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Nav
