import React from "react";
import deletePost from "../../../redux/actions/Blog/deletePost";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const DeleteBlogButton = ({ idBlog }) => {
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault();
        deletePost(idBlog)(dispatch)
    }
    return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Eliminar</button>
        </div>
    )
}

export default DeleteBlogButton;