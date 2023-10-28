import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logoIde.png'
import mercadopago from '../../img/mercadopago.png'
import { Facebook, Instagram, Linkedin, Twitter } from '../SVG'


const Footer = () => {

  const SOCIAL_MEDIA = [
    { icon: Facebook, link: "https://www.facebook.com/ide.pintureria/" },
    { icon: Instagram, link: "https://www.instagram.com/ide.pintureria.ok/" },
    { icon: Linkedin, link: "https://www.linkedin.com/ide.pintureria/" },
    { icon: Twitter, link: "https://twitter.com/ide.pintureria/" }
  ]

  const NAV_LINKS = [
    { text: "productos", link: "/products" },
    { text: "empresa", link: "/about" },
    { text: "ubicación", link: "/location" },
    { text: "contacto", link: "/contact" },
  ]

  return (
    <footer className="w-full flex flex-col items-center bg-primary">
      <div className="w-full flex items-center justify-evenly">
        <div className="hidden sm:block">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo Ide Pinturerias"
              className="w-40 cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <ul className="flex items-center p-5">
            {
              SOCIAL_MEDIA.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="w-8 h-8 mx-2 flex items-center justify-center bg-white bg-opacity-20 rounded-md cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon />
                  </a>
                </li>
              ))
            }
          </ul>

          <nav>
            <ul className="flex items-center p-5">
              {
                NAV_LINKS.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.link}
                      className="font-sans mx-2 text-white cursor-pointer uppercase"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

        <div className="hidden sm:block">
          <img src={mercadopago} alt="logo Mercado Pago" className="w-24" />
        </div>
      </div>

      <p className="font-sans text-white mb-6">
        ©Copyright 2023. Todos los derechos reservados a&nbsp;
        <NavLink
          to="/developers"
          className="font-sans font-bold text-white cursor-pointer"
        >
          Work Team Developers
        </NavLink>
      </p>
    </footer>
  )
}

export default Footer