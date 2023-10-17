import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import getPostById from '../../redux/actions/Blog/getPostById'
import { useNavigate, useParams } from 'react-router-dom'
import putPost from '../../redux/actions/Blog/putPost'
import { validationBlog } from './validationBlog'
const EditBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useSelector(state => state.user)
  const post = useSelector(state => state.post)
  const [errors, setErrors] = useState({})
  const [inputs, setInputs] = useState({
    title: '',
    image: '',
    description: ''
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    if (event.target.type === 'file') {
      setInputs({
        ...inputs,
        image: event.target.files[0]
      })
    } else {
      setInputs({
        ...inputs,
        [property]: value
      })
    }
    setErrors(validationBlog({ ...inputs, [property]: value }))
  }

  useEffect(() => {
    if (user.rol !== '') {
      if (user.rol !== 'admin') {
        Swal.fire({
          icon: 'error',
          text: 'Usuario no autorizado'
        })
        navigate('/blog')
      }
    }
    getPostById(id)(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (post) {
      setInputs({
        title: post.title,
        image: post.image,
        description: post.description
      })
    }
  }, [post])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      const blog = new FormData()
      blog.append('title', inputs.title)
      blog.append('description', inputs.description)
      if (inputs.image !== undefined) {
        blog.append('image', inputs.image)
      }

      const response = await putPost(blog, id)(dispatch)
      if (response.status === 500) {
        Swal.fire({
          icon: 'error',
          text: `Error al actualizar: ${response.data}`
        })
      } else {
        Swal.fire({
          icon: 'success',
          text: 'Blog actualizado'
        })
      }
    }
  }

  return (
          <div className="flex justify-around">
          <form className="blog-dash flex flex-col border border-solid border-primary rounded-xl mt-2 mb-2" onSubmit={handleSubmit}
              encType="multipart/form-data">
              <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8">Modifica el posteo</h1>
              <div className=" flex m-8 mb-0">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Título</label>
                  <input
                      className="bg-formBg rounded-r-lg w-72 h-8 text-center"
                      type='text'
                      maxLength={55}
                      name='title'
                      onChange={handleChange}
                      value={inputs.title}
                  />
              </div>
              <div className=" flex m-8 mb-0">
                  <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Imágen</label>
                  <input
                      onChange={handleChange}
                      className="bg-formBg rounded-r-lg w-72 h-8"
                      type='file'
                      accept='image/*'
                      name='image'
                  />
              </div>
              <div className=" flex m-8 mb-0 h-40">
                  <label htmlFor="" className="bg-quaternary rounded-l-xl w-40 h-40  flex items-center justify-center">Cuerpo</label>
                  <textarea
                      className="bg-formBg rounded-r-lg w-72 h-50 resize-none p-2"
                      maxLength={2000}
                      name='description'
                      cols="40"
                      rows="15"
                      wrap="hard"
                      onChange={handleChange}
                      value={inputs.description}
                  />
              </div>
              <button
                  className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                  type="submit"
              >
                  <h2
                      className="text-primary uppercase font-bold flex items-center justify-center"
                      style={{ color: 'white', fontWeight: 'bold' }}
                  >
                      MODIFICAR POST
                  </h2>
              </button>
          </form>
      </div>
  )
}

export default EditBlog
