import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import getPostById from "../../redux/actions/Blog/getPostById";
import { useNavigate, useParams } from "react-router-dom";
import putPost from "../../redux/actions/Blog/putPost";

const EditBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { idPost } = useParams();
    const user = useSelector(state => state.user);
    const post = useSelector(state => state.post);
    const userName = (user?.name + " " + user?.lastName)
    const [inputs, setinputs] = useState({
        title: '',
        image: '',
        description: ''
    })

    useEffect(() => {
        getPostById(idPost)(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if (post) {
            setinputs({
                title: post?.title,
                image: post?.image,
                description: post?.description
            })
        }
    }, [post])

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (event.target.type === 'file') {
            setinputs({
                ...inputs,
                image: event.target.files[0]
            })
        }
        else {
            setinputs({
                ...inputs,
                [property]: value
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const blog = new FormData();
        blog.append("title", inputs.title);
        blog.append("description", inputs.description);
        blog.append("image", inputs.image)

        console.log('blog a enviar', blog)
        await putPost(blog, idPost)(dispatch).then(response => {
            console.log('respuesta en el submit', response)
            if (response.status === 201) {
                Swal.fire('Blog creado');
            } else {
                Swal.fire('Hubo un error al crear el post')
            }
        });
    }
    if (user.rol !== 'admin') {
        Swal.fire('Usuario no autorizado')
        navigate('/blog')
    }
    else {

        return (
            <div>
                <div className="flex flex-col justify-start">
                    <div className="flex justify-around">
                        <form className="blog-dash flex flex-col border border-solid border-primary rounded-xl mt-2 mb-2" onSubmit={handleSubmit}
                            encType="multipart/form-data">
                            <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8">Modifica el posteo</h1>
                            <div className=" flex m-8 mb-0">
                                <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Título</label>
                                <input
                                    className="bg-formBg rounded-r-lg w-72 h-8"
                                    type='text'
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
                                    value={inputs.image}
                                />
                            </div>
                            <div className=" flex m-8 mb-0 h-40">
                                <label htmlFor="" className="bg-quaternary rounded-l-xl w-40 h-40  flex items-center justify-center">Cuerpo</label>
                                <input
                                    className="bg-formBg rounded-r-lg w-72 h-50"
                                    type='textarea'
                                    name='description'
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
                                    style={{ color: "white", fontWeight: "bold" }}
                                >
                                    MODIFICAR POST
                                </h2>
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default EditBlog;