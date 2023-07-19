import { Link, NavLink } from 'react-router-dom';
import React from 'react'

const Featured = ({ name, image, price, prodpackage }) => {
    return (
        <div className="w-56 h-96 m-2 flex flex-col items-center text-secondary justify-center bg-tertiary rounded-3xl ">
            <NavLink to='/products/id'>
                <img src={image} alt="image" className='w-52' />
                <h3>{name}</h3>
                <h4>{price}</h4>
                <h4>{prodpackage}</h4>
            </NavLink>
        </div>
        
    );
}

export default Featured;