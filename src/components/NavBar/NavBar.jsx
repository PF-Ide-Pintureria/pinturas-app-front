import { NavLink } from "react-router-dom";
import React from 'react';
import logo from '../../img/logoIde.png'

const Nav = ()  => {
    return (
        <div className='w-screen h-48 mb-6 flex justify-around items-center font-mono'>
            <NavLink to="/contact" className="bg-yellow-400 bg-opacity-75 rounded-lg px-3 font-mono"> Pinturas </NavLink>
            <NavLink to="/contact" className="font-mono"> Contacto </NavLink>
            <NavLink to="/about" className="bg-yellow-400 bg-opacity-75 rounded-lg px-3 font-mono"> Sobre Nosotros </NavLink>
            <NavLink to="/" > <img src={logo} alt="logo Ide Pinturerias" className="w-40 "/></NavLink>
            <NavLink to="/blog" className="font-mono"> Blog </NavLink>
            <NavLink to="/cart" className="font-mono"> Mi carrito </NavLink>
            <NavLink to="/account" className="font-mono"> Mi cuenta </NavLink>
        </div>
    )
}

export default Nav;