import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const UpdateButton = ({ idProduct }) => {
    console.log('Que nos llega al button:', idProduct)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/edit/${idProduct}`)
    };

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Editar producto</button>
        </div>
    );
};

export default UpdateButton;
