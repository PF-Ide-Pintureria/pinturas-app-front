import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPostById from '@redux/actions/Blog/getPostById'
import { useParams } from 'react-router-dom'
import BlogBackground from '@img/gradientBackground.png'

const BlogDetail = () => {
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post)
  const { idBlog } = useParams()

  useEffect(() => {
    getPostById(idBlog)(dispatch)
  }, [dispatch, idBlog])

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
                    <div className="font-abc my-6 mx-auto max-w-[100%] lg:max-w-[800px] text-justify">
                        {post.description}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BlogDetail
