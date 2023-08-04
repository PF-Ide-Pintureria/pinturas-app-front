import React from "react";
import deletePost from "../../../redux/actions/Blog/deletePost";
import { useDispatch } from "react-redux";

const DeleteBlogButton = ({ idBlog }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        deletePost(idBlog)(dispatch);
    }
    return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-warning text-quaternary border border-solid border-black rounded-xl w-8 h-4">Eliminar</button>
        </div>
    )
}

export default DeleteBlogButton;