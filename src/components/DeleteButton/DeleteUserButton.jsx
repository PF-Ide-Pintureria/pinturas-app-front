import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/deleteUser";
import Swal from 'sweetalert2';


const DeleteUserButton = ({ idUser }) => {
    const dispatch = useDispatch()
    const handleClick = async () => {
        deleteUser(idUser)(dispatch);
        Swal.fire("Usuario eliminado")
    }

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-2 h-2 p-4 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold justify-center items-center">X</button>
        </div>
    );
}

export default DeleteUserButton;