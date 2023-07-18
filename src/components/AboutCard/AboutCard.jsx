import { Link } from "react-router-dom";
import style from './AboutCard.module.css'
import React from 'react';

const AboutCard = () => {
    return (
        <div className={style.container}>
            <Link to='/about'>
                <h1 className={style.title}>Sobre Nosotros</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad incidunt dolorem, deleniti labore corrupti voluptatibus excepturi culpa aliquam! Impedit cum sit iste reiciendis ducimus earum itaque possimus? Iusto, eveniet sapiente.</p>
            </Link>
        </div>
    );
}

export default AboutCard;