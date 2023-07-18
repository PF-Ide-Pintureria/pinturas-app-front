import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import React from 'react';
import logo from '../../img/logoIde.png'

const Nav = ()  => {
    return (
        <div className={style.container}>
            <NavLink to="/contact"> Contacto </NavLink>
            <NavLink to="/about"> Sobre Nosotros </NavLink>
            <NavLink to="/"> <img src={logo} alt="logo Ide Pinturerias" /></NavLink>
            <NavLink to="/blog"> Blog </NavLink>
            <NavLink to="/cart"> Mi carrito </NavLink>
            <NavLink to="/account"> Mi cuenta </NavLink>
        </div>
    )
}

export default Nav;