import React from "react";
import { deleteProduct } from "../../redux/actions/Products/deleteProduct";
import { allProducts } from "../../redux/actions/Products/allProducts"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';


const DeleteButton = ({ idProduct }) => {
    const dispatch = useDispatch()
    const handleClick = async () => {
        dispatch(deleteProduct(idProduct));
        Swal.fire('Borrado de producto:' + idProduct)
        dispatch(allProducts())
    }

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Borrar producto</button>
        </div>
    );
}

export default DeleteButton;