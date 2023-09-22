import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPostById from '../../redux/actions/Blog/getPostById'
import { useParams } from 'react-router-dom'
import BlogBackground from '../../img/gradientBackground.png'

const BlogDetail = () => {
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post)

  const { idBlog } = useParams()

  useEffect(() => {
    getPostById(idBlog)(dispatch)

    // getUserById(author)(dispatch);
  }, [dispatch, idBlog])

  // const creator = `${user.name} ${user.lastName}`;

  return (
        <div
            className="bg-cover bg-center min-h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${BlogBackground})` }}
        >
            <div className="pb-30 ">
                <div className="container mx-auto py-10 text-white">
                    <h1 className="text-4xl font-bold text-primary text-center my-6">
                        {post.title}
                    </h1>

                    <div className="flex justify-center">
                        <img
                            src={post.image ? post.image : BlogBackground}
                            alt="Blog"
                            className="w-full max-w-[500px] h-auto object-cover m-4 rounded-md"
                        />
                    </div>
                    {/* <div className="text-center mt-4">
            <h6 className="mt-2 mb-1 text-xs  text-gray-200">
              Creado por: {creator}
            </h6>
            <h4 className="mt-1 text-xs text-center">{post.date}</h4>
          </div> */}
                    <div className="my-6 mx-auto max-w-[100%] lg:max-w-[800px] text-justify">
                        {post.description}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BlogDetail
