import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { Cart, UserIcon } from '../SVG'
import logo from '../../img/logo.png'

const Nav = () => {
  const userBd = useSelector((state) => state.user)
  const { isAuthenticated, user } = useAuth0()

  const linkStl = "relative cursor-pointer hover:text-white transition-colors before:-z-10 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+1vw+0.25rem)] before:h-[125%] before:bg-orange before:rounded-[15px] before:opacity-0 hover:before:opacity-100 before:transition-opacity"

  return (
    <header className="z-50 fixed flex justify-center items-center w-[90%] mx-[5%] my-8 h-20 rounded-[50px] bg-[#f1f1f190] border backdrop-blur-md">
      {/* NAV LINKS */}
      <nav className="flex justify-evenly w-[calc((100%-5rem)/2)]">
        <NavLink to="/products" className={linkStl}>
          PRODUCTOS
        </NavLink>
        <NavLink to="/contact" className={linkStl}>
          CONTACTO
        </NavLink>
        <NavLink to="/about" className={linkStl}>
          NOSOTROS
        </NavLink>
        <NavLink to="/blog" className={linkStl}>
          <p>BLOG</p>
        </NavLink>
      </nav>

      {/* LOGO */}
      <NavLink to="/">
        <img
          src={logo}
          alt="logo Ide Pinturerias"
          className="my-4 w-20 object-contain cursor-pointer"
        />
      </NavLink>

      {/* NAV LINKS */}
      <nav className="flex justify-around w-[calc((100%-5rem)/2)]">
        <div className="font-mono flex justify-center items-center cursor-pointer">
          <NavLink
            to="/cart"
            className="flex justify-evenly items-center"
          >
            <div className="w-10 mx-2 hidden sm:block">
              <Cart />
            </div>
            Mi carrito
          </NavLink>
        </div>
        {
          !userBd.id && !isAuthenticated && (
            <div className="flex justify-center items-center cursor-pointer">
              <NavLink
                to="/account"
                className="flex justify-center items-center"
              >
                <div className="w-6 mx-2 hidden sm:block">
                  <UserIcon />
                </div>
                Log in
              </NavLink>
            </div>
          )
        }
        {userBd.id && (
          <div className="flex justify-center items-center cursor-pointer">
            <NavLink
              to="/account"
              className="flex justify-center items-center"
            >
              <div className="w-6 mx-2 hidden sm:block">
                <UserIcon />
              </div>
              {userBd.name}
            </NavLink>
          </div>
        )}
        {isAuthenticated && (
          <div className="flex justify-center items-center cursor-pointer">
            <NavLink
              to="/account"
              className="flex justify-center items-center"
            >
              <div className="w-6 mx-2 hidden sm:block">
                <UserIcon />
              </div>
              {user.name} {user.lastName}
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav