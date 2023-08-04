import React from "react";
import { useNavigate } from "react-router-dom";



const EditBlogButton = ({ idBlog }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/blog/edit/${idBlog}`)
    }

    return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-primary text-quaternary border border-solid border-black rounded-xl w-8 h-4">Editar</button>
        </div>
    )
}

export default EditBlogButton;