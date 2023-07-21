import React from "react";
import { deleteProduct } from "../../redux/actions/deleteProduct";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const UpdateButton = ({idProduct}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/products/edit/:idProduct')
        alert('Borrado de producto:' + idProduct)
    }

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Editar producto</button>
        </div>
    );
}

export default UpdateButton;