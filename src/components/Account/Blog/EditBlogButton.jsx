import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditBlogButton = ({ idBlog }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/blog/edit/${idBlog}`)
  }

  return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-primary rounded-xl w-20 h-12 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Editar</button>
        </div>
  )
}

export default EditBlogButton
