import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productById } from "../../redux/actions/productById";

const Featured = ({ id, name, image, price, prodpackage }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleDetailClick = () => {
        dispatch(productById(id));
        navigate(`/products/${id}`);
    };

    return (
        <div onClick={handleDetailClick} className="w-56 h-96 m-2 flex flex-col items-center text-secondary justify-center bg-tertiary rounded-3xl ">
            <img src={image} alt="image" className='w-52' />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h4>{prodpackage}</h4>
        </div>
        
    );
}

export default Featured;